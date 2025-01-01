

import json
import os
# from download.downloadAllMonSprites import download_all_sprites_all_mons
from download.constants import gender_differences, swsh_transferrable
from download.typedefs import Forme, Pokemon

swsh_assets_path = os.path.join("plugins", "swsh-sprites", "assets")
if not (pokemon_json_path := os.getenv("POKEMON_JSON_PATH")):
    print("POKEMON_JSON_PATH must be present. exiting")
    exit(1)

with open(pokemon_json_path) as f:
    POKEMON_DATA: dict[str, Pokemon] = json.load(f)

def get_swsh_missing() -> dict[str, list[Forme]]:
    swsh_missing: dict[str, list[str]] = {}

    for dex_num in swsh_transferrable:
        mon = POKEMON_DATA[str(dex_num)]
        for forme in mon["formes"]:
            if forme["restrictedLegendary"] or forme["subLegendary"] or forme["ultraBeast"] or "-hisui" in forme["sprite"] or "-mega" in forme["sprite"] or forme["gen"] > 8 or forme["sprite"].endswith("-cap"):
                continue
            if not os.path.exists(os.path.join(swsh_assets_path, forme["sprite"] + ".png")):
                swsh_missing.setdefault(mon["name"], []).append(forme["sprite"])
        
        if dex_num in gender_differences and not os.path.exists(os.path.join(swsh_assets_path, mon["formes"][0]["sprite"] + "-f.png")):
            swsh_missing.setdefault(mon["name"], []).append(mon["formes"][0]["sprite"] + "-f")

    return swsh_missing

if __name__ == "__main__":
    print(get_swsh_missing())
    # download_all_sprites_all_mons()