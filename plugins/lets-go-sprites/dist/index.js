var buildPlugin = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/lets-go-sprites/src/index.ts
  var index_exports = {};
  __export(index_exports, {
    plugin: () => plugin
  });

  // plugins/lets-go-sprites/plugin.json
  var plugin_default = {
    name: "Let's Go Sprites",
    id: "lets-go-sprites",
    version: "0.1.0",
    api_version: 1
  };

  // plugins/lets-go-sprites/src/index.ts
  var plugin = {
    ...plugin_default,
    getMonSpritePath: (params) => {
      const { dexNum, formeNum, format, isShiny } = params;
      if (format !== "PB7") return null;
      if (dexNum > NationalDex.Mew && dexNum !== NationalDex.Meltan && dexNum !== NationalDex.Melmetal) {
        return null;
      }
      const speciesData = PokemonData[dexNum];
      if (!speciesData) return null;
      const formeData = speciesData.formes[formeNum];
      if (!formeData || formeData.gen > 7) return null;
      if (formeData.regional && formeData.regional !== "Alola") return null;
      return `assets/${isShiny ? "shiny/" : ""}${formeData.sprite}.png`;
    }
  };
  return __toCommonJS(index_exports);
})();
