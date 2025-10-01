import { Pokemon } from "pokemon-species-data";
import PluginMetadata from "../plugin.json";

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
  name: string;
  id: string;
  version: string;
  api_version: number;
  getMonSpritePath: (params: MonData) => string | null;
}

export const plugin: SpritePlugin = {
  ...PluginMetadata,
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
