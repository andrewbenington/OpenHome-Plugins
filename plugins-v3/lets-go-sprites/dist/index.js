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

  // plugins-v3/lets-go-sprites/src/index.ts
  var index_exports = {};
  __export(index_exports, {
    plugin: () => plugin
  });

  // plugins-v3/lets-go-sprites/plugin.json
  var plugin_default = {
    name: "Let's Go Sprites",
    id: "lets-go-sprites",
    version: "1.3.0",
    api_version: 3
  };

  // plugins-v3/lets-go-sprites/src/index.ts
  var plugin = {
    ...plugin_default,
    getMonSpritePath: (params) => {
      const { dexNum, formNum, format, isShiny } = params;
      if (format !== "PB7") return null;
      if (dexNum > NationalDex.Mew && dexNum !== NationalDex.Meltan && dexNum !== NationalDex.Melmetal) {
        return null;
      }
      const speciesData = SpeciesLookup(dexNum);
      if (!speciesData) return null;
      const formData = MetadataLookup(dexNum, formNum);
      if (!formData || formData.introducedGen > 7 /* G7 */) return null;
      if (formData.regional && formData.regional !== "Alola") return null;
      return `assets/${isShiny ? "shiny/" : ""}${formData.sprite}.png`;
    }
  };
  return __toCommonJS(index_exports);
})();
