import type { FormMetadata, SpeciesMetadata } from '../../../types/pkmrs.js'
import { Generation } from '../../enums/pkmrs.js'
import PluginMetadata from '../plugin.json'

declare function SpeciesLookup(national_dex: number): SpeciesMetadata | undefined
declare function MetadataLookup(national_dex: number, form_index: number): FormMetadata | undefined

declare var NationalDex: Record<string, number>

interface MonData {
  dexNum: number
  formNum: number
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
    const { dexNum, formNum, format, isShiny } = params

    if (format !== 'PK6') return null
    if (dexNum > NationalDex.Volcanion) return null

    const speciesData = SpeciesLookup(dexNum)
    if (!speciesData) return null

    const formData = MetadataLookup(dexNum, formNum)
    if (!formData || formData.introducedGen > Generation.G6) return null

    if (formData.regional) return null

    return `assets/${isShiny ? 'shiny/' : ''}${formData.sprite}.png`
  },
}
