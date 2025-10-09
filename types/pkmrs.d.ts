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
  None = 0,
  G1 = 1,
  G2 = 2,
  G3 = 3,
  G4 = 4,
  G5 = 5,
  G6 = 6,
  G7 = 7,
  G8 = 8,
  G9 = 9,
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
export enum OriginGame {
  Invalid0 = 0,
  Sapphire = 1,
  Ruby = 2,
  Emerald = 3,
  FireRed = 4,
  LeafGreen = 5,
  Invalid6 = 6,
  HeartGold = 7,
  SoulSilver = 8,
  Invalid9 = 9,
  Diamond = 10,
  Pearl = 11,
  Platinum = 12,
  Invalid13 = 13,
  Invalid14 = 14,
  ColosseumXd = 15,
  BattleRevolution = 16,
  Invalid17 = 17,
  Invalid18 = 18,
  Invalid19 = 19,
  White = 20,
  Black = 21,
  White2 = 22,
  Black2 = 23,
  X = 24,
  Y = 25,
  AlphaSapphire = 26,
  OmegaRuby = 27,
  Invalid28 = 28,
  Invalid29 = 29,
  Sun = 30,
  Moon = 31,
  UltraSun = 32,
  UltraMoon = 33,
  Go = 34,
  Red = 35,
  BlueGreen = 36,
  BlueJpn = 37,
  Yellow = 38,
  Gold = 39,
  Silver = 40,
  Crystal = 41,
  LetsGoPikachu = 42,
  LetsGoEevee = 43,
  Sword = 44,
  Shield = 45,
  Home = 46,
  LegendsArceus = 47,
  BrilliantDiamond = 48,
  ShiningPearl = 49,
  Scarlet = 50,
  Violet = 51,
}
export enum OriginMark {
  GameBoy = 0,
  Pentagon = 1,
  Alola = 2,
  LetsGo = 3,
  Galar = 4,
  Hisui = 5,
  Bdsp = 6,
  Tera = 7,
  Go = 8,
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
  Orre = 10,
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
export class FormeMetadata {
  private constructor()
  free(): void
  abilityByNum(num: number): AbilityIndex
  abilityByNumGen3(num: number): AbilityIndex
  genderFromAtkDv(atk_dv: number): Gender
  genderFromPid(pid: number): Gender
  isEvolutionOf(other: FormeMetadata): boolean
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
  readonly isRestrictedLegend: boolean
  readonly isSubLegend: boolean
  readonly isMythical: boolean
  readonly isUltraBeast: boolean
  readonly isParadox: boolean
  readonly type1: string
  readonly type1Index: number
  readonly type2: string | undefined
  readonly type2Index: number | undefined
  readonly abilities: AbilityIndex[]
  readonly eggGroups: string[]
  readonly evolutions: SpeciesAndForme[]
  readonly speciesName: string
  readonly formeName: string
  readonly introducedGen: Generation
  readonly regional: string | undefined
  readonly sprite: string
  readonly spriteCoords: Uint8Array
}
export class Geolocation {
  free(): void
  constructor(region: number, country: number)
  region: number
  country: number
}
export class Geolocations {
  free(): void
  constructor(
    geo1: Geolocation,
    geo2: Geolocation,
    geo3: Geolocation,
    geo4: Geolocation,
    geo5: Geolocation
  )
  0: Geolocation
  1: Geolocation
  2: Geolocation
  3: Geolocation
  4: Geolocation
}
export class HyperTraining {
  free(): void
  constructor(hp: boolean, atk: boolean, def: boolean, spa: boolean, spd: boolean, spe: boolean)
  hp: boolean
  atk: boolean
  def: boolean
  spa: boolean
  spd: boolean
  spe: boolean
}
export class Languages {
  private constructor()
  free(): void
  static fromByteOrNone(value: number): Language
  static fromByteOrNoneGcn(value: number): Language
  static stringFromByte(value: number): string
  static stringFromByteGcn(value: number): string
  static toGcnByte(value: number): number
}
export class MarkingsSixShapes {
  private constructor()
  free(): void
  circle: boolean
  square: boolean
  triangle: boolean
  heart: boolean
  star: boolean
  diamond: boolean
}
export class MarkingsSixShapesColors {
  free(): void
  constructor(
    circle?: string | null,
    square?: string | null,
    triangle?: string | null,
    heart?: string | null,
    star?: string | null,
    diamond?: string | null
  )
  circle: MarkingValue
  square: MarkingValue
  triangle: MarkingValue
  heart: MarkingValue
  star: MarkingValue
  diamond: MarkingValue
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
export class OriginGameIndex {
  free(): void
  constructor(val: number)
  readonly index: number
}
export class OriginGameMetadata {
  private constructor()
  free(): void
  generation: Generation
  index: number
  get gamecube_index(): number | undefined
  set gamecube_index(value: number | null | undefined)
  readonly name: string
  readonly mark: string | undefined
  readonly region: string | undefined
  readonly logo: string | undefined
}
export class OriginGames {
  private constructor()
  free(): void
  static gameName(value: number): string
  static generation(value: number): Generation
  static region(value: number): Region | undefined
  static gamecubeIndex(value: number): number | undefined
  static mark(value: number): OriginMark | undefined
  static color(value: number): string
  static logoPath(value: number): string | undefined
}
export class PokeDate {
  free(): void
  constructor(year: number, month: number, day: number)
  year(): number
  set_year(value: number): void
  month: number
  day: number
}
export class SpeciesAndForme {
  private constructor()
  free(): void
  getSpeciesMetadata(): SpeciesMetadata
  getMetadata(): FormeMetadata
  static tryNew(national_dex: number, forme_index: number): SpeciesAndForme | undefined
  readonly nationalDex: number
  readonly formeIndex: number
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
