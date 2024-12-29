import { Pokemon } from "pokemon-species-data";

declare var PokemonData: {
  readonly [key: number]: Pokemon;
};

declare var NationalDex: Record<string, number>;

interface MonData {
  dexNum: number;
  formeNum: number;
  format: string;
  isFemale?: boolean;
  isShiny?: boolean;
}

interface SpritePlugin {
  pluginName: string;
  pluginID: string;
  getMonSpritePath: (params: MonData) => string | null;
}

export const plugin: SpritePlugin = {
  pluginName: "Gen 6 Sprites",
  pluginID: "gen-6-sprites",
  getMonSpritePath: (params: MonData) => {
    const { dexNum, formeNum, format, isShiny } = params;

    if (format !== "PK6") return null;
    if (dexNum > NationalDex.Volcanion) return null;

    const speciesData = PokemonData[dexNum];
    if (!speciesData) return null;

    const formeData = speciesData.formes[formeNum];
    if (!formeData || formeData.gen > 6) return null;

    if (formeData.regional) return null;

    return `assets/${isShiny ? "shiny/" : ""}${formeData.sprite}.png`;
  },
};
