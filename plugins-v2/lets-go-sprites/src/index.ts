import { FormeMetadata, Generation, Region, SpeciesMetadata } from '../../../types/pkmrs.js'
import PluginMetadata from '../plugin.json'

declare function SpeciesLookup(national_dex: number): SpeciesMetadata | undefined
declare function MetadataLookup(
  national_dex: number,
  forme_index: number
): FormeMetadata | undefined

declare var NationalDex: Record<string, number>

interface MonData {
  dexNum: number
  formeNum: number
  format: string
  isFemale?: boolean
  isShiny?: boolean
}

interface SpritePlugin {
  name: string
  id: string
  version: string
  api_version: number
  getMonSpritePath: (params: MonData) => string | null
}

export const plugin: SpritePlugin = {
  ...PluginMetadata,
  getMonSpritePath: (params: MonData) => {
    const { dexNum, formeNum, format, isShiny } = params

    if (format !== 'PB7') return null
    if (
      dexNum > NationalDex.Mew &&
      dexNum !== NationalDex.Meltan &&
      dexNum !== NationalDex.Melmetal
    ) {
      return null
    }

    const speciesData = SpeciesLookup(dexNum)
    if (!speciesData) return null

    const formeData = MetadataLookup(dexNum, formeNum)
    if (!formeData || formeData.introduced > Generation.G7) return null

    if (formeData.regional && formeData.regional !== Region.Alola) return null

    return `assets/${isShiny ? 'shiny/' : ''}${formeData.sprite}.png`
  },
}
