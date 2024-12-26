import { NationalDex, PokemonData } from "pokemon-species-data";

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
  pluginName: "Let's Go Sprites",
  pluginID: "lets-go-sprites",
  getMonSpritePath: (params: MonData) => {
    const { dexNum, formeNum, format, isShiny } = params;

    if (format !== "PB7") return null;
    if (
      dexNum > NationalDex.Mew &&
      dexNum !== NationalDex.Meltan &&
      dexNum !== NationalDex.Melmetal
    ) {
      return null;
    }

    const speciesData = PokemonData[dexNum];
    if (!speciesData) return null;

    const formeData = speciesData.formes[formeNum];
    if (!formeData || formeData.gen > 7) return null;

    if (formeData.regional && formeData.regional !== "Alola") return null;

    return `assets/${isShiny ? "shiny/" : ""}${formeData.sprite}.png`;
  },
};
