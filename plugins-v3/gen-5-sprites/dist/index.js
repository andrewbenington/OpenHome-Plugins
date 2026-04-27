var buildPlugin = (() => {
  var __defProp = Object.defineProperty
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor
  var __getOwnPropNames = Object.getOwnPropertyNames
  var __hasOwnProp = Object.prototype.hasOwnProperty
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, { get: all[name], enumerable: true })
  }
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === 'object') || typeof from === 'function') {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          })
    }
    return to
  }
  var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod)

  // plugins-v2/gen-5-sprites/src/index.ts
  var index_exports = {}
  __export(index_exports, {
    plugin: () => plugin,
  })

  // plugins-v2/gen-5-sprites/plugin.json
  var plugin_default = {
    name: 'Gen 5 Animated Sprites',
    id: 'gen-5-sprites',
    version: '1.2.0',
    api_version: 2,
  }

  // plugins-v2/gen-5-sprites/src/index.ts
  var plugin = {
    ...plugin_default,
    getMonSpritePath: (params) => {
      const { dexNum, formNum, format, isShiny } = params
      if (format !== 'PK5') return null
      const speciesData = SpeciesLookup(dexNum)
      if (!speciesData) return null
      const formData = MetadataLookup(dexNum, formNum)
      if (!formData || formData.introducedGen > 5 /* G5 */) return null
      return `assets/${isShiny ? 'shiny/' : ''}${formData.sprite}.gif`
    },
  }
  return __toCommonJS(index_exports)
})()
