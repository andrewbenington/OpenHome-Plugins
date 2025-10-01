interface MonData {
  dexNum: number
  formeNum: number
  format: string
  isFemale?: boolean
  isShiny?: boolean
}

export interface SpritePlugin {
  name: string
  id: string
  version: string
  api_version: number
  getMonSpritePath: (params: MonData) => string | null
}

export class SpeciesMetadata {
  private constructor()
  free(): void
  calculateLevel(exp: number): number
  readonly name: string
  readonly formes: FormeMetadata[]
  readonly nationalDex: number
  readonly levelUpType: string
}

export class FormeMetadata {
  private constructor()
  free(): void
  abilityByNum(num: number): AbilityIndex
  abilityByNumGen3(num: number): AbilityIndex
  readonly nationalDex: NatDexIndex
  readonly formeIndex: number
  readonly isBaseForme: boolean
  readonly isMega: boolean
  readonly isGmax: boolean
  readonly isBattleOnly: boolean
  readonly isCosmetic: boolean
  readonly genderRatio: GenderRatio
  readonly baseStats: Stats16Le
  readonly hiddenAbility: AbilityIndex | undefined
  readonly baseHeight: number
  readonly baseWeight: number
  readonly preEvolution: SpeciesAndForme | undefined
  readonly introduced: Generation
  readonly isRestrictedLegend: boolean
  readonly isSubLegend: boolean
  readonly isMythical: boolean
  readonly isUltraBeast: boolean
  readonly isParadox: boolean
  readonly regional: Region | undefined
  readonly type1: string
  readonly type1Index: number
  readonly type2: string | undefined
  readonly type2Index: number | undefined
  readonly abilities: AbilityIndex[]
  readonly eggGroups: string[]
  readonly evolutions: SpeciesAndForme[]
  readonly speciesName: string
  readonly formeName: string
  readonly sprite: string
  readonly spriteCoords: Uint8Array
}

export class SpeciesAndForme {
  private constructor()
  free(): void
  getMetadata(): FormeMetadata
  static tryNew(national_dex: number, forme_index: number): SpeciesAndForme | undefined
  readonly nationalDex: number
  readonly formeIndex: number
}

export enum Ball {
  None = 0,
  Master = 1,
  Ultra = 2,
  Great = 3,
  Poke = 4,
  Safari = 5,
  Net = 6,
  Dive = 7,
  Nest = 8,
  Repeat = 9,
  Timer = 10,
  Luxury = 11,
  Premier = 12,
  Dusk = 13,
  Heal = 14,
  Quick = 15,
  Cherish = 16,
  Fast = 17,
  Level = 18,
  Lure = 19,
  Heavy = 20,
  Love = 21,
  Friend = 22,
  Moon = 23,
  Sport = 24,
  Dream = 25,
  Beast = 26,
  Strange = 27,
  PokeLegendsArceus = 28,
  GreatLegendsArceus = 29,
  UltraLegendsArceus = 30,
  Feather = 31,
  Wing = 32,
  Jet = 33,
  HeavyLegendsArceus = 34,
  Leaden = 35,
  Gigaton = 36,
  Origin = 37,
}

export enum EggGroup {
  Monster = 0,
  Fairy = 1,
  HumanLike = 2,
  Field = 3,
  Flying = 4,
  Dragon = 5,
  Bug = 6,
  Water1 = 7,
  Water2 = 8,
  Water3 = 9,
  Grass = 10,
  Amorphous = 11,
  Mineral = 12,
  Ditto = 13,
  NoEggsDiscovered = 14,
}

export enum Gender {
  Male = 0,
  Female = 1,
  Genderless = 2,
  Invalid = 3,
}

export enum GenderRatio {
  Genderless = 0,
  AllMale = 1,
  AllFemale = 2,
  Equal = 3,
  M1ToF7 = 4,
  M1ToF3 = 5,
  M3ToF1 = 6,
  M7ToF1 = 7,
}

export enum Generation {
  G1 = 0,
  G2 = 1,
  G3 = 2,
  G4 = 3,
  G5 = 4,
  G6 = 5,
  G7 = 6,
  G8 = 7,
  G9 = 8,
  None = 9,
}

export enum Language {
  None = 0,
  Japanese = 1,
  English = 2,
  French = 3,
  Italian = 4,
  German = 5,
  UNUSED = 6,
  SpanishSpain = 7,
  Korean = 8,
  ChineseSimplified = 9,
  ChineseTraditional = 10,
}

export enum LevelUpType {
  MediumFast = 0,
  Erratic = 1,
  Fluctuating = 2,
  MediumSlow = 3,
  Fast = 4,
  Slow = 5,
}

export enum MarkingValue {
  Unset = 0,
  Blue = 1,
  Red = 2,
}

export enum PkmType {
  Normal = 0,
  Fighting = 1,
  Flying = 2,
  Poison = 3,
  Ground = 4,
  Rock = 5,
  Bug = 6,
  Ghost = 7,
  Steel = 8,
  Fire = 9,
  Water = 10,
  Grass = 11,
  Electric = 12,
  Psychic = 13,
  Ice = 14,
  Dragon = 15,
  Dark = 16,
  Fairy = 17,
}

export enum Region {
  Kanto = 0,
  Johto = 1,
  Hoenn = 2,
  Sinnoh = 3,
  Unova = 4,
  Kalos = 5,
  Alola = 6,
  Galar = 7,
  Hisui = 8,
  Paldea = 9,
}

export class AbilityIndex {
  private constructor()
  free(): void
  static new_js(val: number): AbilityIndex | undefined
  readonly index: number
  readonly name: string
}

export class ContestStats {
  free(): void
  constructor(
    cool: number,
    beauty: number,
    cute: number,
    smart: number,
    tough: number,
    sheen: number
  )
  cool: number
  beauty: number
  cute: number
  smart: number
  tough: number
  sheen: number
}

export class MoveSlot {
  private constructor()
  free(): void
}

export class NatDexIndex {
  free(): void
  constructor(val: number)
  readonly index: number
}

export class NatureIndex {
  free(): void
  constructor(val: number)
  readonly index: number
}

export class PokeDate {
  free(): void
  constructor(year: number, month: number, day: number)
  year(): number
  set_year(value: number): void
  month: number
  day: number
}

export class Stats16Le {
  free(): void
  constructor(hp: number, atk: number, def: number, spa: number, spd: number, spe: number)
  hp: number
  atk: number
  def: number
  spa: number
  spd: number
  spe: number
}

export class Stats8 {
  free(): void
  constructor(hp: number, atk: number, def: number, spa: number, spd: number, spe: number)
  hp: number
  atk: number
  def: number
  spa: number
  spd: number
  spe: number
}

export class StatsPreSplit {
  private constructor()
  free(): void
  hp: number
  atk: number
  def: number
  spc: number
  spe: number
}

export class TrainerMemory {
  free(): void
  constructor(intensity: number, memory: number, feeling: number, text_variable: number)
  intensity: number
  memory: number
  feeling: number
  textVariables: number
}
