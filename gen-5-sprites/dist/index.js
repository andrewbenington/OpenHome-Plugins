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

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    plugin: () => plugin
  });
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
      return `assets/${isShiny ? "shiny/" : ""}${formeData.sprite}.gif`;
    }
  };
  return __toCommonJS(index_exports);
})();
