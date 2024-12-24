// src/index.ts
import { PokemonData } from "pokemon-species-data";
var plugin = {
  pluginName: "Gen 5 Animated Sprites",
  pluginID: "gen-5-sprites",
  getMonSpritePath: (params) => {
    const { dexNum, formeNum, format, isShiny } = params;
    if (format !== "PK5") return null;
    const speciesData = PokemonData[dexNum];
    if (!speciesData) return null;
    const formeData = speciesData.formes[formeNum];
    if (!formeData) return null;
    if (formeData.gen > 5) return null;
    return `assets/${isShiny ? "shiny/" : ""}${formeData.formeName.toLowerCase()}.gif`;
  }
};
export {
  plugin
};
//# sourceMappingURL=index.js.map