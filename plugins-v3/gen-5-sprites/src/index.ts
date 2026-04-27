import { FormMetadata, Generation, SpeciesMetadata } from '../../types/pkmrs'
import PluginMetadata from '../plugin.json'

declare function SpeciesLookup(national_dex: number): SpeciesMetadata | undefined
declare function MetadataLookup(national_dex: number, form_index: number): FormMetadata | undefined

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

    if (format !== 'PK5') return null

    const speciesData = SpeciesLookup(dexNum)
    if (!speciesData) return null

    const formData = MetadataLookup(dexNum, formNum)
    if (!formData || formData.introducedGen > Generation.G5) return null

    return `assets/${isShiny ? 'shiny/' : ''}${formData.sprite}.gif`
  },
}
