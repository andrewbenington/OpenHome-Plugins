import json
import os
import re
import threading
import urllib.request

import requests

from download import constants
from bs4 import BeautifulSoup, ResultSet, Tag

from download.typedefs import Pokemon


if not (pokemon_json_path := os.getenv("POKEMON_JSON_PATH")):
    print("POKEMON_JSON_PATH must be present. exiting")
    exit(1)

with open(pokemon_json_path) as f:
    POKEMON_DATA: dict[str, Pokemon] = json.load(f)

def format_pokemon_db_forme(dex_num: int, form_num: int) -> str:
    if dex_num < 1 or dex_num > len(POKEMON_DATA):
        return ""
    forme_name = (
        POKEMON_DATA[str(dex_num)]["formes"][form_num]["sprite"]
    )
    if "-core" in forme_name:
        pattern = r"^(.*)-core-(\w+)$"
        match = re.match(pattern, forme_name)

        if match:
            forme_name = f"{match.group(1)}-{match.group(2)}-core"
    forme_name = forme_name.replace("galar", "galarian")
    if dex_num == 555 and "zen" not in forme_name:
        forme_name += "-standard"
    if forme_name.endswith("pokeball"):
        forme_name = forme_name[:-4] + "-ball"
    elif forme_name.endswith("-alola"):
        forme_name = forme_name + "n"
    elif "paldea" in forme_name:
        forme_name = forme_name.replace("paldea", "paldean")
    elif forme_name.endswith("-hisui"):
        forme_name = forme_name + "an"
    elif forme_name.endswith("-exclamation"):
        forme_name = forme_name[:-11] + "em"
    elif forme_name.endswith("-question"):
        forme_name = forme_name[:-8] + "qm"
    return forme_name


def get_pokemon_db_sprite(dex_num: int, form_num: int, is_shiny: bool, game: str, is_female=False, forme_name=None) -> str:
    if forme_name is None:
        forme_name = format_pokemon_db_forme(dex_num, form_num)
    female_stats = ["indeedee-f", "meowstic-f",
                    "oinkologne-f", "basculegion-f"]
    if game == "home" and forme_name in female_stats:
        forme_name += "emale"
    elif game == "bank" and forme_name.endswith("-core"):
        forme_name = forme_name[:-5]
    elif forme_name == "pikachu-partner-cap":
        forme_name = "pikachu-johto-cap"
    elif game == "black-white/anim" and ("therian" in forme_name or "kyurem-" in forme_name or "resolute" in forme_name):
        game = "black-white-2/anim"
    elif game == "red-blue":
        forme_name += "-color"
    elif game == "black-white/anim" and "darmanitan" in forme_name:
        forme_name += "-mode"
    extension = ".gif" if "anim" in game else ".png"
    shininess = 'normal' if not is_shiny or game == "scarlet-violet" else 'shiny'
    female_tag = '-female' if is_female and forme_name in female_stats else ('-f' if is_female else '')
    return f"https://img.pokemondb.net/sprites/{game}/{shininess}/{forme_name}{female_tag}{extension}"

def get_pokencyclopedia_coloxd_sprite(dex_num, is_shiny, forme_name):
    if dex_num == 201 and len(forme_name) > 1:
        forme_name = "-" + forme_name
    return f"https://www.pokencyclopedia.info/sprites/spin-off/ani_xd{'_shiny' if is_shiny else ''}/ani_xd{'-S' if is_shiny else ''}_{str(dex_num).zfill(3)}{'-' + forme_name if forme_name is not None else ''}.gif"


def download_png(url, directory, filename, overwrite=False):
    # Check if the file already exists in the directory
    if not overwrite and os.path.isfile(os.path.join(directory, filename)):
        # print(f"{filename} already exists in {directory}")
        return False, False

    print(f"Downloading {filename} from {url}...")
    try:
        opener = urllib.request.build_opener()
        opener.addheaders = [('User-agent', 'Mozilla/5.0')]
        urllib.request.install_opener(opener)
        urllib.request.urlretrieve(url, os.path.join(directory, filename))
        print(f"\tDownloaded {filename} to {directory}")
        return True, False
    except Exception as e:
        print(f"\tError downloading: {e}")
        return True, "404" not in str(e)
    # print(f"{filename} from {url}")
    # return False, False

def excludeFormeGen45(dex_number, forme):
    if "-mega" in forme["sprite"] or "-Fairy" in forme["formeName"]:
        return True
    return excludeFormeGen456(dex_number, forme)


def excludeFormeGen456(dex_number, forme):
    if (dex_number in constants.RegionalForms and
            forme["formeNumber"] in constants.RegionalForms[dex_number]):
        return True
    return dex_number in constants.first_forme_only and forme["formeNumber"] != 0


def excludeFormeGen4(dex_number, forme):
    return excludeFormeGen45(dex_number, forme)


def excludeFormeGen5(dex_number, forme):
    if forme["formeName"] == "Pichu-Spiky-Eared":
        return True
    return excludeFormeGen45(dex_number, forme)


def excludeFormeGen7(dex_number, forme):
    if dex_number not in constants.alola_dex:
        return True
    if dex_number == 25 and forme["formeNumber"] > 7:
        return True
    if forme["formeName"] == "Pichu-Spiky-Eared":
        return True
    return dex_number in constants.Gen89RegionalForms and forme["formeNumber"] in constants.Gen89RegionalForms[dex_number]


def excludeFormeLA(dex_number, forme):
    if dex_number not in constants.legends_dex:
        return True
    if dex_number not in [37, 38, 215]:
        if dex_number in constants.HisuianForms:
            if forme["formeNumber"] not in constants.HisuianForms[dex_number]:
                return True
        elif dex_number in constants.RegionalForms and forme["formeNumber"] != 0:
            return True
    if forme["formeName"] == "Pichu-Spiky-Eared":
        return True
    return "-Mega" in forme["formeName"] or (dex_number == 25 and forme["formeNumber"] > 0)

def exclude_forme_gen8(dex_number, forme):
    if dex_number > 493 and dex_number not in constants.swsh_transferrable:
        return True
    if forme["formeName"] == "Pichu-Spiky-Eared":
        return True
    if dex_number in constants.HisuianForms and forme["formeNumber"] in constants.HisuianForms[dex_number]:
        return True
    if dex_number in constants.PaldeanForms and forme["formeNumber"] in constants.PaldeanForms[dex_number]:
        return True
    if dex_number in constants.AlolanForms and forme["formeNumber"] in constants.AlolanForms[dex_number] and dex_number not in constants.swsh_transferrable:
        return True
    return "-Mega" in forme["formeName"] or "-Primal" in forme["formeName"] or (dex_number == 25 and forme["formeNumber"] > 0)

def exclude_forme_gen9(dex_number, forme):
    if dex_number not in constants.sv_transferrable:
        return True
    if forme["formeName"] == "Pichu-Spiky-Eared":
        return True
    if forme["formeName"] == "Floette-Eternal":
        return True
    return "-Mega" in forme["formeName"] or "-Primal" in forme["formeName"] or (dex_number == 25 and forme["formeNumber"] > 0)


def exclude_forme_home(dex_number, forme):
    if forme["formeName"] == "Pichu-Spiky-Eared":
        return True
    if forme["formeName"] == "Floette-Eternal":
        return True
    return "regional" in forme and forme["regional"] == "Paldea"


def download_all_sprites_all_mons():
    # os.makedirs("public/sprites/home/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen1", exist_ok=True)
    # os.makedirs("public/sprites/gen2/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen3/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen3gc/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen4/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen5/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen6/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen7/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen8/shiny", exist_ok=True)
    os.makedirs("swsh-sprites/assets/shiny", exist_ok=True)
    # os.makedirs("public/sprites/gen9/shiny", exist_ok=True)
    for dex_num_str, mon in POKEMON_DATA.items():
        dex_number = int(dex_num_str)
        for forme_number, forme in enumerate(mon["formes"]):
            thread_all_sprite_downloads(dex_number, forme, forme_number)

def thread_all_sprite_downloads(dex_number, forme, forme_number):
    if dex_number != 869:
        if 'sprite' not in forme:
            print(forme['name'], 'missing sprite')
        thread = threading.Thread(target=download_all_sprites, args=(
            dex_number, forme, forme_number, forme["sprite"]))
        thread.start()
    else:
        for sweet in constants.sweets:
            thread = threading.Thread(target=download_all_sprites, args=(
                dex_number, forme, forme_number, forme["sprite"] + "-" + sweet))
            thread.start()


def download_all_sprites(dex_number, forme, forme_number, forme_name):
    if "Totem" in forme["formeName"]:
        return
    # if dex_number <= 151 and forme_number == 0:
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "red-blue", "gen1", False)
    # if dex_number <= 251 and forme_number == 0 or dex_number == 201 and forme_number <= 25:
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "crystal", "gen2", False)
    # if dex_number <= 386 and forme_number == 0 or dex_number == 201 or dex_number == 386:
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "emerald", "gen3", False)
    #     download_sprite_variants_pokencyclopedia_coloxd(dex_number, forme_number, forme_name)
    # if dex_number <= 493 and not excludeFormeGen4(dex_number, forme):
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name,
    #         "heartgold-soulsilver", "gen4", dex_number != 133 and dex_number != 419)
    # if dex_number <= 649 and not excludeFormeGen5(dex_number, forme):
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "black-white/anim", "gen5", dex_number != 133)
    # if dex_number <= 721 and not excludeFormeGen456(dex_number, forme):
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "bank", "gen6", dex_number != 133)
    # if dex_number == 774:
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "sun-moon", "gen7")
    # elif dex_number <= 809 and not excludeFormeGen7(dex_number, forme):
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "ultra-sun-ultra-moon", "gen7", dex_number != 133)
    if forme_number == 0 and dex_number in constants.swsh_transferrable:
        download_swsh_sprites_bulbagarden(dex_number)
    # if dex_number <= 1025 and not exclude_forme_home(dex_number, forme):
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "home", "home")
    # if dex_number <= 724 and not excludeFormeLA(dex_number, forme):
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "legends-arceus", "gen8a")
    # if dex_number <= 1025 and not exclude_forme_gen9(dex_number, forme):
    #     download_sprite_variants_pokemon_db(
    #         dex_number, forme_number, forme_name, "scarlet-violet", "gen9")

def download_sprite_variants_pokemon_db(dex_number, forme_number, forme_name, game, folder, includeFemale=True):
    if "-totem" in forme_name:
        return
    extension = ".gif" if "anim" in game else ".png"
    download_png(get_pokemon_db_sprite(dex_number, forme_number, False,
                                       game, False, forme_name), "public/sprites/" + folder, forme_name + extension)
    if game == "red-blue" or game == 'scarlet-violet':
        return
    download_png(get_pokemon_db_sprite(dex_number, forme_number, True,
                                       game, False, forme_name), "public/sprites/" + folder + "/shiny", forme_name + extension)
    if includeFemale and dex_number in constants.gender_differences and forme_number == 0 and dex_number != 255 and dex_number != 418:
        download_png(get_pokemon_db_sprite(dex_number, forme_number, False,
                                           game, is_female=True), "public/sprites/" + folder, forme_name + "-f" + extension)
        download_png(get_pokemon_db_sprite(dex_number, forme_number, True,
                                           game, is_female=True), "public/sprites/" + folder + "/shiny", forme_name + "-f" + extension)

def download_sprite_variants_pokencyclopedia_coloxd(dex_number, forme_number, forme_name):
    gen3_forme = None
    if forme_number > 0 or dex_number == 201:
        gen3_forme = forme_name.split('-')[1]
    download_png(get_pokencyclopedia_coloxd_sprite(dex_number, False, gen3_forme), "public/sprites/gen3gc", forme_name + ".gif")
    download_png(get_pokencyclopedia_coloxd_sprite(dex_number, True, gen3_forme), "public/sprites/gen3gc/shiny", forme_name + ".gif")

def download_swsh_sprites_bulbagarden(dex_num) -> str | None:
    mon = POKEMON_DATA[str(dex_num)]
    
    # Set the URL of the Bulbapedia page
    url = f"https://bulbapedia.bulbagarden.net/wiki/{mon["name"]}_(Pokémon)"
    # print("scraping", url)


    # Send a GET request to the page and parse the HTML content using BeautifulSoup
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    spritesSpan = soup.find(attrs={"id": "Sprites"})
    if spritesSpan is None:
        return "Could not find Sprites span"
    
    
    gen8SpritesTab = spritesSpan.find_next("small", string="Generation VIII")
    if gen8SpritesTab is None:
        return "Could not find Generation VIII sprites tab"
    gen8TBody =gen8SpritesTab.find_parent(name="tbody")
    if gen8TBody is None:
        return "Could not find Generation VIII sprites tbody"
    
    images: ResultSet[Tag] = gen8TBody.find_all(name="img")
    imageURLs = ["/".join(image.attrs["src"].replace("/thumb", "").split("/")[:-1]) for image in images]

    formes = mon["formes"]
    for i, forme in enumerate(formes):
        formeSuffix = forme["formeName"].removeprefix(forme["name"])
        urlSuffix = ""
        if i > 0:
            match formeSuffix:
                case "-Alola":
                    urlSuffix = "A"
                case "-Galar":
                    urlSuffix = "G"
                case "-Zen":
                    urlSuffix = "Z"
                case "-Galar-Zen":
                    urlSuffix = "GZ"
                case "-Noice":
                    urlSuffix = "N"
                case "-East":
                    urlSuffix = "E"
                case "-Crowned":
                    urlSuffix = "C"
                case "-Small":
                    urlSuffix = "Sm"
                case "-Large":
                    urlSuffix = "La"
                case "-Super":
                    urlSuffix = "Su"
                case "-Midnight":
                    urlSuffix = "M"
                case "-Dusk":
                    urlSuffix = "D"
                case "-Blue-Striped":
                    urlSuffix = "B"
                case "-Mega":
                    continue
                case "-F":
                    urlSuffix = "_f"
                case _:
                    print(f"Unknown forme: {forme["formeName"]}")
                    continue
        elif dex_num in constants.gender_differences:
            urlSuffix = "_m"

        standard_image = next((i for i in imageURLs if 'Spr_8s' in i and i.endswith(urlSuffix + ".png")), None)
        if standard_image is not None:
            # print(f"downloading {standard_image}")
            try:
                download_png(standard_image, "swsh-sprites/assets", forme["sprite"] + ".png")
            except Exception as e:
                print(e)
        else:
            print(f"Missing Non-Shiny: {forme["formeName"]}")

        shiny_image = next((i for i in imageURLs if 'Spr_8s' in i and i.endswith(urlSuffix + "_s.png")), None)
        if shiny_image is not None:
            # print(f"downloading {shiny_image}")
            try:
                download_png(shiny_image, "swsh-sprites/assets/shiny", forme["sprite"] + ".png")
            except Exception as e:
                print(e)
        else:
            print(f"Missing Shiny: {forme["formeName"]}")

    if dex_num not in constants.gender_differences:
        return
    
    forme = formes[0]
    
    female_image = next((i for i in imageURLs if 'Spr_8s' in i and i.endswith("_f.png")), None)
    if female_image is not None:
        # print(f"downloading {standard_image}")
        try:
            download_png(female_image, "swsh-sprites/assets", forme["sprite"] + "-f.png")
        except Exception as e:
            print(e)
    else:
        print(f"Missing Non-Shiny Female: {forme["formeName"]}")

    female_shiny_image = next((i for i in imageURLs if 'Spr_8s' in i and i.endswith("_f_s.png")), None)
    if female_shiny_image is not None:
        # print(f"downloading {standard_image}")
        try:
            download_png(female_shiny_image, "swsh-sprites/assets/shiny", forme["sprite"] + "-f.png")
        except Exception as e:
            print(e)
    else:
        print(f"Missing Shiny Female: {forme["formeName"]}")
