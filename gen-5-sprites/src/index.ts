import { Pokemon } from "pokemon-species-data";

declare var PokemonData: {
  readonly [key: number]: Pokemon;
};

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
  pluginName: "Gen 5 Animated Sprites",
  pluginID: "gen-5-sprites",
  getMonSpritePath: (params: MonData) => {
    const { dexNum, formeNum, format, isShiny } = params;

    if (format !== "PK5") return null;

    const speciesData = PokemonData[dexNum];
    if (!speciesData) return null;

    const formeData = speciesData.formes[formeNum];
    if (!formeData) return null;
    if (formeData.gen > 5) return null;

    return `assets/${isShiny ? "shiny/" : ""}${formeData.sprite}.gif`;
  },
};
