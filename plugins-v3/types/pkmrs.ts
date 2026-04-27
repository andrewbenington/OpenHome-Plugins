/* tslint:disable */
/* eslint-disable */
export interface BoolOption {
    default: boolean;
}

export interface ConvertStrategy {
    "nickname.capitalization"?: NicknameCapitalization;
    "metData.originAndLocation"?: MetDataStrategy;
    "ivs.maxIfHyperTrained"?: boolean;
}

export interface NumberOption {
    default: number;
    minimum: number | null;
    maximum: number | null;
}

export interface SettingsSchemaWrapper {
    settings_schema: Record<ConvertOption, SettingType>;
}

export interface StringOption {
    default: string;
    allowed_values: string[] | null;
}

export type BaseStats = { PreSplit: StatsPreSplit } | { Modern: Stats8 };

export type ConvertOption = "nickname.capitalization" | "metData.originAndLocation" | "ivs.maxIfHyperTrained";

export type MetDataStrategy = "UseLocationNameMatch" | "MaximizeLegality";

export type NicknameCapitalization = "GameDefault" | "Modern";

export type PkmFormat = "PK1" | "PK2" | "PK3" | "COLOPKM" | "XDPKM" | "PK4" | "PK5" | "PK6" | "PK7" | "PB7" | "PK8" | "PA8" | "PB8" | "PK9" | "PA9" | "PK3RR" | "PK3UB" | "PB8LUMI";

export type PkmType = "Normal" | "Fighting" | "Flying" | "Poison" | "Ground" | "Rock" | "Bug" | "Ghost" | "Steel" | "Fire" | "Water" | "Grass" | "Electric" | "Psychic" | "Ice" | "Dragon" | "Dark" | "Fairy";

export type SettingType = { String: StringOption } | { Bool: BoolOption } | { Number: NumberOption };

export type SettingValue = { String: string } | { Bool: boolean } | { Number: number };


export class AbilityIndex {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    equals(other: AbilityIndex): boolean;
    static fromIndex(val: number): AbilityIndex | undefined;
    readonly index: number;
    readonly name: string;
}

export class AbilityMetadata {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly name: string;
    id: number;
}

export enum AbilityNumber {
    First = 1,
    Second = 2,
    Hidden = 4,
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

export class BallMetadata {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    index: number;
    name: string;
}

export class BdspData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export enum BinaryGender {
    Male = 0,
    Female = 1,
}

export enum ContestStat {
    Cool = 0,
    Beauty = 1,
    Cute = 2,
    Smart = 3,
    Tough = 4,
}

export class ContestStats {
    free(): void;
    [Symbol.dispose](): void;
    constructor(cool: number, beauty: number, cute: number, smart: number, tough: number, sheen: number);
    beauty: number;
    cool: number;
    cute: number;
    sheen: number;
    smart: number;
    tough: number;
}

export class ConvertStrategies {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static getCategoryName(identifier: ConvertOption): string;
    static getDefault(): ConvertStrategy;
    static getDescription(identifier: ConvertOption): string;
    static getSettingName(identifier: ConvertOption): string;
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

export enum ExtraFormIndex {
    PikachuRockStar = 1,
    PikachuBelle = 2,
    PikachuPopStar = 3,
    PikachuPhD = 4,
    PikachuLibre = 5,
    PikachuCosplay = 6,
    PikachuSurfing = 7,
    PikachuFlying = 8,
    CharizardGiga = 9,
    ButterfreeGiga = 10,
    PikachuGiga = 11,
    MeowthGiga = 12,
    MachampGiga = 13,
    GengarGiga = 14,
    KinglerGiga = 15,
    LaprasGiga = 16,
    EeveeGiga = 17,
    SnorlaxGiga = 18,
    GarbodorGiga = 19,
    MelmetalGiga = 20,
    CorviknightGiga = 21,
    OrbeetleGiga = 22,
    DrednawGiga = 23,
    CoalossalGiga = 24,
    FlappleGiga = 25,
    AppletunGiga = 26,
    SandacondaGiga = 27,
    ToxtricityGiga = 28,
    ToxtricityLowKeyGiga = 29,
    CentiskorchGiga = 30,
    HattereneGiga = 31,
    GrimmsnarlGiga = 32,
    AlcremieGiga = 33,
    CopperajahGiga = 34,
    DuraludonGiga = 35,
    VenusaurGiga = 36,
    BlastoiseGiga = 37,
    RillaboomGiga = 38,
    CinderaceGiga = 39,
    InteleonGiga = 40,
    UrsifuSingleGiga = 41,
    UrsifuRapidGiga = 42,
    EternatusEternamax = 43,
    VenusaurClone = 44,
    CharizardClone = 45,
    BlastoiseClone = 46,
    PikachuClone = 47,
    EeveeBandana = 48,
    GengarStitched = 49,
    OnixCrystal = 50,
    MewtwoArmorMk1 = 51,
    MewtwoArmorMk2 = 52,
    DoduoSevii = 53,
    DodrioSevii = 54,
    TeddiursaSevii = 55,
    UrsaringSevii = 56,
    MantykeSevii = 57,
    MantineSevii = 58,
    FeebasSevii = 59,
    MiloticSevii = 60,
    CarnivineSevii = 61,
    BlitzleSevii = 62,
    ZebstrikaSevii = 63,
    ClauncherSevii = 64,
    ClawitzerSevii = 65,
    NoibatSevii = 66,
    NoivernSevii = 67,
    WishiwashiSevii = 68,
    WishiwashiSeviiSchool = 69,
    DhelmiseSevii = 70,
    SizzlipedeSevii = 71,
    CentiskorchSevii = 72,
    CentiskorchSeviiGiga = 73,
    NymbleSevii = 74,
    LokixSevii = 75,
    DialgaPrimal = 76,
}

export class FormMetadata {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    abilityByNum(ability_num: AbilityNumber): AbilityIndex;
    abilityByNumGen3(ability_num: AbilityNumber): AbilityIndex;
    baseStatsFrom(source: MetadataSource): BaseStats | undefined;
    genderFromAtkDv(atk_dv: number): Gender;
    genderFromPid(pid: number): Gender;
    getBaseStat(stat: Stat): number;
    getMegaBaseForm(): FormMetadata | undefined;
    hasDataForSource(source: MetadataSource): boolean;
    isEvolutionOf(other: FormMetadata): boolean;
    levelUpLearnset(source?: MetadataSource | null): LearnsetMoveJs[] | undefined;
    type1WithSource(source: MetadataSource): PkmType | undefined;
    type2WithSource(source: MetadataSource): PkmType | undefined;
    readonly abilities: AbilityIndex[];
    readonly eggGroups: string[];
    readonly evolutions: SpeciesAndForm[];
    readonly formeName: string;
    readonly baseStats: Stats8;
    readonly hiddenAbility: AbilityIndex | undefined;
    readonly introducedGen: Generation;
    readonly megaEvolutions: MegaEvolutionMetadata[];
    readonly regional: string | undefined;
    readonly sprite: string;
    readonly spriteCoords: Uint8Array;
    readonly type1: PkmType;
    readonly type1Index: number;
    readonly type2: PkmType | undefined;
    readonly type2Index: number | undefined;
    readonly baseHeight: number;
    readonly baseWeight: number;
    readonly formIndex: number;
    readonly genderRatio: GenderRatio;
    readonly isBaseForm: boolean;
    readonly isBattleOnly: boolean;
    readonly isCosmetic: boolean;
    readonly isGmax: boolean;
    readonly isMega: boolean;
    readonly isMythical: boolean;
    readonly isParadox: boolean;
    readonly isRestrictedLegend: boolean;
    readonly isSubLegend: boolean;
    readonly isUltraBeast: boolean;
    readonly nationalDex: NatDexIndex;
    readonly preEvolution: SpeciesAndForm | undefined;
}

export enum GameSetting {
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
    Lumiose = 10,
    Orre = 11,
    PokemonGo = 12,
}

export class GameboyData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    dvs: StatsPreSplit;
    evs_g12: StatsPreSplit;
    met_time_of_day: number;
}

export class Gen45Data {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    encounter_type: number;
    is_ns_pokemon: boolean;
    performance: number;
    poke_star_fame: number;
    shiny_leaves: ShinyLeaves;
}

export class Gen67Data {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    avs: Stats16Le;
    country: number;
    geolocations: Geolocations;
    region: number;
    resort_event_status: number;
    secret_super_training_complete: boolean;
    secret_super_training_unlocked: boolean;
    super_training_dist_flags: number;
    super_training_flags: number;
    training_bag_hits: number;
    training_bag: number;
}

export class Gen7AlolaSaveRust {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    calc_checksum(): number;
    convertOhpkm(ohpkm: OhpkmV2, strategy: ConvertStrategy): Pk7;
    static fileIsSave(bytes: Uint8Array): boolean;
    static fromBytes(bytes: Uint8Array): Gen7AlolaSaveRust;
    getMonAt(box_num: number, offset: number): Pk7 | undefined;
    static includesOrigin(origin: OriginGame): boolean;
    static isValidSave(bytes: Uint8Array): boolean;
    prepareBytesForSaving(): Uint8Array;
    setMonAt(box_num: number, offset: number, mon?: Pk7 | null): void;
    static readonly BOX_COLS: number;
    static readonly BOX_ROWS: number;
    static readonly SLOTS_PER_BOX: number;
    readonly currentPcBoxIdx: number;
    readonly displayId: string;
    readonly gameOfOrigin: OriginGame;
    readonly language: Language;
    static readonly MAX_BOX_COUNT: number;
    readonly secretId: number;
    readonly trainerGender: number;
    readonly trainerId: number;
    readonly trainerName: string;
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

export class Geolocation {
    free(): void;
    [Symbol.dispose](): void;
    constructor(region: number, country: number);
    country: number;
    region: number;
}

export class Geolocations {
    free(): void;
    [Symbol.dispose](): void;
    constructor(geo1: Geolocation, geo2: Geolocation, geo3: Geolocation, geo4: Geolocation, geo5: Geolocation);
    0: Geolocation;
    1: Geolocation;
    2: Geolocation;
    3: Geolocation;
    4: Geolocation;
}

export class HyperTraining {
    free(): void;
    [Symbol.dispose](): void;
    constructor(hp: boolean, atk: boolean, def: boolean, spa: boolean, spd: boolean, spe: boolean);
    atk: boolean;
    def: boolean;
    hp: boolean;
    spa: boolean;
    spd: boolean;
    spe: boolean;
}

export class Item {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    equals(other: Item): boolean;
    static fromIndex(val: number): Item | undefined;
    getMetadata(): ItemMetadata;
    readonly index: number;
    readonly name: string;
}

export class ItemGen1 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    equals(other: ItemGen1): boolean;
    static fromIndex(val: number): ItemGen1 | undefined;
    static fromModern(modern_index: number): ItemGen1 | undefined;
    toModern(): Item | undefined;
    readonly index: number;
    readonly name: string;
}

export class ItemGen2 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    equals(other: ItemGen2): boolean;
    static fromIndex(val: number): ItemGen2 | undefined;
    static fromModern(modern_index: number): ItemGen2 | undefined;
    toModern(): Item | undefined;
    readonly index: number;
    readonly name: string;
}

export class ItemGen3 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    equals(other: ItemGen3): boolean;
    static fromIndex(val: number): ItemGen3 | undefined;
    static fromModern(modern_index: number): ItemGen3 | undefined;
    toModern(): Item | undefined;
    readonly index: number;
    readonly name: string;
}

export class ItemMetadata {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    id: number;
    readonly name: string;
}

export class ItemMetadataPastGen {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    toModern(): Item | undefined;
    id: number;
    get modern_id(): number | undefined;
    set modern_id(value: number | null | undefined);
    readonly name: string;
}

export class ItemRadicalRed {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    equals(other: ItemRadicalRed): boolean;
    static fromIndex(val: number): ItemRadicalRed | undefined;
    static fromModern(modern_index: number): ItemRadicalRed | undefined;
    toModern(): Item | undefined;
    readonly index: number;
    readonly name: string;
}

export class ItemUnbound {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    equals(other: ItemUnbound): boolean;
    static fromIndex(val: number): ItemUnbound | undefined;
    static fromModern(modern_index: number): ItemUnbound | undefined;
    toModern(): Item | undefined;
    readonly index: number;
    readonly name: string;
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
    SpanishLatinAmerica = 11,
}

export class Languages {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static fromByteOrNone(value: number): Language;
    static fromByteOrNoneGcn(value: number): Language;
    static stringFromByte(value: number): string;
    static stringFromByteGcn(value: number): string;
    static toGcnByte(value: number): number;
}

export class LearnsetMoveJs {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    is_evolution: boolean;
    get level(): number | undefined;
    set level(value: number | null | undefined);
    move_id: number;
}

export class LegendsArceusData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    alpha_move: number;
    flag2: boolean;
    gvs: Stats8;
    is_alpha: boolean;
    is_noble: boolean;
    unknown_a0: number;
    unknown_f3: number;
}

export enum LevelUpType {
    MediumFast = 0,
    Erratic = 1,
    Fluctuating = 2,
    MediumSlow = 3,
    Fast = 4,
    Slow = 5,
}

export class Lookup {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static speciesName(national_dex: number, language: Language): string;
}

export class MainDataV2 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    ability_num: AbilityNumber;
    get affixed_ribbon(): ModernRibbon | undefined;
    set affixed_ribbon(value: ModernRibbon | null | undefined);
    ball: Ball;
    battle_memory_count: number;
    console_region: number;
    contest_memory_count: number;
    contest: ContestStats;
    get egg_date(): PokeDate | undefined;
    set egg_date(value: PokeDate | null | undefined);
    get egg_location_index(): number | undefined;
    set egg_location_index(value: number | null | undefined);
    encryption_constant: number;
    enjoyment: number;
    evs: Stats8;
    exp: number;
    get extra_form(): ExtraFormIndex | undefined;
    set extra_form(value: ExtraFormIndex | null | undefined);
    favorite: boolean;
    form_argument: number;
    fullness: number;
    get game_of_origin_battle(): OriginGame | undefined;
    set game_of_origin_battle(value: OriginGame | null | undefined);
    game_of_origin: OriginGame;
    gender: Gender;
    handler_affection: number;
    handler_friendship: number;
    handler_gender: BinaryGender;
    handler_id: number;
    get handler_language(): Language | undefined;
    set handler_language(value: Language | null | undefined);
    handler_memory: TrainerMemory;
    height_scalar: number;
    held_item_index: number;
    hyper_training: HyperTraining;
    is_current_handler: boolean;
    is_egg: boolean;
    is_fateful_encounter: boolean;
    is_nicknamed: boolean;
    is_shadow: boolean;
    ivs: Stats8;
    language: Language;
    markings: MarkingsSixShapesColors;
    met_date: PokeDate;
    met_level: number;
    met_location_index: number;
    get mint_nature(): NatureIndex | undefined;
    set mint_nature(value: NatureIndex | null | undefined);
    nature: NatureIndex;
    obedience_level: number;
    personality_value: number;
    pokerus_byte: number;
    scale: number;
    secret_id: number;
    sociability: number;
    species_and_form: SpeciesAndForm;
    trainer_affection: number;
    trainer_friendship: number;
    trainer_gender: BinaryGender;
    trainer_id: number;
    trainer_memory: TrainerMemory;
    weight_scalar: number;
}

export enum MarkingValue {
    Unset = 0,
    Blue = 1,
    Red = 2,
}

export class MarkingsSixShapes {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    circle: boolean;
    diamond: boolean;
    heart: boolean;
    square: boolean;
    star: boolean;
    triangle: boolean;
}

export class MarkingsSixShapesColors {
    free(): void;
    [Symbol.dispose](): void;
    constructor(circle?: string | null, square?: string | null, triangle?: string | null, heart?: string | null, star?: string | null, diamond?: string | null);
    circle: MarkingValue;
    diamond: MarkingValue;
    heart: MarkingValue;
    square: MarkingValue;
    star: MarkingValue;
    triangle: MarkingValue;
}

export class MegaEvolutionMetadata {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    megaForme: SpeciesAndForm;
    get requiredItemId(): number | undefined;
    set requiredItemId(value: number | null | undefined);
}

export class MetData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    gameOfOrigin: OriginGame;
    locationIndex: number;
}

export enum MetadataSource {
    RedBlue = 0,
    Yellow = 1,
    GoldSilver = 2,
    Crystal = 3,
    RubySapphire = 4,
    Emerald = 5,
    FireRedLeafGreen = 6,
    DiamondPearl = 7,
    Platinum = 8,
    HeartGoldSoulSilver = 9,
    BlackWhite = 10,
    Black2White2 = 11,
    XY = 12,
    OmegaRubyAlphaSapphire = 13,
    SunMoon = 14,
    UltraSunUltraMoon = 15,
    LetsGoPikachuEevee = 16,
    SwordShield = 17,
    BrilliantDiamondShiningPearl = 18,
    LegendsArceus = 19,
    ScarletViolet = 20,
    LegendsZa = 21,
}

export class MetadataSources {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static display(value: MetadataSource): string;
    static getOriginMark(value: MetadataSource): OriginMark | undefined;
    static supportsForm(source: MetadataSource, national_dex: number, form_index: number): boolean;
}

export function MetadataSummaryLookup(national_dex: number, form_index: number): FormMetadata | undefined;

export class MetadataTableReader {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    baseStats(): BaseStats;
    type1(): PkmType;
    type2(): PkmType | undefined;
    readonly sourceName: string;
}

export enum ModernRibbon {
    KalosChampion = 0,
    Gen3Champion = 1,
    SinnohChampion = 2,
    BestFriends = 3,
    Training = 4,
    SkillfulBattler = 5,
    ExpertBattler = 6,
    Effort = 7,
    Alert = 8,
    Shock = 9,
    Downcast = 10,
    Careless = 11,
    Relax = 12,
    Snooze = 13,
    Smile = 14,
    Gorgeous = 15,
    Royal = 16,
    GorgeousRoyal = 17,
    Artist = 18,
    Footprint = 19,
    Record = 20,
    Legend = 21,
    Country = 22,
    National = 23,
    Earth = 24,
    World = 25,
    Classic = 26,
    Premier = 27,
    Event = 28,
    Birthday = 29,
    Special = 30,
    Souvenir = 31,
    Wishing = 32,
    BattleChampion = 33,
    RegionalChampion = 34,
    NationalChampion = 35,
    WorldChampion = 36,
    ContestMemory = 37,
    BattleMemory = 38,
    HoennChampion = 39,
    ContestStar = 40,
    CoolnessMaster = 41,
    BeautyMaster = 42,
    CutenessMaster = 43,
    ClevernessMaster = 44,
    ToughnessMaster = 45,
    AlolaChampion = 46,
    BattleRoyalChampion = 47,
    BattleTreeGreat = 48,
    BattleTreeMaster = 49,
    GalarChampion = 50,
    TowerMaster = 51,
    MasterRank = 52,
    LunchtimeMark = 53,
    SleepyTimeMark = 54,
    DuskMark = 55,
    DawnMark = 56,
    CloudyMark = 57,
    RainyMark = 58,
    StormyMark = 59,
    SnowyMark = 60,
    BlizzardMark = 61,
    DryMark = 62,
    SandstormMark = 63,
    MistyMark = 64,
    DestinyMark = 65,
    FishingMark = 66,
    CurryMark = 67,
    UncommonMark = 68,
    RareMark = 69,
    RowdyMark = 70,
    AbsentMindedMark = 71,
    JitteryMark = 72,
    ExcitedMark = 73,
    CharismaticMark = 74,
    CalmnessMark = 75,
    IntenseMark = 76,
    ZonedOutMark = 77,
    JoyfulMark = 78,
    AngryMark = 79,
    SmileyMark = 80,
    TearyMark = 81,
    UpbeatMark = 82,
    PeevedMark = 83,
    IntellectualMark = 84,
    FerociousMark = 85,
    CraftyMark = 86,
    ScowlingMark = 87,
    KindlyMark = 88,
    FlusteredMark = 89,
    PumpedUpMark = 90,
    ZeroEnergyMark = 91,
    PridefulMark = 92,
    UnsureMark = 93,
    HumbleMark = 94,
    ThornyMark = 95,
    VigorMark = 96,
    SlumpMark = 97,
    Hisui = 98,
    TwinklingStar = 99,
    PaldeaChampion = 100,
    JumboMark = 101,
    MiniMark = 102,
    ItemfinderMark = 103,
    PartnerMark = 104,
    GourmandMark = 105,
    OnceInALifetime = 106,
    AlphaMark = 107,
    MightiestMark = 108,
    TitanMark = 109,
    Partner = 110,
}

export class MostRecentSave {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    file_path: string;
    game: OriginGame;
    secret_id: number;
    trainer_id: number;
    readonly trainer_name: string;
}

export class MoveIndex {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class MoveSlot {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    move_index: MoveIndex;
    pp_ups: number;
    pp: number;
}

export class MoveSlots {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    indices: Uint16Array;
    pp: Uint8Array;
    pp_ups: Uint8Array;
}

export class NatDexIndex {
    free(): void;
    [Symbol.dispose](): void;
    constructor(val: number);
    readonly index: number;
}

export enum NationalDex {
    Bulbasaur = 1,
    Ivysaur = 2,
    Venusaur = 3,
    Charmander = 4,
    Charmeleon = 5,
    Charizard = 6,
    Squirtle = 7,
    Wartortle = 8,
    Blastoise = 9,
    Caterpie = 10,
    Metapod = 11,
    Butterfree = 12,
    Weedle = 13,
    Kakuna = 14,
    Beedrill = 15,
    Pidgey = 16,
    Pidgeotto = 17,
    Pidgeot = 18,
    Rattata = 19,
    Raticate = 20,
    Spearow = 21,
    Fearow = 22,
    Ekans = 23,
    Arbok = 24,
    Pikachu = 25,
    Raichu = 26,
    Sandshrew = 27,
    Sandslash = 28,
    NidoranF = 29,
    Nidorina = 30,
    Nidoqueen = 31,
    NidoranM = 32,
    Nidorino = 33,
    Nidoking = 34,
    Clefairy = 35,
    Clefable = 36,
    Vulpix = 37,
    Ninetales = 38,
    Jigglypuff = 39,
    Wigglytuff = 40,
    Zubat = 41,
    Golbat = 42,
    Oddish = 43,
    Gloom = 44,
    Vileplume = 45,
    Paras = 46,
    Parasect = 47,
    Venonat = 48,
    Venomoth = 49,
    Diglett = 50,
    Dugtrio = 51,
    Meowth = 52,
    Persian = 53,
    Psyduck = 54,
    Golduck = 55,
    Mankey = 56,
    Primeape = 57,
    Growlithe = 58,
    Arcanine = 59,
    Poliwag = 60,
    Poliwhirl = 61,
    Poliwrath = 62,
    Abra = 63,
    Kadabra = 64,
    Alakazam = 65,
    Machop = 66,
    Machoke = 67,
    Machamp = 68,
    Bellsprout = 69,
    Weepinbell = 70,
    Victreebel = 71,
    Tentacool = 72,
    Tentacruel = 73,
    Geodude = 74,
    Graveler = 75,
    Golem = 76,
    Ponyta = 77,
    Rapidash = 78,
    Slowpoke = 79,
    Slowbro = 80,
    Magnemite = 81,
    Magneton = 82,
    Farfetchd = 83,
    Doduo = 84,
    Dodrio = 85,
    Seel = 86,
    Dewgong = 87,
    Grimer = 88,
    Muk = 89,
    Shellder = 90,
    Cloyster = 91,
    Gastly = 92,
    Haunter = 93,
    Gengar = 94,
    Onix = 95,
    Drowzee = 96,
    Hypno = 97,
    Krabby = 98,
    Kingler = 99,
    Voltorb = 100,
    Electrode = 101,
    Exeggcute = 102,
    Exeggutor = 103,
    Cubone = 104,
    Marowak = 105,
    Hitmonlee = 106,
    Hitmonchan = 107,
    Lickitung = 108,
    Koffing = 109,
    Weezing = 110,
    Rhyhorn = 111,
    Rhydon = 112,
    Chansey = 113,
    Tangela = 114,
    Kangaskhan = 115,
    Horsea = 116,
    Seadra = 117,
    Goldeen = 118,
    Seaking = 119,
    Staryu = 120,
    Starmie = 121,
    MrMime = 122,
    Scyther = 123,
    Jynx = 124,
    Electabuzz = 125,
    Magmar = 126,
    Pinsir = 127,
    Tauros = 128,
    Magikarp = 129,
    Gyarados = 130,
    Lapras = 131,
    Ditto = 132,
    Eevee = 133,
    Vaporeon = 134,
    Jolteon = 135,
    Flareon = 136,
    Porygon = 137,
    Omanyte = 138,
    Omastar = 139,
    Kabuto = 140,
    Kabutops = 141,
    Aerodactyl = 142,
    Snorlax = 143,
    Articuno = 144,
    Zapdos = 145,
    Moltres = 146,
    Dratini = 147,
    Dragonair = 148,
    Dragonite = 149,
    Mewtwo = 150,
    Mew = 151,
    Chikorita = 152,
    Bayleef = 153,
    Meganium = 154,
    Cyndaquil = 155,
    Quilava = 156,
    Typhlosion = 157,
    Totodile = 158,
    Croconaw = 159,
    Feraligatr = 160,
    Sentret = 161,
    Furret = 162,
    Hoothoot = 163,
    Noctowl = 164,
    Ledyba = 165,
    Ledian = 166,
    Spinarak = 167,
    Ariados = 168,
    Crobat = 169,
    Chinchou = 170,
    Lanturn = 171,
    Pichu = 172,
    Cleffa = 173,
    Igglybuff = 174,
    Togepi = 175,
    Togetic = 176,
    Natu = 177,
    Xatu = 178,
    Mareep = 179,
    Flaaffy = 180,
    Ampharos = 181,
    Bellossom = 182,
    Marill = 183,
    Azumarill = 184,
    Sudowoodo = 185,
    Politoed = 186,
    Hoppip = 187,
    Skiploom = 188,
    Jumpluff = 189,
    Aipom = 190,
    Sunkern = 191,
    Sunflora = 192,
    Yanma = 193,
    Wooper = 194,
    Quagsire = 195,
    Espeon = 196,
    Umbreon = 197,
    Murkrow = 198,
    Slowking = 199,
    Misdreavus = 200,
    Unown = 201,
    Wobbuffet = 202,
    Girafarig = 203,
    Pineco = 204,
    Forretress = 205,
    Dunsparce = 206,
    Gligar = 207,
    Steelix = 208,
    Snubbull = 209,
    Granbull = 210,
    Qwilfish = 211,
    Scizor = 212,
    Shuckle = 213,
    Heracross = 214,
    Sneasel = 215,
    Teddiursa = 216,
    Ursaring = 217,
    Slugma = 218,
    Magcargo = 219,
    Swinub = 220,
    Piloswine = 221,
    Corsola = 222,
    Remoraid = 223,
    Octillery = 224,
    Delibird = 225,
    Mantine = 226,
    Skarmory = 227,
    Houndour = 228,
    Houndoom = 229,
    Kingdra = 230,
    Phanpy = 231,
    Donphan = 232,
    Porygon2 = 233,
    Stantler = 234,
    Smeargle = 235,
    Tyrogue = 236,
    Hitmontop = 237,
    Smoochum = 238,
    Elekid = 239,
    Magby = 240,
    Miltank = 241,
    Blissey = 242,
    Raikou = 243,
    Entei = 244,
    Suicune = 245,
    Larvitar = 246,
    Pupitar = 247,
    Tyranitar = 248,
    Lugia = 249,
    HoOh = 250,
    Celebi = 251,
    Treecko = 252,
    Grovyle = 253,
    Sceptile = 254,
    Torchic = 255,
    Combusken = 256,
    Blaziken = 257,
    Mudkip = 258,
    Marshtomp = 259,
    Swampert = 260,
    Poochyena = 261,
    Mightyena = 262,
    Zigzagoon = 263,
    Linoone = 264,
    Wurmple = 265,
    Silcoon = 266,
    Beautifly = 267,
    Cascoon = 268,
    Dustox = 269,
    Lotad = 270,
    Lombre = 271,
    Ludicolo = 272,
    Seedot = 273,
    Nuzleaf = 274,
    Shiftry = 275,
    Taillow = 276,
    Swellow = 277,
    Wingull = 278,
    Pelipper = 279,
    Ralts = 280,
    Kirlia = 281,
    Gardevoir = 282,
    Surskit = 283,
    Masquerain = 284,
    Shroomish = 285,
    Breloom = 286,
    Slakoth = 287,
    Vigoroth = 288,
    Slaking = 289,
    Nincada = 290,
    Ninjask = 291,
    Shedinja = 292,
    Whismur = 293,
    Loudred = 294,
    Exploud = 295,
    Makuhita = 296,
    Hariyama = 297,
    Azurill = 298,
    Nosepass = 299,
    Skitty = 300,
    Delcatty = 301,
    Sableye = 302,
    Mawile = 303,
    Aron = 304,
    Lairon = 305,
    Aggron = 306,
    Meditite = 307,
    Medicham = 308,
    Electrike = 309,
    Manectric = 310,
    Plusle = 311,
    Minun = 312,
    Volbeat = 313,
    Illumise = 314,
    Roselia = 315,
    Gulpin = 316,
    Swalot = 317,
    Carvanha = 318,
    Sharpedo = 319,
    Wailmer = 320,
    Wailord = 321,
    Numel = 322,
    Camerupt = 323,
    Torkoal = 324,
    Spoink = 325,
    Grumpig = 326,
    Spinda = 327,
    Trapinch = 328,
    Vibrava = 329,
    Flygon = 330,
    Cacnea = 331,
    Cacturne = 332,
    Swablu = 333,
    Altaria = 334,
    Zangoose = 335,
    Seviper = 336,
    Lunatone = 337,
    Solrock = 338,
    Barboach = 339,
    Whiscash = 340,
    Corphish = 341,
    Crawdaunt = 342,
    Baltoy = 343,
    Claydol = 344,
    Lileep = 345,
    Cradily = 346,
    Anorith = 347,
    Armaldo = 348,
    Feebas = 349,
    Milotic = 350,
    Castform = 351,
    Kecleon = 352,
    Shuppet = 353,
    Banette = 354,
    Duskull = 355,
    Dusclops = 356,
    Tropius = 357,
    Chimecho = 358,
    Absol = 359,
    Wynaut = 360,
    Snorunt = 361,
    Glalie = 362,
    Spheal = 363,
    Sealeo = 364,
    Walrein = 365,
    Clamperl = 366,
    Huntail = 367,
    Gorebyss = 368,
    Relicanth = 369,
    Luvdisc = 370,
    Bagon = 371,
    Shelgon = 372,
    Salamence = 373,
    Beldum = 374,
    Metang = 375,
    Metagross = 376,
    Regirock = 377,
    Regice = 378,
    Registeel = 379,
    Latias = 380,
    Latios = 381,
    Kyogre = 382,
    Groudon = 383,
    Rayquaza = 384,
    Jirachi = 385,
    Deoxys = 386,
    Turtwig = 387,
    Grotle = 388,
    Torterra = 389,
    Chimchar = 390,
    Monferno = 391,
    Infernape = 392,
    Piplup = 393,
    Prinplup = 394,
    Empoleon = 395,
    Starly = 396,
    Staravia = 397,
    Staraptor = 398,
    Bidoof = 399,
    Bibarel = 400,
    Kricketot = 401,
    Kricketune = 402,
    Shinx = 403,
    Luxio = 404,
    Luxray = 405,
    Budew = 406,
    Roserade = 407,
    Cranidos = 408,
    Rampardos = 409,
    Shieldon = 410,
    Bastiodon = 411,
    Burmy = 412,
    Wormadam = 413,
    Mothim = 414,
    Combee = 415,
    Vespiquen = 416,
    Pachirisu = 417,
    Buizel = 418,
    Floatzel = 419,
    Cherubi = 420,
    Cherrim = 421,
    Shellos = 422,
    Gastrodon = 423,
    Ambipom = 424,
    Drifloon = 425,
    Drifblim = 426,
    Buneary = 427,
    Lopunny = 428,
    Mismagius = 429,
    Honchkrow = 430,
    Glameow = 431,
    Purugly = 432,
    Chingling = 433,
    Stunky = 434,
    Skuntank = 435,
    Bronzor = 436,
    Bronzong = 437,
    Bonsly = 438,
    MimeJr = 439,
    Happiny = 440,
    Chatot = 441,
    Spiritomb = 442,
    Gible = 443,
    Gabite = 444,
    Garchomp = 445,
    Munchlax = 446,
    Riolu = 447,
    Lucario = 448,
    Hippopotas = 449,
    Hippowdon = 450,
    Skorupi = 451,
    Drapion = 452,
    Croagunk = 453,
    Toxicroak = 454,
    Carnivine = 455,
    Finneon = 456,
    Lumineon = 457,
    Mantyke = 458,
    Snover = 459,
    Abomasnow = 460,
    Weavile = 461,
    Magnezone = 462,
    Lickilicky = 463,
    Rhyperior = 464,
    Tangrowth = 465,
    Electivire = 466,
    Magmortar = 467,
    Togekiss = 468,
    Yanmega = 469,
    Leafeon = 470,
    Glaceon = 471,
    Gliscor = 472,
    Mamoswine = 473,
    PorygonZ = 474,
    Gallade = 475,
    Probopass = 476,
    Dusknoir = 477,
    Froslass = 478,
    Rotom = 479,
    Uxie = 480,
    Mesprit = 481,
    Azelf = 482,
    Dialga = 483,
    Palkia = 484,
    Heatran = 485,
    Regigigas = 486,
    Giratina = 487,
    Cresselia = 488,
    Phione = 489,
    Manaphy = 490,
    Darkrai = 491,
    Shaymin = 492,
    Arceus = 493,
    Victini = 494,
    Snivy = 495,
    Servine = 496,
    Serperior = 497,
    Tepig = 498,
    Pignite = 499,
    Emboar = 500,
    Oshawott = 501,
    Dewott = 502,
    Samurott = 503,
    Patrat = 504,
    Watchog = 505,
    Lillipup = 506,
    Herdier = 507,
    Stoutland = 508,
    Purrloin = 509,
    Liepard = 510,
    Pansage = 511,
    Simisage = 512,
    Pansear = 513,
    Simisear = 514,
    Panpour = 515,
    Simipour = 516,
    Munna = 517,
    Musharna = 518,
    Pidove = 519,
    Tranquill = 520,
    Unfezant = 521,
    Blitzle = 522,
    Zebstrika = 523,
    Roggenrola = 524,
    Boldore = 525,
    Gigalith = 526,
    Woobat = 527,
    Swoobat = 528,
    Drilbur = 529,
    Excadrill = 530,
    Audino = 531,
    Timburr = 532,
    Gurdurr = 533,
    Conkeldurr = 534,
    Tympole = 535,
    Palpitoad = 536,
    Seismitoad = 537,
    Throh = 538,
    Sawk = 539,
    Sewaddle = 540,
    Swadloon = 541,
    Leavanny = 542,
    Venipede = 543,
    Whirlipede = 544,
    Scolipede = 545,
    Cottonee = 546,
    Whimsicott = 547,
    Petilil = 548,
    Lilligant = 549,
    Basculin = 550,
    Sandile = 551,
    Krokorok = 552,
    Krookodile = 553,
    Darumaka = 554,
    Darmanitan = 555,
    Maractus = 556,
    Dwebble = 557,
    Crustle = 558,
    Scraggy = 559,
    Scrafty = 560,
    Sigilyph = 561,
    Yamask = 562,
    Cofagrigus = 563,
    Tirtouga = 564,
    Carracosta = 565,
    Archen = 566,
    Archeops = 567,
    Trubbish = 568,
    Garbodor = 569,
    Zorua = 570,
    Zoroark = 571,
    Minccino = 572,
    Cinccino = 573,
    Gothita = 574,
    Gothorita = 575,
    Gothitelle = 576,
    Solosis = 577,
    Duosion = 578,
    Reuniclus = 579,
    Ducklett = 580,
    Swanna = 581,
    Vanillite = 582,
    Vanillish = 583,
    Vanilluxe = 584,
    Deerling = 585,
    Sawsbuck = 586,
    Emolga = 587,
    Karrablast = 588,
    Escavalier = 589,
    Foongus = 590,
    Amoonguss = 591,
    Frillish = 592,
    Jellicent = 593,
    Alomomola = 594,
    Joltik = 595,
    Galvantula = 596,
    Ferroseed = 597,
    Ferrothorn = 598,
    Klink = 599,
    Klang = 600,
    Klinklang = 601,
    Tynamo = 602,
    Eelektrik = 603,
    Eelektross = 604,
    Elgyem = 605,
    Beheeyem = 606,
    Litwick = 607,
    Lampent = 608,
    Chandelure = 609,
    Axew = 610,
    Fraxure = 611,
    Haxorus = 612,
    Cubchoo = 613,
    Beartic = 614,
    Cryogonal = 615,
    Shelmet = 616,
    Accelgor = 617,
    Stunfisk = 618,
    Mienfoo = 619,
    Mienshao = 620,
    Druddigon = 621,
    Golett = 622,
    Golurk = 623,
    Pawniard = 624,
    Bisharp = 625,
    Bouffalant = 626,
    Rufflet = 627,
    Braviary = 628,
    Vullaby = 629,
    Mandibuzz = 630,
    Heatmor = 631,
    Durant = 632,
    Deino = 633,
    Zweilous = 634,
    Hydreigon = 635,
    Larvesta = 636,
    Volcarona = 637,
    Cobalion = 638,
    Terrakion = 639,
    Virizion = 640,
    Tornadus = 641,
    Thundurus = 642,
    Reshiram = 643,
    Zekrom = 644,
    Landorus = 645,
    Kyurem = 646,
    Keldeo = 647,
    Meloetta = 648,
    Genesect = 649,
    Chespin = 650,
    Quilladin = 651,
    Chesnaught = 652,
    Fennekin = 653,
    Braixen = 654,
    Delphox = 655,
    Froakie = 656,
    Frogadier = 657,
    Greninja = 658,
    Bunnelby = 659,
    Diggersby = 660,
    Fletchling = 661,
    Fletchinder = 662,
    Talonflame = 663,
    Scatterbug = 664,
    Spewpa = 665,
    Vivillon = 666,
    Litleo = 667,
    Pyroar = 668,
    Flabebe = 669,
    Floette = 670,
    Florges = 671,
    Skiddo = 672,
    Gogoat = 673,
    Pancham = 674,
    Pangoro = 675,
    Furfrou = 676,
    Espurr = 677,
    Meowstic = 678,
    Honedge = 679,
    Doublade = 680,
    Aegislash = 681,
    Spritzee = 682,
    Aromatisse = 683,
    Swirlix = 684,
    Slurpuff = 685,
    Inkay = 686,
    Malamar = 687,
    Binacle = 688,
    Barbaracle = 689,
    Skrelp = 690,
    Dragalge = 691,
    Clauncher = 692,
    Clawitzer = 693,
    Helioptile = 694,
    Heliolisk = 695,
    Tyrunt = 696,
    Tyrantrum = 697,
    Amaura = 698,
    Aurorus = 699,
    Sylveon = 700,
    Hawlucha = 701,
    Dedenne = 702,
    Carbink = 703,
    Goomy = 704,
    Sliggoo = 705,
    Goodra = 706,
    Klefki = 707,
    Phantump = 708,
    Trevenant = 709,
    Pumpkaboo = 710,
    Gourgeist = 711,
    Bergmite = 712,
    Avalugg = 713,
    Noibat = 714,
    Noivern = 715,
    Xerneas = 716,
    Yveltal = 717,
    Zygarde = 718,
    Diancie = 719,
    Hoopa = 720,
    Volcanion = 721,
    Rowlet = 722,
    Dartrix = 723,
    Decidueye = 724,
    Litten = 725,
    Torracat = 726,
    Incineroar = 727,
    Popplio = 728,
    Brionne = 729,
    Primarina = 730,
    Pikipek = 731,
    Trumbeak = 732,
    Toucannon = 733,
    Yungoos = 734,
    Gumshoos = 735,
    Grubbin = 736,
    Charjabug = 737,
    Vikavolt = 738,
    Crabrawler = 739,
    Crabominable = 740,
    Oricorio = 741,
    Cutiefly = 742,
    Ribombee = 743,
    Rockruff = 744,
    Lycanroc = 745,
    Wishiwashi = 746,
    Mareanie = 747,
    Toxapex = 748,
    Mudbray = 749,
    Mudsdale = 750,
    Dewpider = 751,
    Araquanid = 752,
    Fomantis = 753,
    Lurantis = 754,
    Morelull = 755,
    Shiinotic = 756,
    Salandit = 757,
    Salazzle = 758,
    Stufful = 759,
    Bewear = 760,
    Bounsweet = 761,
    Steenee = 762,
    Tsareena = 763,
    Comfey = 764,
    Oranguru = 765,
    Passimian = 766,
    Wimpod = 767,
    Golisopod = 768,
    Sandygast = 769,
    Palossand = 770,
    Pyukumuku = 771,
    TypeNull = 772,
    Silvally = 773,
    Minior = 774,
    Komala = 775,
    Turtonator = 776,
    Togedemaru = 777,
    Mimikyu = 778,
    Bruxish = 779,
    Drampa = 780,
    Dhelmise = 781,
    Jangmoo = 782,
    Hakamoo = 783,
    Kommoo = 784,
    TapuKoko = 785,
    TapuLele = 786,
    TapuBulu = 787,
    TapuFini = 788,
    Cosmog = 789,
    Cosmoem = 790,
    Solgaleo = 791,
    Lunala = 792,
    Nihilego = 793,
    Buzzwole = 794,
    Pheromosa = 795,
    Xurkitree = 796,
    Celesteela = 797,
    Kartana = 798,
    Guzzlord = 799,
    Necrozma = 800,
    Magearna = 801,
    Marshadow = 802,
    Poipole = 803,
    Naganadel = 804,
    Stakataka = 805,
    Blacephalon = 806,
    Zeraora = 807,
    Meltan = 808,
    Melmetal = 809,
    Grookey = 810,
    Thwackey = 811,
    Rillaboom = 812,
    Scorbunny = 813,
    Raboot = 814,
    Cinderace = 815,
    Sobble = 816,
    Drizzile = 817,
    Inteleon = 818,
    Skwovet = 819,
    Greedent = 820,
    Rookidee = 821,
    Corvisquire = 822,
    Corviknight = 823,
    Blipbug = 824,
    Dottler = 825,
    Orbeetle = 826,
    Nickit = 827,
    Thievul = 828,
    Gossifleur = 829,
    Eldegoss = 830,
    Wooloo = 831,
    Dubwool = 832,
    Chewtle = 833,
    Drednaw = 834,
    Yamper = 835,
    Boltund = 836,
    Rolycoly = 837,
    Carkol = 838,
    Coalossal = 839,
    Applin = 840,
    Flapple = 841,
    Appletun = 842,
    Silicobra = 843,
    Sandaconda = 844,
    Cramorant = 845,
    Arrokuda = 846,
    Barraskewda = 847,
    Toxel = 848,
    Toxtricity = 849,
    Sizzlipede = 850,
    Centiskorch = 851,
    Clobbopus = 852,
    Grapploct = 853,
    Sinistea = 854,
    Polteageist = 855,
    Hatenna = 856,
    Hattrem = 857,
    Hatterene = 858,
    Impidimp = 859,
    Morgrem = 860,
    Grimmsnarl = 861,
    Obstagoon = 862,
    Perrserker = 863,
    Cursola = 864,
    Sirfetchd = 865,
    MrRime = 866,
    Runerigus = 867,
    Milcery = 868,
    Alcremie = 869,
    Falinks = 870,
    Pincurchin = 871,
    Snom = 872,
    Frosmoth = 873,
    Stonjourner = 874,
    Eiscue = 875,
    Indeedee = 876,
    Morpeko = 877,
    Cufant = 878,
    Copperajah = 879,
    Dracozolt = 880,
    Arctozolt = 881,
    Dracovish = 882,
    Arctovish = 883,
    Duraludon = 884,
    Dreepy = 885,
    Drakloak = 886,
    Dragapult = 887,
    Zacian = 888,
    Zamazenta = 889,
    Eternatus = 890,
    Kubfu = 891,
    Urshifu = 892,
    Zarude = 893,
    Regieleki = 894,
    Regidrago = 895,
    Glastrier = 896,
    Spectrier = 897,
    Calyrex = 898,
    Wyrdeer = 899,
    Kleavor = 900,
    Ursaluna = 901,
    Basculegion = 902,
    Sneasler = 903,
    Overqwil = 904,
    Enamorus = 905,
    Sprigatito = 906,
    Floragato = 907,
    Meowscarada = 908,
    Fuecoco = 909,
    Crocalor = 910,
    Skeledirge = 911,
    Quaxly = 912,
    Quaxwell = 913,
    Quaquaval = 914,
    Lechonk = 915,
    Oinkologne = 916,
    Tarountula = 917,
    Spidops = 918,
    Nymble = 919,
    Lokix = 920,
    Pawmi = 921,
    Pawmo = 922,
    Pawmot = 923,
    Tandemaus = 924,
    Maushold = 925,
    Fidough = 926,
    Dachsbun = 927,
    Smoliv = 928,
    Dolliv = 929,
    Arboliva = 930,
    Squawkabilly = 931,
    Nacli = 932,
    Naclstack = 933,
    Garganacl = 934,
    Charcadet = 935,
    Armarouge = 936,
    Ceruledge = 937,
    Tadbulb = 938,
    Bellibolt = 939,
    Wattrel = 940,
    Kilowattrel = 941,
    Maschiff = 942,
    Mabosstiff = 943,
    Shroodle = 944,
    Grafaiai = 945,
    Bramblin = 946,
    Brambleghast = 947,
    Toedscool = 948,
    Toedscruel = 949,
    Klawf = 950,
    Capsakid = 951,
    Scovillain = 952,
    Rellor = 953,
    Rabsca = 954,
    Flittle = 955,
    Espathra = 956,
    Tinkatink = 957,
    Tinkatuff = 958,
    Tinkaton = 959,
    Wiglett = 960,
    Wugtrio = 961,
    Bombirdier = 962,
    Finizen = 963,
    Palafin = 964,
    Varoom = 965,
    Revavroom = 966,
    Cyclizar = 967,
    Orthworm = 968,
    Glimmet = 969,
    Glimmora = 970,
    Greavard = 971,
    Houndstone = 972,
    Flamigo = 973,
    Cetoddle = 974,
    Cetitan = 975,
    Veluza = 976,
    Dondozo = 977,
    Tatsugiri = 978,
    Annihilape = 979,
    Clodsire = 980,
    Farigiraf = 981,
    Dudunsparce = 982,
    Kingambit = 983,
    GreatTusk = 984,
    ScreamTail = 985,
    BruteBonnet = 986,
    FlutterMane = 987,
    SlitherWing = 988,
    SandyShocks = 989,
    IronTreads = 990,
    IronBundle = 991,
    IronHands = 992,
    IronJugulis = 993,
    IronMoth = 994,
    IronThorns = 995,
    Frigibax = 996,
    Arctibax = 997,
    Baxcalibur = 998,
    Gimmighoul = 999,
    Gholdengo = 1000,
    WoChien = 1001,
    ChienPao = 1002,
    TingLu = 1003,
    ChiYu = 1004,
    RoaringMoon = 1005,
    IronValiant = 1006,
    Koraidon = 1007,
    Miraidon = 1008,
    WalkingWake = 1009,
    IronLeaves = 1010,
    Dipplin = 1011,
    Poltchageist = 1012,
    Sinistcha = 1013,
    Okidogi = 1014,
    Munkidori = 1015,
    Fezandipiti = 1016,
    Ogerpon = 1017,
    Archaludon = 1018,
    Hydrapple = 1019,
    GougingFire = 1020,
    RagingBolt = 1021,
    IronBoulder = 1022,
    IronCrown = 1023,
    Terapagos = 1024,
    Pecharunt = 1025,
}

export class NatureIndex {
    free(): void;
    [Symbol.dispose](): void;
    copy(): NatureIndex;
    equals(other: NatureIndex): boolean;
    multiplierFor(stat: Stat): number;
    static newFromPid(val: number): NatureIndex;
    constructor(val: number);
    readonly index: number;
    readonly name: string;
    readonly stats: NatureStatData | undefined;
    readonly summary: string;
}

export class NatureStatData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    decrease: Stat;
    increase: Stat;
}

export enum ObsoleteRibbon {
    Winning = 0,
    Victory = 1,
    Ability = 2,
    GreatAbility = 3,
    DoubleAbility = 4,
    MultiAbility = 5,
    PairAbility = 6,
    WorldAbility = 7,
    CoolHoenn = 8,
    CoolSuperHoenn = 9,
    CoolHyperHoenn = 10,
    CoolMasterHoenn = 11,
    BeautyHoenn = 12,
    BeautySuperHoenn = 13,
    BeautyHyperHoenn = 14,
    BeautyMasterHoenn = 15,
    CuteHoenn = 16,
    CuteSuperHoenn = 17,
    CuteHyperHoenn = 18,
    CuteMasterHoenn = 19,
    SmartHoenn = 20,
    SmartSuperHoenn = 21,
    SmartHyperHoenn = 22,
    SmartMasterHoenn = 23,
    ToughHoenn = 24,
    ToughSuperHoenn = 25,
    ToughHyperHoenn = 26,
    ToughMasterHoenn = 27,
    CoolSinnoh = 28,
    CoolGreatSinnoh = 29,
    CoolUltraSinnoh = 30,
    CoolMasterSinnoh = 31,
    BeautySinnoh = 32,
    BeautyGreatSinnoh = 33,
    BeautyUltraSinnoh = 34,
    BeautyMasterSinnoh = 35,
    CuteSinnoh = 36,
    CuteGreatSinnoh = 37,
    CuteUltraSinnoh = 38,
    CuteMasterSinnoh = 39,
    SmartSinnoh = 40,
    SmartGreatSinnoh = 41,
    SmartUltraSinnoh = 42,
    SmartMasterSinnoh = 43,
    ToughSinnoh = 44,
    ToughGreatSinnoh = 45,
    ToughUltraSinnoh = 46,
    ToughMasterSinnoh = 47,
}

export class ObsoleteRibbonSet {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class OhpkmV1 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    toBytes(): Uint8Array;
    ability_index: number;
    ability_num: number;
    get affixed_ribbon(): ModernRibbon | undefined;
    set affixed_ribbon(value: ModernRibbon | null | undefined);
    alpha_move: number;
    avs: Stats16Le;
    ball: Ball;
    battle_memory_count: number;
    can_gigantamax: boolean;
    console_region: number;
    contest_memory_count: number;
    contest: ContestStats;
    country: number;
    dvs: StatsPreSplit;
    dynamax_level: number;
    get egg_date(): PokeDate | undefined;
    set egg_date(value: PokeDate | null | undefined);
    egg_location_index: number;
    encounter_type: number;
    encryption_constant: number;
    enjoyment: number;
    evs_g12: StatsPreSplit;
    evs: Stats8;
    exp: number;
    favorite: boolean;
    flag2_la: boolean;
    form_argument: number;
    fullness: number;
    get game_of_origin_battle(): OriginGame | undefined;
    set game_of_origin_battle(value: OriginGame | null | undefined);
    game_of_origin: OriginGame;
    gender: Gender;
    geolocations: Geolocations;
    gvs: Stats8;
    handler_affection: number;
    handler_friendship: number;
    handler_gender: boolean;
    handler_id: number;
    handler_language: number;
    handler_memory: TrainerMemory;
    height_scalar: number;
    held_item_index: number;
    hyper_training: HyperTraining;
    is_alpha: boolean;
    is_current_handler: boolean;
    is_egg: boolean;
    is_fateful_encounter: boolean;
    is_nicknamed: boolean;
    is_noble: boolean;
    is_ns_pokemon: boolean;
    is_shadow: boolean;
    ivs: Stats8;
    language: Language;
    markings: MarkingsSixShapesColors;
    met_date: PokeDate;
    met_level: number;
    met_location_index: number;
    met_time_of_day: number;
    nature: NatureIndex;
    obedience_level: number;
    palma: number;
    performance: number;
    personality_value: number;
    poke_star_fame: number;
    pokerus_byte: number;
    region: number;
    resort_event_status: number;
    scale: number;
    secret_id: number;
    secret_super_training_complete: boolean;
    secret_super_training_unlocked: boolean;
    shiny_leaves: ShinyLeaves;
    sociability: number;
    species_and_form: SpeciesAndForm;
    stat_nature: NatureIndex;
    super_training_dist_flags: number;
    super_training_flags: number;
    tera_type_original: number;
    tera_type_override: number;
    trainer_affection: number;
    trainer_friendship: number;
    trainer_gender: Gender;
    trainer_id: number;
    trainer_memory: TrainerMemory;
    training_bag_hits: number;
    training_bag: number;
    unknown_a0: number;
    unknown_f3: number;
    weight_scalar: number;
}

export class OhpkmV2 {
    free(): void;
    [Symbol.dispose](): void;
    abilityWasChanged(): boolean;
    addGen3Ribbons(ribbon_indices: Uint32Array): void;
    addModernRibbons(ribbon_indices: Uint32Array): void;
    static defaultWithSpecies(national_dex: number, form_index: number): OhpkmV2;
    findKnownHandler(tid: number, sid: number, game: OriginGame, plugin?: string | null): PastHandlerDataV2 | undefined;
    static fromByteVectorFixingErrors(bytes: Uint8Array): OhpkmV2;
    static fromV1Bytes(bytes: Uint8Array): OhpkmV2;
    constructor(bytes: Uint8Array);
    static from_v1_bytes(bytes: Uint8Array): OhpkmV2;
    getPresentSections(): string[];
    getSectionBytes(): object;
    get_section_bytes(): object;
    isShinyWasm(): boolean;
    isSquareShinyWasm(): boolean;
    matchingUnknownHandler(name: string, gender: Gender): PastHandlerDataV2 | undefined;
    nicknameMatchesSpecies(): boolean;
    nicknameMatchesSpeciesIgnoreCase(): boolean;
    registerHandler(handler: TrainerData, plugin?: string | null): void;
    resetNicknameToSpecies(): void;
    revertAbilityByNum(): void;
    setGameboyData(dvs: StatsPreSplit, met_time_of_day: number, evs_g12: StatsPreSplit): void;
    setRecentSaveWasm(game: OriginGame, trainer_id: number, secret_id: number, trainer_name: string, save_path: string): void;
    /**
     * Set or clear the tags by passing a serialized JSON string or an empty array.
     */
    setTags(tags_js: any): void;
    setTeraTypeOriginalIf(value?: number | null): void;
    toByteArray(): Uint8Array;
    to_bytes_js(): Uint8Array;
    tradeToSaveWasm(game: OriginGame): void;
    trySetOriginalData(tag: Tag, data: Uint8Array): void;
    trySetUnconvertedPkm(tag: Tag, data: Uint8Array): void;
    abilityIndex: AbilityIndex;
    abilityNum: number;
    get affixedRibbon(): ModernRibbon | undefined;
    set affixedRibbon(value: ModernRibbon | null | undefined);
    get alphaMove(): number | undefined;
    set alphaMove(value: number | null | undefined);
    get avsWasm(): Stats16Le | undefined;
    set avsWasm(value: Stats16Le | null | undefined);
    ball: Ball;
    battleMemoryCount: number;
    get canGigantamax(): boolean | undefined;
    set canGigantamax(value: boolean | null | undefined);
    consoleRegion: number;
    contestWasm: ContestStats;
    contestMemoryCount: number;
    get country(): number | undefined;
    set country(value: number | null | undefined);
    get displayColor(): string | undefined;
    set displayColor(value: string | null | undefined);
    readonly dvsWasm: StatsPreSplit;
    get dynamaxLevel(): number | undefined;
    set dynamaxLevel(value: number | null | undefined);
    get eggDateWasm(): PokeDate | undefined;
    set eggDateWasm(value: PokeDate | null | undefined);
    get eggLocationIndex(): number | undefined;
    set eggLocationIndex(value: number | null | undefined);
    get encounterType(): number | undefined;
    set encounterType(value: number | null | undefined);
    encryptionConstant: number;
    enjoyment: number;
    get evsG12Wasm(): StatsPreSplit | undefined;
    set evsG12Wasm(value: StatsPreSplit);
    evsWasm: Stats8;
    exp: number;
    get extraFormIndex(): ExtraFormIndex | undefined;
    set extraFormIndex(value: ExtraFormIndex | null | undefined);
    favorite: boolean;
    get flag2LA(): boolean | undefined;
    set flag2LA(value: boolean | null | undefined);
    formArgument: number;
    fullness: number;
    get gameOfOriginBattle(): number | undefined;
    set gameOfOriginBattle(value: number | null | undefined);
    gameOfOrigin: OriginGame;
    gender: number;
    get geolocationsWasm(): Geolocations | undefined;
    set geolocationsWasm(value: Geolocations | null | undefined);
    get gvsWasm(): Stats8 | undefined;
    set gvsWasm(value: Stats8 | null | undefined);
    handlerAffection: number;
    handlerFriendship: number;
    handlerGender: boolean;
    handlerId: number;
    get handlerLanguage(): Language | undefined;
    set handlerLanguage(value: Language | null | undefined);
    handlerMemoryWasm: TrainerMemory;
    handlerName: string;
    readonly handlers: PastHandlerDataV2[];
    heightScalar: number;
    heldItemIndex: number;
    get homeTracker(): Uint8Array | undefined;
    set homeTracker(value: Uint8Array | null | undefined);
    hyperTrainingWasm: HyperTraining;
    get isAlpha(): boolean | undefined;
    set isAlpha(value: boolean | null | undefined);
    isCurrentHandler: boolean;
    isEgg: boolean;
    isFatefulEncounter: boolean;
    isNicknamed: boolean;
    get isNoble(): boolean | undefined;
    set isNoble(value: boolean | null | undefined);
    get isNsPokemon(): boolean | undefined;
    set isNsPokemon(value: boolean | null | undefined);
    isShadow: boolean;
    ivsWasm: Stats8;
    language: Language;
    markingsWasm: MarkingsSixShapesColors;
    get masterFlagsLA(): Uint8Array | undefined;
    set masterFlagsLA(value: Uint8Array | null | undefined);
    metDateWasm: PokeDate;
    metLevel: number;
    metLocationIndex: number;
    readonly metTimeOfDay: number | undefined;
    readonly mostRecentSaveWasm: MostRecentSave | undefined;
    get moveFlagsLA(): Uint8Array | undefined;
    set moveFlagsLA(value: Uint8Array | null | undefined);
    movesWasm: Uint16Array;
    movePpWasm: Uint8Array;
    movePpUpsWasm: Uint8Array;
    nature: NatureIndex;
    nickname: string;
    get notes(): string | undefined;
    set notes(value: string | null | undefined);
    obedienceLevel: number;
    readonly openhomeId: string;
    readonly originalData: OriginalDataJs | undefined;
    get palma(): number | undefined;
    set palma(value: number | null | undefined);
    get performance(): number | undefined;
    set performance(value: number | null | undefined);
    personalityValue: number;
    get pluginOriginWasm(): string | undefined;
    set pluginOriginWasm(value: string | null | undefined);
    get pokeStarFame(): number | undefined;
    set pokeStarFame(value: number | null | undefined);
    pokerusByte: number;
    get region(): number | undefined;
    set region(value: number | null | undefined);
    relearnMovesWasm: Uint16Array;
    get resortEventStatus(): number | undefined;
    set resortEventStatus(value: number | null | undefined);
    ribbons: string[];
    scale: number;
    secretID: number;
    get secretSuperTrainingComplete(): boolean | undefined;
    set secretSuperTrainingComplete(value: boolean | null | undefined);
    get secretSuperTrainingUnlocked(): boolean | undefined;
    set secretSuperTrainingUnlocked(value: boolean | null | undefined);
    get shinyLeavesWasm(): ShinyLeaves | undefined;
    set shinyLeavesWasm(value: ShinyLeaves | null | undefined);
    sociability: number;
    SpeciesAndForm: SpeciesAndForm;
    statNature: NatureIndex;
    get superTrainingDistFlags(): number | undefined;
    set superTrainingDistFlags(value: number | null | undefined);
    get superTrainingFlags(): number | undefined;
    set superTrainingFlags(value: number | null | undefined);
    teraTypeOverride: number;
    get tmFlagsBDSP(): Uint8Array | undefined;
    set tmFlagsBDSP(value: Uint8Array | null | undefined);
    get tmFlagsSVDLC(): Uint8Array | undefined;
    set tmFlagsSVDLC(value: Uint8Array | null | undefined);
    get tmFlagsSV(): Uint8Array | undefined;
    set tmFlagsSV(value: Uint8Array | null | undefined);
    get trFlagsSwSh(): Uint8Array | undefined;
    set trFlagsSwSh(value: Uint8Array | null | undefined);
    trainerAffection: number;
    trainerFriendship: number;
    trainerGender: boolean;
    trainerID: number;
    trainerMemoryWasm: TrainerMemory;
    trainerName: string;
    get trainingBagHits(): number | undefined;
    set trainingBagHits(value: number | null | undefined);
    get trainingBag(): number | undefined;
    set trainingBag(value: number | null | undefined);
    get tutorFlagsLA(): Uint8Array | undefined;
    set tutorFlagsLA(value: Uint8Array | null | undefined);
    get unknownA0(): number | undefined;
    set unknownA0(value: number | null | undefined);
    get unknownF3(): number | undefined;
    set unknownF3(value: number | null | undefined);
    weightScalar: number;
    readonly tags: any;
    readonly teraTypeOriginal: TeraTypeWasm;
    readonly unconvertedPkm: Uint8Array | undefined;
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
    LegendsZa = 52,
}

export class OriginGameWithData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly game: OriginGame;
    readonly generation: Generation;
    readonly mark: string | undefined;
    readonly name: string;
}

export class OriginGames {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static allMetadata(): OriginGameWithData[];
    static color(value: number): string;
    static gameName(value: number): string;
    static gameSetting(value: number): GameSetting | undefined;
    static gameSettingName(value: number): string | undefined;
    static gamecubeIndex(value: number): number | undefined;
    static generation(value: number): Generation;
    static getMetadata(value: number): OriginGameWithData;
    static isBdsp(value: number): boolean;
    static isGameboy(value: number): boolean;
    static isGba(value: number): boolean;
    static isLetsGo(value: number): boolean;
    static isScarletViolet(value: number): boolean;
    static logoPath(value: number): string | undefined;
    static markPath(value: number): string | undefined;
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
    Mega = 8,
    Go = 9,
}

export class OriginalDataJs {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    data: Uint8Array;
    tag: Tag;
}

export class PastHandlerDataV1 {
    free(): void;
    [Symbol.dispose](): void;
    constructor(id: number | null | undefined, secret_id: number | null | undefined, name: string, friendship: number, memory: TrainerMemory | null | undefined, affection: number, gender: Gender, origin_game?: OriginGame | null, origin_plugin?: string | null);
    affection: number;
    friendship: number;
    gender: Gender;
    memory: TrainerMemory;
    get origin_game(): OriginGame | undefined;
    set origin_game(value: OriginGame | null | undefined);
    get origin_plugin(): string | undefined;
    set origin_plugin(value: string | null | undefined);
    get id(): number | undefined;
    set id(value: number);
    readonly name: string;
    secretId: number;
}

export class PastHandlerDataV2 {
    free(): void;
    [Symbol.dispose](): void;
    constructor(id: number | null | undefined, secret_id: number | null | undefined, name: string, friendship: number, memory: TrainerMemory | null | undefined, affection: number, gender: Gender, language: Language, origin_game?: OriginGame | null, origin_plugin?: string | null);
    affection: number;
    friendship: number;
    gender: Gender;
    language: Language;
    memory: TrainerMemory;
    get origin_game(): OriginGame | undefined;
    set origin_game(value: OriginGame | null | undefined);
    get origin_plugin(): string | undefined;
    set origin_plugin(value: string | null | undefined);
    get id(): number | undefined;
    set id(value: number);
    readonly name: string;
    secretId: number;
}

export class Pk7 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static fromBytes(bytes: Uint8Array): Pk7;
    static fromOhpkmBytes(bytes: Uint8Array, strategy: ConvertStrategy): Pk7;
    static isEmptySlot(bytes: Uint8Array): boolean;
    set_species_and_form(national_dex: number, form_index: number): void;
    toBytes(): Uint8Array;
    toOhpkm(): OhpkmV2;
    ability_num: AbilityNumber;
    ball: Ball;
    battle_memory_count: number;
    checksum: number;
    console_region: number;
    contest_memory_count: number;
    contest: ContestStats;
    country: number;
    current_hp: number;
    get egg_date(): PokeDate | undefined;
    set egg_date(value: PokeDate | null | undefined);
    egg_location_index: number;
    encryption_constant: number;
    enjoyment: number;
    evs: Stats8;
    exp: number;
    form_argument_elapsed: number;
    form_argument_remain: number;
    form_argument: number;
    fullness: number;
    game_of_origin: OriginGame;
    gender: Gender;
    geolocations: Geolocations;
    handler_affection: number;
    handler_friendship: number;
    handler_gender: BinaryGender;
    handler_memory: TrainerMemory;
    handler_name: string;
    held_item_index: number;
    hyper_training: HyperTraining;
    is_current_handler: boolean;
    is_egg: boolean;
    is_fateful_encounter: boolean;
    is_nicknamed: boolean;
    ivs: Stats8;
    language: Language;
    markings: MarkingsSixShapesColors;
    met_date: PokeDate;
    met_level: number;
    met_location_index: number;
    nature: NatureIndex;
    nickname: string;
    personality_value: number;
    pokerus_byte: number;
    region: number;
    resort_event_status: number;
    sanity: number;
    secret_id: number;
    secret_super_training_complete: boolean;
    secret_super_training_unlocked: boolean;
    species_and_form: SpeciesAndForm;
    stat_level: number;
    stats: Stats16Le;
    status_condition: number;
    super_training_dist_flags: number;
    super_training_flags: number;
    trainer_affection: number;
    trainer_friendship: number;
    trainer_gender: BinaryGender;
    trainer_id: number;
    trainer_memory: TrainerMemory;
    trainer_name: string;
    abilityIndex: AbilityIndex;
    move_indices: Uint16Array;
    move_pp: Uint8Array;
    move_pp_ups: Uint8Array;
    relearn_move_indices: Uint16Array;
    readonly ribbon_bytes: Uint8Array;
    readonly ribbons: string[];
    set ribbon_indices(value: Uint32Array);
}

export class PkmConverter {
    free(): void;
    [Symbol.dispose](): void;
    ivs(ohpkm: OhpkmV2): Stats8;
    metData(ohpkm: OhpkmV2): MetData;
    metLocationIndexDiamondPearl(ohpkm: OhpkmV2): number;
    metLocationIndexPlatinumHgss(ohpkm: OhpkmV2): number;
    constructor(dest_pkm_format: PkmFormat, strategy: ConvertStrategy);
    nickname(ohpkm: OhpkmV2): string;
}

export class PkmFormats {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static getMetadataSource(value: PkmFormat): MetadataSource;
}

export class PkmTypes {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static toString(value: number): string;
    static tryFromString(s: string): PkmType | undefined;
}

export class PluginData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    pluginOrigin: string;
}

export class PokeDate {
    free(): void;
    [Symbol.dispose](): void;
    constructor(year: number, month: number, day: number);
    set_year(value: number): void;
    year(): number;
    day: number;
    month: number;
}

export class ShinyLeaves {
    free(): void;
    [Symbol.dispose](): void;
    clone(): ShinyLeaves;
    count(): number;
    static fromByte(byte: number): ShinyLeaves;
    hasCrown(): boolean;
    hasFifth(): boolean;
    hasFirst(): boolean;
    hasFourth(): boolean;
    hasSecond(): boolean;
    hasThird(): boolean;
    constructor();
    toByte(): number;
}

export class SpeciesAndForm {
    free(): void;
    [Symbol.dispose](): void;
    getMetadata(): FormMetadata;
    getSpeciesMetadata(): SpeciesMetadata;
    constructor(national_dex: number, form_index: number);
    static tryNew(national_dex: number, form_index: number): SpeciesAndForm | undefined;
    readonly formIndex: number;
    readonly nationalDex: number;
}

export function SpeciesLookup(national_dex: number): SpeciesMetadata | undefined;

export class SpeciesMetadata {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    calculateLevel(exp: number): number;
    readonly forms: FormMetadata[];
    readonly levelUpType: string;
    readonly nationalDex: number;
}

export enum Stat {
    HP = 0,
    Attack = 1,
    Defense = 2,
    SpecialAttack = 3,
    SpecialDefense = 4,
    Speed = 5,
}

export class Stats {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static abbrLower(stat: Stat): string;
    static fromAbbr(abbr: string): Stat | undefined;
}

export class Stats16Le {
    free(): void;
    [Symbol.dispose](): void;
    constructor(hp: number, atk: number, def: number, spa: number, spd: number, spe: number);
    atk: number;
    def: number;
    hp: number;
    spa: number;
    spd: number;
    spe: number;
    readonly stats16Le: boolean;
}

export class Stats8 {
    free(): void;
    [Symbol.dispose](): void;
    constructor(hp: number, atk: number, def: number, spa: number, spd: number, spe: number);
    atk: number;
    def: number;
    hp: number;
    spa: number;
    spd: number;
    spe: number;
    readonly stats8: boolean;
}

export class StatsPreSplit {
    free(): void;
    [Symbol.dispose](): void;
    constructor(hp: number, atk: number, def: number, spc: number, spe: number);
    atk: number;
    def: number;
    hp: number;
    spc: number;
    spe: number;
}

export class SwordShieldData {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    can_gigantamax: boolean;
    dynamax_level: number;
    palma: number;
}

export enum Tag {
    Pk1 = 1,
    Pk2 = 2,
    Pk3 = 3,
    Pk4 = 4,
    Pk5 = 5,
    Pk6 = 6,
    Pk7 = 7,
    Pb7 = 8,
    Pk8 = 9,
    Pa8 = 10,
    Pb8 = 11,
    Pk9 = 12,
    Pa9 = 13,
    Pk3Rr = 65534,
    Pk3Ub = 65533,
    Pb8Lumi = 65532,
}

export enum TeraTypeWasm {
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
    Stellar = 18,
}

export class TrainerData {
    free(): void;
    [Symbol.dispose](): void;
    constructor(id: number, secret_id: number, name: string, friendship: number, memory: TrainerMemory | null | undefined, affection: number, gender: Gender, language: Language, origin_game?: OriginGame | null);
    affection: number;
    friendship: number;
    gender: Gender;
    id: number;
    language: Language;
    memory: TrainerMemory;
    get origin_game(): OriginGame | undefined;
    set origin_game(value: OriginGame | null | undefined);
    secret_id: number;
    readonly name: string;
}

export class TrainerDataGen7Alola {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    get_name_js(): string;
    game_code: number;
    language: Language;
    secret_id: number;
    trainer_gender: BinaryGender;
    trainer_id: number;
}

export class TrainerMemory {
    free(): void;
    [Symbol.dispose](): void;
    constructor(intensity: number, memory: number, feeling: number, text_variable: number);
    feeling: number;
    intensity: number;
    memory: number;
    textVariables: number;
}

export function allMetadataSources(): any[];

export function all_species_data(): SpeciesMetadata[];

export function currentMetadataReader(national_dex: number, form_index: number): MetadataTableReader | undefined;

export function extraFormDisplayName(form: ExtraFormIndex): string;

export function extraFormIndexFromOrasPikachu(oras_index: number): ExtraFormIndex | undefined;

export function extraFormSpriteName(form: ExtraFormIndex): string | undefined;

export function extraFormTypeOverride(form: ExtraFormIndex): PkmType[] | undefined;

export function formatMatchesOrigin(format: PkmFormat, origin: OriginGame): boolean;

export function genderFromBool(value: boolean): Gender;

export function genderFromInt(value: number): Gender;

export function genderToBool(value: Gender): boolean;

export function genderToInt(value: Gender): number;

export function getAllAbilities(): AbilityMetadata[];

export function getAllBalls(): BallMetadata[];

export function getAllItems(): ItemMetadata[];

export function getAllItemsGen1(): ItemMetadataPastGen[];

export function getAllItemsGen2(): ItemMetadataPastGen[];

export function getAllItemsGen3(): ItemMetadataPastGen[];

export function getConvertSettingsSchema(): SettingsSchemaWrapper;

export function getDefaultConvertStrategy(): ConvertStrategy;

export function getPluginColor(plugin_identifier: string): string;

export function isSeviiForm(form: ExtraFormIndex): boolean;

export function luminescentSupportsExtraForm(form: ExtraFormIndex): boolean;

export function metadataReaderFor(source: MetadataSource, national_dex: number, form_index: number): MetadataTableReader | undefined;

export function orasFormIndexIfSupported(form: ExtraFormIndex): number | undefined;

export function radicalRedSupportsExtraForm(form: ExtraFormIndex): boolean;

export function unboundSupportsExtraForm(form: ExtraFormIndex): boolean;

export function updatePidIfWouldBecomeShinyGen345(pid: number, tid: number, sid: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_bdspdata_free: (a: number, b: number) => void;
    readonly __wbg_convertstrategies_free: (a: number, b: number) => void;
    readonly __wbg_gameboydata_free: (a: number, b: number) => void;
    readonly __wbg_gen45data_free: (a: number, b: number) => void;
    readonly __wbg_gen67data_free: (a: number, b: number) => void;
    readonly __wbg_gen7alolasaverust_free: (a: number, b: number) => void;
    readonly __wbg_get_gameboydata_dvs: (a: number) => number;
    readonly __wbg_get_gameboydata_evs_g12: (a: number) => number;
    readonly __wbg_get_gameboydata_met_time_of_day: (a: number) => number;
    readonly __wbg_get_gen45data_encounter_type: (a: number) => number;
    readonly __wbg_get_gen45data_is_ns_pokemon: (a: number) => number;
    readonly __wbg_get_gen45data_performance: (a: number) => number;
    readonly __wbg_get_gen45data_poke_star_fame: (a: number) => number;
    readonly __wbg_get_gen45data_shiny_leaves: (a: number) => number;
    readonly __wbg_get_gen67data_avs: (a: number) => number;
    readonly __wbg_get_gen67data_country: (a: number) => number;
    readonly __wbg_get_gen67data_geolocations: (a: number) => number;
    readonly __wbg_get_gen67data_region: (a: number) => number;
    readonly __wbg_get_gen67data_resort_event_status: (a: number) => number;
    readonly __wbg_get_gen67data_secret_super_training_complete: (a: number) => number;
    readonly __wbg_get_gen67data_secret_super_training_unlocked: (a: number) => number;
    readonly __wbg_get_gen67data_super_training_dist_flags: (a: number) => number;
    readonly __wbg_get_gen67data_super_training_flags: (a: number) => number;
    readonly __wbg_get_gen67data_training_bag: (a: number) => number;
    readonly __wbg_get_gen67data_training_bag_hits: (a: number) => number;
    readonly __wbg_get_legendsarceusdata_alpha_move: (a: number) => number;
    readonly __wbg_get_legendsarceusdata_flag2: (a: number) => number;
    readonly __wbg_get_legendsarceusdata_gvs: (a: number) => number;
    readonly __wbg_get_legendsarceusdata_is_alpha: (a: number) => number;
    readonly __wbg_get_legendsarceusdata_is_noble: (a: number) => number;
    readonly __wbg_get_legendsarceusdata_unknown_a0: (a: number) => number;
    readonly __wbg_get_legendsarceusdata_unknown_f3: (a: number) => number;
    readonly __wbg_get_maindatav2_ability_num: (a: number) => number;
    readonly __wbg_get_maindatav2_affixed_ribbon: (a: number) => number;
    readonly __wbg_get_maindatav2_ball: (a: number) => number;
    readonly __wbg_get_maindatav2_battle_memory_count: (a: number) => number;
    readonly __wbg_get_maindatav2_console_region: (a: number) => number;
    readonly __wbg_get_maindatav2_contest: (a: number) => number;
    readonly __wbg_get_maindatav2_contest_memory_count: (a: number) => number;
    readonly __wbg_get_maindatav2_egg_date: (a: number) => number;
    readonly __wbg_get_maindatav2_egg_location_index: (a: number) => number;
    readonly __wbg_get_maindatav2_encryption_constant: (a: number) => number;
    readonly __wbg_get_maindatav2_enjoyment: (a: number) => number;
    readonly __wbg_get_maindatav2_evs: (a: number) => number;
    readonly __wbg_get_maindatav2_exp: (a: number) => number;
    readonly __wbg_get_maindatav2_extra_form: (a: number) => number;
    readonly __wbg_get_maindatav2_favorite: (a: number) => number;
    readonly __wbg_get_maindatav2_form_argument: (a: number) => number;
    readonly __wbg_get_maindatav2_fullness: (a: number) => number;
    readonly __wbg_get_maindatav2_game_of_origin: (a: number) => number;
    readonly __wbg_get_maindatav2_game_of_origin_battle: (a: number) => number;
    readonly __wbg_get_maindatav2_gender: (a: number) => number;
    readonly __wbg_get_maindatav2_handler_affection: (a: number) => number;
    readonly __wbg_get_maindatav2_handler_friendship: (a: number) => number;
    readonly __wbg_get_maindatav2_handler_gender: (a: number) => number;
    readonly __wbg_get_maindatav2_handler_id: (a: number) => number;
    readonly __wbg_get_maindatav2_handler_language: (a: number) => number;
    readonly __wbg_get_maindatav2_handler_memory: (a: number) => number;
    readonly __wbg_get_maindatav2_height_scalar: (a: number) => number;
    readonly __wbg_get_maindatav2_held_item_index: (a: number) => number;
    readonly __wbg_get_maindatav2_hyper_training: (a: number) => number;
    readonly __wbg_get_maindatav2_is_current_handler: (a: number) => number;
    readonly __wbg_get_maindatav2_is_egg: (a: number) => number;
    readonly __wbg_get_maindatav2_is_fateful_encounter: (a: number) => number;
    readonly __wbg_get_maindatav2_is_nicknamed: (a: number) => number;
    readonly __wbg_get_maindatav2_is_shadow: (a: number) => number;
    readonly __wbg_get_maindatav2_ivs: (a: number) => number;
    readonly __wbg_get_maindatav2_language: (a: number) => number;
    readonly __wbg_get_maindatav2_markings: (a: number) => number;
    readonly __wbg_get_maindatav2_met_date: (a: number) => number;
    readonly __wbg_get_maindatav2_met_level: (a: number) => number;
    readonly __wbg_get_maindatav2_met_location_index: (a: number) => number;
    readonly __wbg_get_maindatav2_mint_nature: (a: number) => number;
    readonly __wbg_get_maindatav2_nature: (a: number) => number;
    readonly __wbg_get_maindatav2_obedience_level: (a: number) => number;
    readonly __wbg_get_maindatav2_pokerus_byte: (a: number) => number;
    readonly __wbg_get_maindatav2_scale: (a: number) => number;
    readonly __wbg_get_maindatav2_secret_id: (a: number) => number;
    readonly __wbg_get_maindatav2_sociability: (a: number) => number;
    readonly __wbg_get_maindatav2_species_and_form: (a: number) => number;
    readonly __wbg_get_maindatav2_trainer_affection: (a: number) => number;
    readonly __wbg_get_maindatav2_trainer_friendship: (a: number) => number;
    readonly __wbg_get_maindatav2_trainer_gender: (a: number) => number;
    readonly __wbg_get_maindatav2_trainer_id: (a: number) => number;
    readonly __wbg_get_maindatav2_trainer_memory: (a: number) => number;
    readonly __wbg_get_maindatav2_weight_scalar: (a: number) => number;
    readonly __wbg_get_metdata_gameOfOrigin: (a: number) => number;
    readonly __wbg_get_metdata_locationIndex: (a: number) => number;
    readonly __wbg_get_mostrecentsave_file_path: (a: number, b: number) => void;
    readonly __wbg_get_mostrecentsave_game: (a: number) => number;
    readonly __wbg_get_mostrecentsave_secret_id: (a: number) => number;
    readonly __wbg_get_mostrecentsave_trainer_id: (a: number) => number;
    readonly __wbg_get_ohpkmv1_ability_index: (a: number) => number;
    readonly __wbg_get_ohpkmv1_ability_num: (a: number) => number;
    readonly __wbg_get_ohpkmv1_affixed_ribbon: (a: number) => number;
    readonly __wbg_get_ohpkmv1_alpha_move: (a: number) => number;
    readonly __wbg_get_ohpkmv1_avs: (a: number) => number;
    readonly __wbg_get_ohpkmv1_ball: (a: number) => number;
    readonly __wbg_get_ohpkmv1_battle_memory_count: (a: number) => number;
    readonly __wbg_get_ohpkmv1_can_gigantamax: (a: number) => number;
    readonly __wbg_get_ohpkmv1_console_region: (a: number) => number;
    readonly __wbg_get_ohpkmv1_contest: (a: number) => number;
    readonly __wbg_get_ohpkmv1_contest_memory_count: (a: number) => number;
    readonly __wbg_get_ohpkmv1_country: (a: number) => number;
    readonly __wbg_get_ohpkmv1_dvs: (a: number) => number;
    readonly __wbg_get_ohpkmv1_dynamax_level: (a: number) => number;
    readonly __wbg_get_ohpkmv1_egg_date: (a: number) => number;
    readonly __wbg_get_ohpkmv1_egg_location_index: (a: number) => number;
    readonly __wbg_get_ohpkmv1_encounter_type: (a: number) => number;
    readonly __wbg_get_ohpkmv1_encryption_constant: (a: number) => number;
    readonly __wbg_get_ohpkmv1_enjoyment: (a: number) => number;
    readonly __wbg_get_ohpkmv1_evs: (a: number) => number;
    readonly __wbg_get_ohpkmv1_evs_g12: (a: number) => number;
    readonly __wbg_get_ohpkmv1_exp: (a: number) => number;
    readonly __wbg_get_ohpkmv1_favorite: (a: number) => number;
    readonly __wbg_get_ohpkmv1_flag2_la: (a: number) => number;
    readonly __wbg_get_ohpkmv1_form_argument: (a: number) => number;
    readonly __wbg_get_ohpkmv1_fullness: (a: number) => number;
    readonly __wbg_get_ohpkmv1_game_of_origin: (a: number) => number;
    readonly __wbg_get_ohpkmv1_game_of_origin_battle: (a: number) => number;
    readonly __wbg_get_ohpkmv1_gender: (a: number) => number;
    readonly __wbg_get_ohpkmv1_geolocations: (a: number) => number;
    readonly __wbg_get_ohpkmv1_gvs: (a: number) => number;
    readonly __wbg_get_ohpkmv1_handler_affection: (a: number) => number;
    readonly __wbg_get_ohpkmv1_handler_friendship: (a: number) => number;
    readonly __wbg_get_ohpkmv1_handler_gender: (a: number) => number;
    readonly __wbg_get_ohpkmv1_handler_id: (a: number) => number;
    readonly __wbg_get_ohpkmv1_handler_language: (a: number) => number;
    readonly __wbg_get_ohpkmv1_handler_memory: (a: number) => number;
    readonly __wbg_get_ohpkmv1_height_scalar: (a: number) => number;
    readonly __wbg_get_ohpkmv1_held_item_index: (a: number) => number;
    readonly __wbg_get_ohpkmv1_hyper_training: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_alpha: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_current_handler: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_egg: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_fateful_encounter: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_nicknamed: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_noble: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_ns_pokemon: (a: number) => number;
    readonly __wbg_get_ohpkmv1_is_shadow: (a: number) => number;
    readonly __wbg_get_ohpkmv1_ivs: (a: number) => number;
    readonly __wbg_get_ohpkmv1_language: (a: number) => number;
    readonly __wbg_get_ohpkmv1_markings: (a: number) => number;
    readonly __wbg_get_ohpkmv1_met_date: (a: number) => number;
    readonly __wbg_get_ohpkmv1_met_level: (a: number) => number;
    readonly __wbg_get_ohpkmv1_met_location_index: (a: number) => number;
    readonly __wbg_get_ohpkmv1_met_time_of_day: (a: number) => number;
    readonly __wbg_get_ohpkmv1_nature: (a: number) => number;
    readonly __wbg_get_ohpkmv1_obedience_level: (a: number) => number;
    readonly __wbg_get_ohpkmv1_palma: (a: number) => number;
    readonly __wbg_get_ohpkmv1_performance: (a: number) => number;
    readonly __wbg_get_ohpkmv1_poke_star_fame: (a: number) => number;
    readonly __wbg_get_ohpkmv1_pokerus_byte: (a: number) => number;
    readonly __wbg_get_ohpkmv1_region: (a: number) => number;
    readonly __wbg_get_ohpkmv1_resort_event_status: (a: number) => number;
    readonly __wbg_get_ohpkmv1_scale: (a: number) => number;
    readonly __wbg_get_ohpkmv1_secret_id: (a: number) => number;
    readonly __wbg_get_ohpkmv1_secret_super_training_complete: (a: number) => number;
    readonly __wbg_get_ohpkmv1_secret_super_training_unlocked: (a: number) => number;
    readonly __wbg_get_ohpkmv1_shiny_leaves: (a: number) => number;
    readonly __wbg_get_ohpkmv1_species_and_form: (a: number) => number;
    readonly __wbg_get_ohpkmv1_stat_nature: (a: number) => number;
    readonly __wbg_get_ohpkmv1_super_training_dist_flags: (a: number) => number;
    readonly __wbg_get_ohpkmv1_super_training_flags: (a: number) => number;
    readonly __wbg_get_ohpkmv1_tera_type_original: (a: number) => number;
    readonly __wbg_get_ohpkmv1_tera_type_override: (a: number) => number;
    readonly __wbg_get_ohpkmv1_trainer_affection: (a: number) => number;
    readonly __wbg_get_ohpkmv1_trainer_friendship: (a: number) => number;
    readonly __wbg_get_ohpkmv1_trainer_gender: (a: number) => number;
    readonly __wbg_get_ohpkmv1_trainer_id: (a: number) => number;
    readonly __wbg_get_ohpkmv1_trainer_memory: (a: number) => number;
    readonly __wbg_get_ohpkmv1_training_bag: (a: number) => number;
    readonly __wbg_get_ohpkmv1_training_bag_hits: (a: number) => number;
    readonly __wbg_get_ohpkmv1_unknown_a0: (a: number) => number;
    readonly __wbg_get_ohpkmv1_unknown_f3: (a: number) => number;
    readonly __wbg_get_ohpkmv1_weight_scalar: (a: number) => number;
    readonly __wbg_get_originaldatajs_data: (a: number, b: number) => void;
    readonly __wbg_get_originaldatajs_tag: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav1_affection: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav1_friendship: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav1_gender: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav1_memory: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav1_origin_game: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav1_origin_plugin: (a: number, b: number) => void;
    readonly __wbg_get_pasthandlerdatav2_affection: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav2_language: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav2_origin_game: (a: number) => number;
    readonly __wbg_get_pk7_ability_num: (a: number) => number;
    readonly __wbg_get_pk7_ball: (a: number) => number;
    readonly __wbg_get_pk7_battle_memory_count: (a: number) => number;
    readonly __wbg_get_pk7_contest: (a: number) => number;
    readonly __wbg_get_pk7_contest_memory_count: (a: number) => number;
    readonly __wbg_get_pk7_current_hp: (a: number) => number;
    readonly __wbg_get_pk7_egg_location_index: (a: number) => number;
    readonly __wbg_get_pk7_evs: (a: number) => number;
    readonly __wbg_get_pk7_form_argument_elapsed: (a: number) => number;
    readonly __wbg_get_pk7_form_argument_remain: (a: number) => number;
    readonly __wbg_get_pk7_game_of_origin: (a: number) => number;
    readonly __wbg_get_pk7_gender: (a: number) => number;
    readonly __wbg_get_pk7_geolocations: (a: number) => number;
    readonly __wbg_get_pk7_handler_gender: (a: number) => number;
    readonly __wbg_get_pk7_handler_memory: (a: number) => number;
    readonly __wbg_get_pk7_handler_name: (a: number) => number;
    readonly __wbg_get_pk7_hyper_training: (a: number) => number;
    readonly __wbg_get_pk7_is_current_handler: (a: number) => number;
    readonly __wbg_get_pk7_is_egg: (a: number) => number;
    readonly __wbg_get_pk7_is_fateful_encounter: (a: number) => number;
    readonly __wbg_get_pk7_is_nicknamed: (a: number) => number;
    readonly __wbg_get_pk7_ivs: (a: number) => number;
    readonly __wbg_get_pk7_language: (a: number) => number;
    readonly __wbg_get_pk7_markings: (a: number) => number;
    readonly __wbg_get_pk7_met_date: (a: number) => number;
    readonly __wbg_get_pk7_met_location_index: (a: number) => number;
    readonly __wbg_get_pk7_nature: (a: number) => number;
    readonly __wbg_get_pk7_nickname: (a: number) => number;
    readonly __wbg_get_pk7_pokerus_byte: (a: number) => number;
    readonly __wbg_get_pk7_resort_event_status: (a: number) => number;
    readonly __wbg_get_pk7_sanity: (a: number) => number;
    readonly __wbg_get_pk7_secret_id: (a: number) => number;
    readonly __wbg_get_pk7_secret_super_training_complete: (a: number) => number;
    readonly __wbg_get_pk7_secret_super_training_unlocked: (a: number) => number;
    readonly __wbg_get_pk7_stat_level: (a: number) => number;
    readonly __wbg_get_pk7_stats: (a: number) => number;
    readonly __wbg_get_pk7_status_condition: (a: number) => number;
    readonly __wbg_get_pk7_super_training_dist_flags: (a: number) => number;
    readonly __wbg_get_pk7_trainer_gender: (a: number) => number;
    readonly __wbg_get_pk7_trainer_memory: (a: number) => number;
    readonly __wbg_get_pk7_trainer_name: (a: number) => number;
    readonly __wbg_get_swordshielddata_can_gigantamax: (a: number) => number;
    readonly __wbg_get_swordshielddata_dynamax_level: (a: number) => number;
    readonly __wbg_get_trainerdatagen7alola_language: (a: number) => number;
    readonly __wbg_get_trainerdatagen7alola_secret_id: (a: number) => number;
    readonly __wbg_get_trainerdatagen7alola_trainer_gender: (a: number) => number;
    readonly __wbg_legendsarceusdata_free: (a: number, b: number) => void;
    readonly __wbg_maindatav2_free: (a: number, b: number) => void;
    readonly __wbg_metdata_free: (a: number, b: number) => void;
    readonly __wbg_mostrecentsave_free: (a: number, b: number) => void;
    readonly __wbg_ohpkmv1_free: (a: number, b: number) => void;
    readonly __wbg_ohpkmv2_free: (a: number, b: number) => void;
    readonly __wbg_originaldatajs_free: (a: number, b: number) => void;
    readonly __wbg_pasthandlerdatav1_free: (a: number, b: number) => void;
    readonly __wbg_pasthandlerdatav2_free: (a: number, b: number) => void;
    readonly __wbg_pkmconverter_free: (a: number, b: number) => void;
    readonly __wbg_plugindata_free: (a: number, b: number) => void;
    readonly __wbg_set_gameboydata_dvs: (a: number, b: number) => void;
    readonly __wbg_set_gameboydata_evs_g12: (a: number, b: number) => void;
    readonly __wbg_set_gameboydata_met_time_of_day: (a: number, b: number) => void;
    readonly __wbg_set_gen45data_encounter_type: (a: number, b: number) => void;
    readonly __wbg_set_gen45data_is_ns_pokemon: (a: number, b: number) => void;
    readonly __wbg_set_gen45data_performance: (a: number, b: number) => void;
    readonly __wbg_set_gen45data_poke_star_fame: (a: number, b: number) => void;
    readonly __wbg_set_gen45data_shiny_leaves: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_avs: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_country: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_geolocations: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_region: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_resort_event_status: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_secret_super_training_complete: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_secret_super_training_unlocked: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_super_training_dist_flags: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_super_training_flags: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_training_bag: (a: number, b: number) => void;
    readonly __wbg_set_gen67data_training_bag_hits: (a: number, b: number) => void;
    readonly __wbg_set_legendsarceusdata_alpha_move: (a: number, b: number) => void;
    readonly __wbg_set_legendsarceusdata_flag2: (a: number, b: number) => void;
    readonly __wbg_set_legendsarceusdata_gvs: (a: number, b: number) => void;
    readonly __wbg_set_legendsarceusdata_is_alpha: (a: number, b: number) => void;
    readonly __wbg_set_legendsarceusdata_is_noble: (a: number, b: number) => void;
    readonly __wbg_set_legendsarceusdata_unknown_a0: (a: number, b: number) => void;
    readonly __wbg_set_legendsarceusdata_unknown_f3: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_ability_num: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_affixed_ribbon: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_ball: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_battle_memory_count: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_console_region: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_contest: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_contest_memory_count: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_egg_date: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_egg_location_index: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_encryption_constant: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_enjoyment: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_evs: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_exp: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_extra_form: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_favorite: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_form_argument: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_fullness: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_game_of_origin: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_game_of_origin_battle: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_gender: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_handler_affection: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_handler_friendship: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_handler_gender: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_handler_id: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_handler_language: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_handler_memory: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_height_scalar: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_held_item_index: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_hyper_training: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_is_current_handler: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_is_egg: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_is_fateful_encounter: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_is_nicknamed: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_is_shadow: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_ivs: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_language: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_markings: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_met_date: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_met_level: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_met_location_index: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_mint_nature: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_nature: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_obedience_level: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_pokerus_byte: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_scale: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_secret_id: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_sociability: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_species_and_form: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_trainer_affection: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_trainer_friendship: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_trainer_gender: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_trainer_id: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_trainer_memory: (a: number, b: number) => void;
    readonly __wbg_set_maindatav2_weight_scalar: (a: number, b: number) => void;
    readonly __wbg_set_metdata_gameOfOrigin: (a: number, b: number) => void;
    readonly __wbg_set_metdata_locationIndex: (a: number, b: number) => void;
    readonly __wbg_set_mostrecentsave_file_path: (a: number, b: number, c: number) => void;
    readonly __wbg_set_mostrecentsave_game: (a: number, b: number) => void;
    readonly __wbg_set_mostrecentsave_secret_id: (a: number, b: number) => void;
    readonly __wbg_set_mostrecentsave_trainer_id: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_ability_index: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_ability_num: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_affixed_ribbon: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_alpha_move: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_avs: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_ball: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_battle_memory_count: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_can_gigantamax: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_console_region: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_contest: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_contest_memory_count: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_country: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_dvs: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_dynamax_level: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_egg_date: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_egg_location_index: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_encounter_type: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_encryption_constant: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_enjoyment: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_evs: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_evs_g12: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_exp: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_favorite: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_flag2_la: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_form_argument: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_fullness: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_game_of_origin: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_game_of_origin_battle: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_gender: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_geolocations: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_gvs: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_handler_affection: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_handler_friendship: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_handler_gender: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_handler_id: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_handler_language: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_handler_memory: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_height_scalar: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_held_item_index: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_hyper_training: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_alpha: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_current_handler: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_egg: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_fateful_encounter: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_nicknamed: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_noble: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_ns_pokemon: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_is_shadow: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_ivs: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_language: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_markings: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_met_date: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_met_level: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_met_location_index: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_met_time_of_day: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_nature: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_obedience_level: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_palma: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_performance: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_poke_star_fame: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_pokerus_byte: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_region: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_resort_event_status: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_scale: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_secret_id: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_secret_super_training_complete: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_secret_super_training_unlocked: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_shiny_leaves: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_species_and_form: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_stat_nature: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_super_training_dist_flags: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_super_training_flags: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_tera_type_original: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_tera_type_override: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_trainer_affection: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_trainer_friendship: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_trainer_gender: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_trainer_id: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_trainer_memory: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_training_bag: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_training_bag_hits: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_unknown_a0: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_unknown_f3: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_weight_scalar: (a: number, b: number) => void;
    readonly __wbg_set_originaldatajs_tag: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav1_affection: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav1_friendship: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav1_gender: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav1_memory: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav1_origin_game: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav1_origin_plugin: (a: number, b: number, c: number) => void;
    readonly __wbg_set_pasthandlerdatav2_affection: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav2_language: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav2_origin_game: (a: number, b: number) => void;
    readonly __wbg_set_pk7_ability_num: (a: number, b: number) => void;
    readonly __wbg_set_pk7_ball: (a: number, b: number) => void;
    readonly __wbg_set_pk7_battle_memory_count: (a: number, b: number) => void;
    readonly __wbg_set_pk7_contest: (a: number, b: number) => void;
    readonly __wbg_set_pk7_contest_memory_count: (a: number, b: number) => void;
    readonly __wbg_set_pk7_current_hp: (a: number, b: number) => void;
    readonly __wbg_set_pk7_egg_location_index: (a: number, b: number) => void;
    readonly __wbg_set_pk7_evs: (a: number, b: number) => void;
    readonly __wbg_set_pk7_form_argument_elapsed: (a: number, b: number) => void;
    readonly __wbg_set_pk7_form_argument_remain: (a: number, b: number) => void;
    readonly __wbg_set_pk7_game_of_origin: (a: number, b: number) => void;
    readonly __wbg_set_pk7_gender: (a: number, b: number) => void;
    readonly __wbg_set_pk7_geolocations: (a: number, b: number) => void;
    readonly __wbg_set_pk7_handler_gender: (a: number, b: number) => void;
    readonly __wbg_set_pk7_handler_memory: (a: number, b: number) => void;
    readonly __wbg_set_pk7_handler_name: (a: number, b: number) => void;
    readonly __wbg_set_pk7_hyper_training: (a: number, b: number) => void;
    readonly __wbg_set_pk7_is_current_handler: (a: number, b: number) => void;
    readonly __wbg_set_pk7_is_egg: (a: number, b: number) => void;
    readonly __wbg_set_pk7_is_fateful_encounter: (a: number, b: number) => void;
    readonly __wbg_set_pk7_is_nicknamed: (a: number, b: number) => void;
    readonly __wbg_set_pk7_ivs: (a: number, b: number) => void;
    readonly __wbg_set_pk7_language: (a: number, b: number) => void;
    readonly __wbg_set_pk7_markings: (a: number, b: number) => void;
    readonly __wbg_set_pk7_met_date: (a: number, b: number) => void;
    readonly __wbg_set_pk7_met_location_index: (a: number, b: number) => void;
    readonly __wbg_set_pk7_nature: (a: number, b: number) => void;
    readonly __wbg_set_pk7_nickname: (a: number, b: number) => void;
    readonly __wbg_set_pk7_pokerus_byte: (a: number, b: number) => void;
    readonly __wbg_set_pk7_resort_event_status: (a: number, b: number) => void;
    readonly __wbg_set_pk7_sanity: (a: number, b: number) => void;
    readonly __wbg_set_pk7_secret_id: (a: number, b: number) => void;
    readonly __wbg_set_pk7_secret_super_training_complete: (a: number, b: number) => void;
    readonly __wbg_set_pk7_secret_super_training_unlocked: (a: number, b: number) => void;
    readonly __wbg_set_pk7_stat_level: (a: number, b: number) => void;
    readonly __wbg_set_pk7_stats: (a: number, b: number) => void;
    readonly __wbg_set_pk7_status_condition: (a: number, b: number) => void;
    readonly __wbg_set_pk7_super_training_dist_flags: (a: number, b: number) => void;
    readonly __wbg_set_pk7_trainer_gender: (a: number, b: number) => void;
    readonly __wbg_set_pk7_trainer_memory: (a: number, b: number) => void;
    readonly __wbg_set_pk7_trainer_name: (a: number, b: number) => void;
    readonly __wbg_set_swordshielddata_can_gigantamax: (a: number, b: number) => void;
    readonly __wbg_set_swordshielddata_dynamax_level: (a: number, b: number) => void;
    readonly __wbg_set_trainerdatagen7alola_language: (a: number, b: number) => void;
    readonly __wbg_set_trainerdatagen7alola_secret_id: (a: number, b: number) => void;
    readonly __wbg_set_trainerdatagen7alola_trainer_gender: (a: number, b: number) => void;
    readonly __wbg_swordshielddata_free: (a: number, b: number) => void;
    readonly __wbg_trainerdatagen7alola_free: (a: number, b: number) => void;
    readonly convertstrategies_getCategoryName: (a: number, b: number) => void;
    readonly convertstrategies_getDefault: () => number;
    readonly convertstrategies_getDescription: (a: number, b: number) => void;
    readonly convertstrategies_getSettingName: (a: number, b: number) => void;
    readonly extraFormDisplayName: (a: number, b: number) => void;
    readonly extraFormIndexFromOrasPikachu: (a: number) => number;
    readonly extraFormSpriteName: (a: number, b: number) => void;
    readonly extraFormTypeOverride: (a: number, b: number) => void;
    readonly formatMatchesOrigin: (a: number, b: number) => number;
    readonly gen7alolasave_box_cols: () => number;
    readonly gen7alolasave_box_rows: () => number;
    readonly gen7alolasave_box_size: () => number;
    readonly gen7alolasave_calc_checksum: (a: number) => number;
    readonly gen7alolasave_convertOhpkm: (a: number, b: number, c: number) => number;
    readonly gen7alolasave_current_pc_box_idx: (a: number) => number;
    readonly gen7alolasave_display_tid_wasm: (a: number, b: number) => void;
    readonly gen7alolasave_fileIsSave: (a: number, b: number) => number;
    readonly gen7alolasave_fromBytes: (a: number, b: number, c: number) => void;
    readonly gen7alolasave_game_of_origin_wasm: (a: number) => number;
    readonly gen7alolasave_getMonAt: (a: number, b: number, c: number) => number;
    readonly gen7alolasave_includesOrigin: (a: number) => number;
    readonly gen7alolasave_language_wasm: (a: number) => number;
    readonly gen7alolasave_max_box_count: () => number;
    readonly gen7alolasave_prepareBytesForSaving: (a: number, b: number) => void;
    readonly gen7alolasave_secret_id_wasm: (a: number) => number;
    readonly gen7alolasave_setMonAt: (a: number, b: number, c: number, d: number) => void;
    readonly gen7alolasave_trainer_gender_wasm: (a: number) => number;
    readonly gen7alolasave_trainer_id_wasm: (a: number) => number;
    readonly gen7alolasave_trainer_name_wasm: (a: number, b: number) => void;
    readonly getConvertSettingsSchema: () => number;
    readonly isSeviiForm: (a: number) => number;
    readonly luminescentSupportsExtraForm: (a: number) => number;
    readonly mostrecentsave_trainer_name: (a: number, b: number) => void;
    readonly ohpkmv1_toBytes: (a: number, b: number) => void;
    readonly ohpkmv2_abilityWasChanged: (a: number) => number;
    readonly ohpkmv2_ability_index_js: (a: number) => number;
    readonly ohpkmv2_ability_num_js: (a: number) => number;
    readonly ohpkmv2_addGen3Ribbons: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_addModernRibbons: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_affixed_ribbon_js: (a: number) => number;
    readonly ohpkmv2_alpha_move_js: (a: number) => number;
    readonly ohpkmv2_avs_js: (a: number) => number;
    readonly ohpkmv2_ball_js: (a: number) => number;
    readonly ohpkmv2_battle_memory_count_js: (a: number) => number;
    readonly ohpkmv2_can_gigantamax_js: (a: number) => number;
    readonly ohpkmv2_console_region_js: (a: number) => number;
    readonly ohpkmv2_contest_js: (a: number) => number;
    readonly ohpkmv2_contest_memory_count_js: (a: number) => number;
    readonly ohpkmv2_country_js: (a: number) => number;
    readonly ohpkmv2_defaultWithSpecies: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_display_color: (a: number, b: number) => void;
    readonly ohpkmv2_dvs_js: (a: number) => number;
    readonly ohpkmv2_dynamax_level_js: (a: number) => number;
    readonly ohpkmv2_egg_date_js: (a: number) => number;
    readonly ohpkmv2_egg_location_index_js: (a: number) => number;
    readonly ohpkmv2_encounter_type_js: (a: number) => number;
    readonly ohpkmv2_encryption_constant_js: (a: number) => number;
    readonly ohpkmv2_enjoyment_js: (a: number) => number;
    readonly ohpkmv2_evs_g12_js: (a: number) => number;
    readonly ohpkmv2_evs_js: (a: number) => number;
    readonly ohpkmv2_exp_js: (a: number) => number;
    readonly ohpkmv2_extra_form_index_js: (a: number) => number;
    readonly ohpkmv2_favorite_js: (a: number) => number;
    readonly ohpkmv2_findKnownHandler: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
    readonly ohpkmv2_flag2_la_js: (a: number) => number;
    readonly ohpkmv2_form_argument_js: (a: number) => number;
    readonly ohpkmv2_fromByteVectorFixingErrors: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_fromV1Bytes: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_from_byte_vector: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_fullness_js: (a: number) => number;
    readonly ohpkmv2_game_of_origin_battle_js: (a: number) => number;
    readonly ohpkmv2_game_of_origin_js: (a: number) => number;
    readonly ohpkmv2_gender_js: (a: number) => number;
    readonly ohpkmv2_geolocations_js: (a: number) => number;
    readonly ohpkmv2_getPresentSections: (a: number, b: number) => void;
    readonly ohpkmv2_getSectionBytes: (a: number, b: number) => void;
    readonly ohpkmv2_gvs_js: (a: number) => number;
    readonly ohpkmv2_handler_affection_js: (a: number) => number;
    readonly ohpkmv2_handler_friendship_js: (a: number) => number;
    readonly ohpkmv2_handler_gender_js: (a: number) => number;
    readonly ohpkmv2_handler_id_js: (a: number) => number;
    readonly ohpkmv2_handler_language_js: (a: number) => number;
    readonly ohpkmv2_handler_memory_js: (a: number) => number;
    readonly ohpkmv2_handler_name_js: (a: number, b: number) => void;
    readonly ohpkmv2_handlers_js: (a: number, b: number) => void;
    readonly ohpkmv2_height_scalar_js: (a: number) => number;
    readonly ohpkmv2_held_item_index_js: (a: number) => number;
    readonly ohpkmv2_home_tracker_js: (a: number, b: number) => void;
    readonly ohpkmv2_hyper_training_js: (a: number) => number;
    readonly ohpkmv2_isShinyWasm: (a: number) => number;
    readonly ohpkmv2_isSquareShinyWasm: (a: number) => number;
    readonly ohpkmv2_is_alpha_js: (a: number) => number;
    readonly ohpkmv2_is_current_handler_js: (a: number) => number;
    readonly ohpkmv2_is_egg_js: (a: number) => number;
    readonly ohpkmv2_is_fateful_encounter_js: (a: number) => number;
    readonly ohpkmv2_is_nicknamed_js: (a: number) => number;
    readonly ohpkmv2_is_noble_js: (a: number) => number;
    readonly ohpkmv2_is_ns_pokemon_js: (a: number) => number;
    readonly ohpkmv2_is_shadow_js: (a: number) => number;
    readonly ohpkmv2_ivs_js: (a: number) => number;
    readonly ohpkmv2_language_js: (a: number) => number;
    readonly ohpkmv2_markings_js: (a: number) => number;
    readonly ohpkmv2_master_flags_la_js: (a: number, b: number) => void;
    readonly ohpkmv2_matchingUnknownHandler: (a: number, b: number, c: number, d: number) => number;
    readonly ohpkmv2_met_date_js: (a: number) => number;
    readonly ohpkmv2_met_level_js: (a: number) => number;
    readonly ohpkmv2_met_location_index_js: (a: number) => number;
    readonly ohpkmv2_met_time_of_day_js: (a: number) => number;
    readonly ohpkmv2_most_recent_save_js: (a: number) => number;
    readonly ohpkmv2_move_flags_la_js: (a: number, b: number) => void;
    readonly ohpkmv2_move_indices_js: (a: number, b: number) => void;
    readonly ohpkmv2_move_pp_js: (a: number, b: number) => void;
    readonly ohpkmv2_move_pp_ups_js: (a: number, b: number) => void;
    readonly ohpkmv2_nature_js: (a: number) => number;
    readonly ohpkmv2_nicknameMatchesSpecies: (a: number) => number;
    readonly ohpkmv2_nicknameMatchesSpeciesIgnoreCase: (a: number) => number;
    readonly ohpkmv2_nickname_js: (a: number, b: number) => void;
    readonly ohpkmv2_notes_js: (a: number, b: number) => void;
    readonly ohpkmv2_obedience_level_js: (a: number) => number;
    readonly ohpkmv2_openhome_id_js: (a: number, b: number) => void;
    readonly ohpkmv2_original_data: (a: number) => number;
    readonly ohpkmv2_palma_js: (a: number) => number;
    readonly ohpkmv2_performance_js: (a: number) => number;
    readonly ohpkmv2_personality_value_js: (a: number) => number;
    readonly ohpkmv2_plugin_origin_js: (a: number, b: number) => void;
    readonly ohpkmv2_poke_star_fame_js: (a: number) => number;
    readonly ohpkmv2_pokerus_byte_js: (a: number) => number;
    readonly ohpkmv2_region_js: (a: number) => number;
    readonly ohpkmv2_registerHandler: (a: number, b: number, c: number, d: number) => void;
    readonly ohpkmv2_relearn_move_indices_js: (a: number, b: number) => void;
    readonly ohpkmv2_resetNicknameToSpecies: (a: number) => void;
    readonly ohpkmv2_resort_event_status_js: (a: number) => number;
    readonly ohpkmv2_revertAbilityByNum: (a: number) => void;
    readonly ohpkmv2_ribbons_js: (a: number, b: number) => void;
    readonly ohpkmv2_scale_js: (a: number) => number;
    readonly ohpkmv2_secret_id_js: (a: number) => number;
    readonly ohpkmv2_secret_super_training_complete_js: (a: number) => number;
    readonly ohpkmv2_secret_super_training_unlocked_js: (a: number) => number;
    readonly ohpkmv2_setGameboyData: (a: number, b: number, c: number, d: number) => void;
    readonly ohpkmv2_setRecentSaveWasm: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
    readonly ohpkmv2_setTags: (a: number, b: number) => void;
    readonly ohpkmv2_setTeraTypeOriginalIf: (a: number, b: number) => void;
    readonly ohpkmv2_set_ability_index_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_ability_num_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_affixed_ribbon_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_alpha_move_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_avs_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_ball_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_battle_memory_count_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_can_gigantamax_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_console_region_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_contest_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_contest_memory_count_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_country_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_display_color: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_dynamax_level_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_egg_date_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_egg_location_index_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_encounter_type_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_encryption_constant_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_enjoyment_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_evs_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_exp_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_extra_form_index_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_favorite_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_flag2_la_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_form_argument_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_fullness_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_game_of_origin_battle_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_game_of_origin_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_gender_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_geolocations_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_gvs_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_handler_affection_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_handler_friendship_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_handler_gender_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_handler_id_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_handler_language_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_handler_memory_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_handler_name_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_height_scalar_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_held_item_index_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_home_tracker_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_hyper_training_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_alpha_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_current_handler_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_egg_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_fateful_encounter_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_nicknamed_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_noble_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_ns_pokemon_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_is_shadow_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_ivs_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_language_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_markings_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_master_flags_la_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_met_date_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_met_level_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_met_location_index_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_move_flags_la_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_move_indices_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_move_pp_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_move_pp_ups_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_nature_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_nickname_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_notes_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_obedience_level_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_palma_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_performance_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_personality_value_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_plugin_origin_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_poke_star_fame_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_pokerus_byte_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_region_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_relearn_move_indices_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_resort_event_status_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_ribbons_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_scale_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_secret_id_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_secret_super_training_complete_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_secret_super_training_unlocked_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_shiny_leaves_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_sociability_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_species_and_form_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_stat_nature_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_super_training_dist_flags_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_super_training_flags_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_tera_type_override_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_tm_flags_bdsp_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_tm_flags_sv_dlc_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_tm_flags_sv_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_tr_flags_swsh_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_trainer_affection_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_trainer_friendship_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_trainer_gender_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_trainer_id_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_trainer_memory_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_trainer_name_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_training_bag_hits_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_training_bag_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_tutor_flags_la_js: (a: number, b: number, c: number) => void;
    readonly ohpkmv2_set_unknown_a0_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_unknown_f3_js: (a: number, b: number) => void;
    readonly ohpkmv2_set_weight_scalar_js: (a: number, b: number) => void;
    readonly ohpkmv2_shiny_leaves_js: (a: number) => number;
    readonly ohpkmv2_sociability_js: (a: number) => number;
    readonly ohpkmv2_species_and_form_js: (a: number) => number;
    readonly ohpkmv2_stat_nature_js: (a: number) => number;
    readonly ohpkmv2_super_training_dist_flags_js: (a: number) => number;
    readonly ohpkmv2_super_training_flags_js: (a: number) => number;
    readonly ohpkmv2_tags: (a: number) => number;
    readonly ohpkmv2_tera_type_original_js: (a: number) => number;
    readonly ohpkmv2_tera_type_override_js: (a: number) => number;
    readonly ohpkmv2_tm_flags_sv_dlc_js: (a: number, b: number) => void;
    readonly ohpkmv2_tm_flags_sv_js: (a: number, b: number) => void;
    readonly ohpkmv2_toByteArray: (a: number, b: number) => void;
    readonly ohpkmv2_tr_flags_swsh_js: (a: number, b: number) => void;
    readonly ohpkmv2_tradeToSaveWasm: (a: number, b: number) => void;
    readonly ohpkmv2_trainer_affection_js: (a: number) => number;
    readonly ohpkmv2_trainer_friendship_js: (a: number) => number;
    readonly ohpkmv2_trainer_gender_js: (a: number) => number;
    readonly ohpkmv2_trainer_id_js: (a: number) => number;
    readonly ohpkmv2_trainer_memory_js: (a: number) => number;
    readonly ohpkmv2_trainer_name_js: (a: number, b: number) => void;
    readonly ohpkmv2_training_bag_hits_js: (a: number) => number;
    readonly ohpkmv2_training_bag_js: (a: number) => number;
    readonly ohpkmv2_trySetOriginalData: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly ohpkmv2_trySetUnconvertedPkm: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly ohpkmv2_tutor_flags_bdsp_js: (a: number, b: number) => void;
    readonly ohpkmv2_tutor_flags_la_js: (a: number, b: number) => void;
    readonly ohpkmv2_unconverted_pkm: (a: number, b: number) => void;
    readonly ohpkmv2_unknown_a0_js: (a: number) => number;
    readonly ohpkmv2_unknown_f3_js: (a: number) => number;
    readonly ohpkmv2_update_evs_g12_js: (a: number, b: number) => void;
    readonly ohpkmv2_weight_scalar_js: (a: number) => number;
    readonly orasFormIndexIfSupported: (a: number) => number;
    readonly pasthandlerdatav1_id: (a: number) => number;
    readonly pasthandlerdatav1_name: (a: number, b: number) => void;
    readonly pasthandlerdatav1_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
    readonly pasthandlerdatav1_secret_id: (a: number) => number;
    readonly pasthandlerdatav1_set_id: (a: number, b: number) => void;
    readonly pasthandlerdatav1_set_secret_id: (a: number, b: number) => void;
    readonly pasthandlerdatav2_id: (a: number) => number;
    readonly pasthandlerdatav2_name: (a: number, b: number) => void;
    readonly pasthandlerdatav2_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => number;
    readonly pasthandlerdatav2_secret_id: (a: number) => number;
    readonly pasthandlerdatav2_set_id: (a: number, b: number) => void;
    readonly pasthandlerdatav2_set_secret_id: (a: number, b: number) => void;
    readonly pk7_ability_index: (a: number) => number;
    readonly pk7_fromBytes: (a: number, b: number, c: number) => void;
    readonly pk7_fromOhpkmBytes: (a: number, b: number, c: number, d: number) => void;
    readonly pk7_isEmptySlot: (a: number, b: number) => number;
    readonly pk7_move_indices: (a: number, b: number) => void;
    readonly pk7_move_pp: (a: number, b: number) => void;
    readonly pk7_move_pp_ups: (a: number, b: number) => void;
    readonly pk7_relearn_move_indices: (a: number, b: number) => void;
    readonly pk7_ribbon_bytes: (a: number, b: number) => void;
    readonly pk7_ribbons: (a: number, b: number) => void;
    readonly pk7_set_ability_index: (a: number, b: number, c: number) => void;
    readonly pk7_set_move_indices: (a: number, b: number, c: number) => void;
    readonly pk7_set_move_pp: (a: number, b: number, c: number) => void;
    readonly pk7_set_move_pp_ups: (a: number, b: number, c: number) => void;
    readonly pk7_set_relearn_move_indices: (a: number, b: number, c: number) => void;
    readonly pk7_set_ribbon_indices: (a: number, b: number, c: number) => void;
    readonly pk7_set_species_and_form: (a: number, b: number, c: number, d: number) => void;
    readonly pk7_toBytes: (a: number, b: number) => void;
    readonly pk7_toOhpkm: (a: number) => number;
    readonly pkmconverter_ivs: (a: number, b: number) => number;
    readonly pkmconverter_metData: (a: number, b: number) => number;
    readonly pkmconverter_metLocationIndexDiamondPearl: (a: number, b: number) => number;
    readonly pkmconverter_metLocationIndexPlatinumHgss: (a: number, b: number) => number;
    readonly pkmconverter_new_wasm: (a: number, b: number) => number;
    readonly pkmconverter_nickname: (a: number, b: number, c: number) => void;
    readonly pkmformats_getMetadataSource: (a: number) => number;
    readonly plugindata_plugin_origin: (a: number, b: number) => void;
    readonly plugindata_set_plugin_origin: (a: number, b: number, c: number) => void;
    readonly radicalRedSupportsExtraForm: (a: number) => number;
    readonly trainerdatagen7alola_get_name_js: (a: number, b: number) => void;
    readonly unboundSupportsExtraForm: (a: number) => number;
    readonly updatePidIfWouldBecomeShinyGen345: (a: number, b: number, c: number) => number;
    readonly __wbg_get_maindatav2_personality_value: (a: number) => number;
    readonly __wbg_get_ohpkmv1_personality_value: (a: number) => number;
    readonly __wbg_get_ohpkmv1_sociability: (a: number) => number;
    readonly __wbg_get_pk7_encryption_constant: (a: number) => number;
    readonly __wbg_get_pk7_exp: (a: number) => number;
    readonly __wbg_get_pk7_form_argument: (a: number) => number;
    readonly __wbg_get_pk7_personality_value: (a: number) => number;
    readonly __wbg_get_pk7_super_training_flags: (a: number) => number;
    readonly __wbg_get_swordshielddata_palma: (a: number) => number;
    readonly __wbg_set_maindatav2_personality_value: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_personality_value: (a: number, b: number) => void;
    readonly __wbg_set_ohpkmv1_sociability: (a: number, b: number) => void;
    readonly __wbg_set_pk7_encryption_constant: (a: number, b: number) => void;
    readonly __wbg_set_pk7_exp: (a: number, b: number) => void;
    readonly __wbg_set_pk7_form_argument: (a: number, b: number) => void;
    readonly __wbg_set_pk7_personality_value: (a: number, b: number) => void;
    readonly __wbg_set_pk7_super_training_flags: (a: number, b: number) => void;
    readonly __wbg_set_swordshielddata_palma: (a: number, b: number) => void;
    readonly __wbg_set_pk7_species_and_form: (a: number, b: number) => void;
    readonly getDefaultConvertStrategy: () => number;
    readonly __wbg_get_pasthandlerdatav2_friendship: (a: number) => number;
    readonly __wbg_get_pasthandlerdatav2_gender: (a: number) => number;
    readonly __wbg_get_pk7_checksum: (a: number) => number;
    readonly __wbg_get_pk7_console_region: (a: number) => number;
    readonly __wbg_get_pk7_country: (a: number) => number;
    readonly __wbg_get_pk7_enjoyment: (a: number) => number;
    readonly __wbg_get_pk7_fullness: (a: number) => number;
    readonly __wbg_get_pk7_handler_affection: (a: number) => number;
    readonly __wbg_get_pk7_handler_friendship: (a: number) => number;
    readonly __wbg_get_pk7_held_item_index: (a: number) => number;
    readonly __wbg_get_pk7_met_level: (a: number) => number;
    readonly __wbg_get_pk7_region: (a: number) => number;
    readonly __wbg_get_pk7_trainer_affection: (a: number) => number;
    readonly __wbg_get_pk7_trainer_friendship: (a: number) => number;
    readonly __wbg_get_pk7_trainer_id: (a: number) => number;
    readonly __wbg_get_trainerdatagen7alola_game_code: (a: number) => number;
    readonly __wbg_get_trainerdatagen7alola_trainer_id: (a: number) => number;
    readonly __wbg_set_originaldatajs_data: (a: number, b: number, c: number) => void;
    readonly __wbg_get_pasthandlerdatav2_memory: (a: number) => number;
    readonly __wbg_set_pasthandlerdatav2_origin_plugin: (a: number, b: number, c: number) => void;
    readonly __wbg_get_pk7_species_and_form: (a: number) => number;
    readonly __wbg_set_pasthandlerdatav2_friendship: (a: number, b: number) => void;
    readonly __wbg_set_pk7_checksum: (a: number, b: number) => void;
    readonly __wbg_set_pk7_console_region: (a: number, b: number) => void;
    readonly __wbg_set_pk7_country: (a: number, b: number) => void;
    readonly __wbg_set_pk7_enjoyment: (a: number, b: number) => void;
    readonly __wbg_set_pk7_fullness: (a: number, b: number) => void;
    readonly __wbg_set_pk7_handler_affection: (a: number, b: number) => void;
    readonly __wbg_set_pk7_handler_friendship: (a: number, b: number) => void;
    readonly __wbg_set_pk7_held_item_index: (a: number, b: number) => void;
    readonly __wbg_set_pk7_met_level: (a: number, b: number) => void;
    readonly __wbg_set_pk7_region: (a: number, b: number) => void;
    readonly __wbg_set_pk7_trainer_affection: (a: number, b: number) => void;
    readonly __wbg_set_pk7_trainer_friendship: (a: number, b: number) => void;
    readonly __wbg_set_pk7_trainer_id: (a: number, b: number) => void;
    readonly __wbg_set_trainerdatagen7alola_game_code: (a: number, b: number) => void;
    readonly __wbg_set_trainerdatagen7alola_trainer_id: (a: number, b: number) => void;
    readonly ohpkmv2_from_v1_bytes: (a: number, b: number, c: number) => void;
    readonly __wbg_set_pasthandlerdatav2_gender: (a: number, b: number) => void;
    readonly __wbg_get_pasthandlerdatav2_origin_plugin: (a: number, b: number) => void;
    readonly gen7alolasave_isValidSave: (a: number, b: number) => number;
    readonly __wbg_set_pk7_egg_date: (a: number, b: number) => void;
    readonly __wbg_get_pk7_egg_date: (a: number) => number;
    readonly __wbg_pkmformats_free: (a: number, b: number) => void;
    readonly __wbg_set_pasthandlerdatav2_memory: (a: number, b: number) => void;
    readonly ohpkmv2_get_section_bytes: (a: number, b: number) => void;
    readonly __wbg_pk7_free: (a: number, b: number) => void;
    readonly ohpkmv2_to_bytes_js: (a: number, b: number) => void;
    readonly MetadataSummaryLookup: (a: number, b: number) => number;
    readonly SpeciesLookup: (a: number) => number;
    readonly __wbg_abilityindex_free: (a: number, b: number) => void;
    readonly __wbg_abilitymetadata_free: (a: number, b: number) => void;
    readonly __wbg_ballmetadata_free: (a: number, b: number) => void;
    readonly __wbg_formmetadata_free: (a: number, b: number) => void;
    readonly __wbg_get_abilitymetadata_id: (a: number) => number;
    readonly __wbg_get_ballmetadata_index: (a: number) => number;
    readonly __wbg_get_ballmetadata_name: (a: number, b: number) => void;
    readonly __wbg_get_formmetadata_baseHeight: (a: number) => number;
    readonly __wbg_get_formmetadata_baseWeight: (a: number) => number;
    readonly __wbg_get_formmetadata_formIndex: (a: number) => number;
    readonly __wbg_get_formmetadata_genderRatio: (a: number) => number;
    readonly __wbg_get_formmetadata_isBaseForm: (a: number) => number;
    readonly __wbg_get_formmetadata_isBattleOnly: (a: number) => number;
    readonly __wbg_get_formmetadata_isCosmetic: (a: number) => number;
    readonly __wbg_get_formmetadata_isGmax: (a: number) => number;
    readonly __wbg_get_formmetadata_isMega: (a: number) => number;
    readonly __wbg_get_formmetadata_isMythical: (a: number) => number;
    readonly __wbg_get_formmetadata_isParadox: (a: number) => number;
    readonly __wbg_get_formmetadata_isRestrictedLegend: (a: number) => number;
    readonly __wbg_get_formmetadata_isSubLegend: (a: number) => number;
    readonly __wbg_get_formmetadata_isUltraBeast: (a: number) => number;
    readonly __wbg_get_formmetadata_nationalDex: (a: number) => number;
    readonly __wbg_get_formmetadata_preEvolution: (a: number) => number;
    readonly __wbg_get_itemmetadatapastgen_id: (a: number) => number;
    readonly __wbg_get_itemmetadatapastgen_modern_id: (a: number) => number;
    readonly __wbg_get_learnsetmovejs_is_evolution: (a: number) => number;
    readonly __wbg_get_learnsetmovejs_level: (a: number) => number;
    readonly __wbg_get_learnsetmovejs_move_id: (a: number) => number;
    readonly __wbg_get_megaevolutionmetadata_megaForme: (a: number) => number;
    readonly __wbg_get_megaevolutionmetadata_requiredItemId: (a: number) => number;
    readonly __wbg_get_moveslot_move_index: (a: number) => number;
    readonly __wbg_get_moveslot_pp: (a: number) => number;
    readonly __wbg_get_moveslot_pp_ups: (a: number) => number;
    readonly __wbg_get_naturestatdata_decrease: (a: number) => number;
    readonly __wbg_get_naturestatdata_increase: (a: number) => number;
    readonly __wbg_itemmetadatapastgen_free: (a: number, b: number) => void;
    readonly __wbg_learnsetmovejs_free: (a: number, b: number) => void;
    readonly __wbg_lookup_free: (a: number, b: number) => void;
    readonly __wbg_megaevolutionmetadata_free: (a: number, b: number) => void;
    readonly __wbg_metadatatablereader_free: (a: number, b: number) => void;
    readonly __wbg_moveindex_free: (a: number, b: number) => void;
    readonly __wbg_moveslot_free: (a: number, b: number) => void;
    readonly __wbg_moveslots_free: (a: number, b: number) => void;
    readonly __wbg_natureindex_free: (a: number, b: number) => void;
    readonly __wbg_naturestatdata_free: (a: number, b: number) => void;
    readonly __wbg_obsoleteribbonset_free: (a: number, b: number) => void;
    readonly __wbg_set_abilitymetadata_id: (a: number, b: number) => void;
    readonly __wbg_set_ballmetadata_index: (a: number, b: number) => void;
    readonly __wbg_set_ballmetadata_name: (a: number, b: number, c: number) => void;
    readonly __wbg_set_itemmetadatapastgen_id: (a: number, b: number) => void;
    readonly __wbg_set_itemmetadatapastgen_modern_id: (a: number, b: number) => void;
    readonly __wbg_set_learnsetmovejs_is_evolution: (a: number, b: number) => void;
    readonly __wbg_set_learnsetmovejs_level: (a: number, b: number) => void;
    readonly __wbg_set_learnsetmovejs_move_id: (a: number, b: number) => void;
    readonly __wbg_set_megaevolutionmetadata_megaForme: (a: number, b: number) => void;
    readonly __wbg_set_megaevolutionmetadata_requiredItemId: (a: number, b: number) => void;
    readonly __wbg_set_moveslot_move_index: (a: number, b: number) => void;
    readonly __wbg_set_moveslot_pp: (a: number, b: number) => void;
    readonly __wbg_set_moveslot_pp_ups: (a: number, b: number) => void;
    readonly __wbg_set_naturestatdata_decrease: (a: number, b: number) => void;
    readonly __wbg_set_naturestatdata_increase: (a: number, b: number) => void;
    readonly __wbg_speciesandform_free: (a: number, b: number) => void;
    readonly abilityindexwasm_equals: (a: number, b: number) => number;
    readonly abilityindexwasm_fromIndex: (a: number) => number;
    readonly abilityindexwasm_index: (a: number) => number;
    readonly abilityindexwasm_name: (a: number, b: number) => void;
    readonly abilitymetadata_name: (a: number, b: number) => void;
    readonly allMetadataSources: (a: number) => void;
    readonly all_species_data: (a: number) => void;
    readonly currentMetadataReader: (a: number, b: number) => number;
    readonly formmetadata_abilities: (a: number, b: number) => void;
    readonly formmetadata_abilityByNum: (a: number, b: number) => number;
    readonly formmetadata_abilityByNumGen3: (a: number, b: number) => number;
    readonly formmetadata_baseStatsFrom: (a: number, b: number) => number;
    readonly formmetadata_egg_groups: (a: number, b: number) => void;
    readonly formmetadata_evolutions: (a: number, b: number) => void;
    readonly formmetadata_form_name: (a: number, b: number) => void;
    readonly formmetadata_genderFromAtkDv: (a: number, b: number) => number;
    readonly formmetadata_genderFromPid: (a: number, b: number) => number;
    readonly formmetadata_getBaseStat: (a: number, b: number) => number;
    readonly formmetadata_getMegaBaseForm: (a: number) => number;
    readonly formmetadata_get_base_stats: (a: number) => number;
    readonly formmetadata_hasDataForSource: (a: number, b: number) => number;
    readonly formmetadata_hidden_ability: (a: number) => number;
    readonly formmetadata_introduced_gen: (a: number) => number;
    readonly formmetadata_isEvolutionOf: (a: number, b: number) => number;
    readonly formmetadata_levelUpLearnset: (a: number, b: number, c: number) => void;
    readonly formmetadata_mega_evolutions: (a: number, b: number) => void;
    readonly formmetadata_regional: (a: number, b: number) => void;
    readonly formmetadata_sprite: (a: number, b: number) => void;
    readonly formmetadata_sprite_coords: (a: number, b: number) => void;
    readonly formmetadata_type1WithSource: (a: number, b: number) => number;
    readonly formmetadata_type2WithSource: (a: number, b: number) => number;
    readonly formmetadata_type_1: (a: number) => number;
    readonly formmetadata_type_1_index: (a: number) => number;
    readonly formmetadata_type_2: (a: number) => number;
    readonly formmetadata_type_2_index: (a: number) => number;
    readonly getAllAbilities: (a: number) => void;
    readonly getAllBalls: (a: number) => void;
    readonly getAllItems: (a: number) => void;
    readonly getAllItemsGen1: (a: number) => void;
    readonly getAllItemsGen2: (a: number) => void;
    readonly getAllItemsGen3: (a: number) => void;
    readonly item_fromIndex: (a: number) => number;
    readonly item_getMetadata: (a: number) => number;
    readonly item_name: (a: number, b: number) => void;
    readonly itemgen1_fromIndex: (a: number) => number;
    readonly itemgen1_fromModern: (a: number) => number;
    readonly itemgen1_name: (a: number, b: number) => void;
    readonly itemgen1_toModern: (a: number) => number;
    readonly itemgen2_fromModern: (a: number) => number;
    readonly itemgen2_name: (a: number, b: number) => void;
    readonly itemgen2_toModern: (a: number) => number;
    readonly itemgen3_fromIndex: (a: number) => number;
    readonly itemgen3_fromModern: (a: number) => number;
    readonly itemgen3_name: (a: number, b: number) => void;
    readonly itemgen3_toModern: (a: number) => number;
    readonly itemmetadatapastgen_name: (a: number, b: number) => void;
    readonly itemmetadatapastgen_toModern: (a: number) => number;
    readonly itemradicalred_fromIndex: (a: number) => number;
    readonly itemradicalred_fromModern: (a: number) => number;
    readonly itemradicalred_name: (a: number, b: number) => void;
    readonly itemradicalred_toModern: (a: number) => number;
    readonly itemunbound_fromIndex: (a: number) => number;
    readonly itemunbound_fromModern: (a: number) => number;
    readonly itemunbound_name: (a: number, b: number) => void;
    readonly itemunbound_toModern: (a: number) => number;
    readonly lookup_speciesName: (a: number, b: number, c: number) => void;
    readonly metadataReaderFor: (a: number, b: number, c: number) => number;
    readonly metadatasources_display: (a: number, b: number) => void;
    readonly metadatasources_getOriginMark: (a: number) => number;
    readonly metadatasources_supportedGameOrigins: (a: number, b: number, c: number) => void;
    readonly metadatasources_supportsForm: (a: number, b: number, c: number) => number;
    readonly metadatatablereader_baseStats: (a: number) => number;
    readonly metadatatablereader_source_name: (a: number, b: number) => void;
    readonly metadatatablereader_type1: (a: number) => number;
    readonly metadatatablereader_type2: (a: number) => number;
    readonly moveslots_indices: (a: number, b: number) => void;
    readonly moveslots_pp: (a: number, b: number) => void;
    readonly moveslots_pp_ups: (a: number, b: number) => void;
    readonly moveslots_set_indices: (a: number, b: number, c: number) => void;
    readonly moveslots_set_pp: (a: number, b: number, c: number) => void;
    readonly moveslots_set_pp_ups: (a: number, b: number, c: number) => void;
    readonly natdexindex_index: (a: number) => number;
    readonly natdexindex_new_js: (a: number, b: number) => void;
    readonly natureindex_copy: (a: number) => number;
    readonly natureindex_equals: (a: number, b: number) => number;
    readonly natureindex_index: (a: number) => number;
    readonly natureindex_multiplierFor: (a: number, b: number) => number;
    readonly natureindex_name: (a: number, b: number) => void;
    readonly natureindex_newFromPid: (a: number) => number;
    readonly natureindex_new_js: (a: number) => number;
    readonly natureindex_stats: (a: number) => number;
    readonly natureindex_summary: (a: number, b: number) => void;
    readonly speciesandform_getMetadata: (a: number) => number;
    readonly speciesandform_getSpeciesMetadata: (a: number) => number;
    readonly speciesandform_get_forme_index_js: (a: number) => number;
    readonly speciesandform_new_js: (a: number, b: number, c: number) => void;
    readonly speciesandform_tryNew: (a: number, b: number) => number;
    readonly speciesmetadata_calculateLevel: (a: number, b: number) => number;
    readonly speciesmetadata_forms: (a: number, b: number) => void;
    readonly speciesmetadata_level_up_type: (a: number, b: number) => void;
    readonly speciesmetadata_national_dex: (a: number) => number;
    readonly stats_abbrLower: (a: number, b: number) => void;
    readonly stats_fromAbbr: (a: number, b: number) => number;
    readonly __wbg_get_itemmetadata_id: (a: number) => number;
    readonly __wbg_set_itemmetadata_id: (a: number, b: number) => void;
    readonly __wbg_item_free: (a: number, b: number) => void;
    readonly __wbg_itemgen1_free: (a: number, b: number) => void;
    readonly __wbg_itemgen2_free: (a: number, b: number) => void;
    readonly __wbg_itemgen3_free: (a: number, b: number) => void;
    readonly __wbg_itemradicalred_free: (a: number, b: number) => void;
    readonly __wbg_itemunbound_free: (a: number, b: number) => void;
    readonly __wbg_metadatasources_free: (a: number, b: number) => void;
    readonly __wbg_natdexindex_free: (a: number, b: number) => void;
    readonly __wbg_stats_free: (a: number, b: number) => void;
    readonly itemgen2_fromIndex: (a: number) => number;
    readonly __wbg_speciesmetadata_free: (a: number, b: number) => void;
    readonly itemunbound_index: (a: number) => number;
    readonly itemradicalred_index: (a: number) => number;
    readonly itemgen1_index: (a: number) => number;
    readonly itemgen2_index: (a: number) => number;
    readonly itemgen3_index: (a: number) => number;
    readonly item_index: (a: number) => number;
    readonly speciesandform_get_ndex_js: (a: number) => number;
    readonly __wbg_itemmetadata_free: (a: number, b: number) => void;
    readonly itemunbound_equals: (a: number, b: number) => number;
    readonly itemradicalred_equals: (a: number, b: number) => number;
    readonly itemgen1_equals: (a: number, b: number) => number;
    readonly itemgen2_equals: (a: number, b: number) => number;
    readonly itemgen3_equals: (a: number, b: number) => number;
    readonly item_equals: (a: number, b: number) => number;
    readonly itemmetadata_name: (a: number, b: number) => void;
    readonly __wbg_conteststats_free: (a: number, b: number) => void;
    readonly __wbg_geolocation_free: (a: number, b: number) => void;
    readonly __wbg_geolocations_free: (a: number, b: number) => void;
    readonly __wbg_get_conteststats_beauty: (a: number) => number;
    readonly __wbg_get_conteststats_cool: (a: number) => number;
    readonly __wbg_get_conteststats_cute: (a: number) => number;
    readonly __wbg_get_conteststats_sheen: (a: number) => number;
    readonly __wbg_get_conteststats_smart: (a: number) => number;
    readonly __wbg_get_conteststats_tough: (a: number) => number;
    readonly __wbg_get_geolocations_0: (a: number) => number;
    readonly __wbg_get_geolocations_1: (a: number) => number;
    readonly __wbg_get_geolocations_2: (a: number) => number;
    readonly __wbg_get_geolocations_3: (a: number) => number;
    readonly __wbg_get_geolocations_4: (a: number) => number;
    readonly __wbg_get_hypertraining_atk: (a: number) => number;
    readonly __wbg_get_hypertraining_def: (a: number) => number;
    readonly __wbg_get_hypertraining_hp: (a: number) => number;
    readonly __wbg_get_hypertraining_spa: (a: number) => number;
    readonly __wbg_get_hypertraining_spd: (a: number) => number;
    readonly __wbg_get_hypertraining_spe: (a: number) => number;
    readonly __wbg_get_markingssixshapescolors_circle: (a: number) => number;
    readonly __wbg_get_markingssixshapescolors_diamond: (a: number) => number;
    readonly __wbg_get_markingssixshapescolors_heart: (a: number) => number;
    readonly __wbg_get_markingssixshapescolors_square: (a: number) => number;
    readonly __wbg_get_markingssixshapescolors_star: (a: number) => number;
    readonly __wbg_get_markingssixshapescolors_triangle: (a: number) => number;
    readonly __wbg_get_stats16le_atk: (a: number) => number;
    readonly __wbg_get_stats16le_def: (a: number) => number;
    readonly __wbg_get_stats16le_hp: (a: number) => number;
    readonly __wbg_get_stats16le_spa: (a: number) => number;
    readonly __wbg_get_stats16le_spd: (a: number) => number;
    readonly __wbg_get_stats16le_spe: (a: number) => number;
    readonly __wbg_get_trainerdata_affection: (a: number) => number;
    readonly __wbg_get_trainerdata_friendship: (a: number) => number;
    readonly __wbg_get_trainerdata_gender: (a: number) => number;
    readonly __wbg_get_trainerdata_language: (a: number) => number;
    readonly __wbg_get_trainerdata_memory: (a: number) => number;
    readonly __wbg_get_trainerdata_origin_game: (a: number) => number;
    readonly __wbg_get_trainermemory_feeling: (a: number) => number;
    readonly __wbg_get_trainermemory_intensity: (a: number) => number;
    readonly __wbg_languages_free: (a: number, b: number) => void;
    readonly __wbg_origingamewithdata_free: (a: number, b: number) => void;
    readonly __wbg_pokedate_free: (a: number, b: number) => void;
    readonly __wbg_set_conteststats_beauty: (a: number, b: number) => void;
    readonly __wbg_set_conteststats_cool: (a: number, b: number) => void;
    readonly __wbg_set_conteststats_cute: (a: number, b: number) => void;
    readonly __wbg_set_conteststats_sheen: (a: number, b: number) => void;
    readonly __wbg_set_conteststats_smart: (a: number, b: number) => void;
    readonly __wbg_set_conteststats_tough: (a: number, b: number) => void;
    readonly __wbg_set_geolocations_0: (a: number, b: number) => void;
    readonly __wbg_set_geolocations_1: (a: number, b: number) => void;
    readonly __wbg_set_geolocations_2: (a: number, b: number) => void;
    readonly __wbg_set_geolocations_3: (a: number, b: number) => void;
    readonly __wbg_set_geolocations_4: (a: number, b: number) => void;
    readonly __wbg_set_hypertraining_atk: (a: number, b: number) => void;
    readonly __wbg_set_hypertraining_def: (a: number, b: number) => void;
    readonly __wbg_set_hypertraining_hp: (a: number, b: number) => void;
    readonly __wbg_set_hypertraining_spa: (a: number, b: number) => void;
    readonly __wbg_set_hypertraining_spd: (a: number, b: number) => void;
    readonly __wbg_set_hypertraining_spe: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapescolors_circle: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapescolors_diamond: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapescolors_heart: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapescolors_square: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapescolors_star: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapescolors_triangle: (a: number, b: number) => void;
    readonly __wbg_set_stats16le_atk: (a: number, b: number) => void;
    readonly __wbg_set_stats16le_def: (a: number, b: number) => void;
    readonly __wbg_set_stats16le_hp: (a: number, b: number) => void;
    readonly __wbg_set_stats16le_spa: (a: number, b: number) => void;
    readonly __wbg_set_stats16le_spd: (a: number, b: number) => void;
    readonly __wbg_set_stats16le_spe: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_affection: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_friendship: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_gender: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_language: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_memory: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_origin_game: (a: number, b: number) => void;
    readonly __wbg_set_trainermemory_feeling: (a: number, b: number) => void;
    readonly __wbg_set_trainermemory_intensity: (a: number, b: number) => void;
    readonly __wbg_shinyleaves_free: (a: number, b: number) => void;
    readonly __wbg_stats16le_free: (a: number, b: number) => void;
    readonly __wbg_statspresplit_free: (a: number, b: number) => void;
    readonly __wbg_trainerdata_free: (a: number, b: number) => void;
    readonly __wbg_trainermemory_free: (a: number, b: number) => void;
    readonly conteststats_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
    readonly genderFromBool: (a: number) => number;
    readonly genderFromInt: (a: number) => number;
    readonly genderToBool: (a: number) => number;
    readonly genderToInt: (a: number) => number;
    readonly geolocation_new: (a: number, b: number) => number;
    readonly geolocations_new: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly getPluginColor: (a: number, b: number, c: number) => void;
    readonly hypertraining_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
    readonly languages_fromByteOrNone: (a: number) => number;
    readonly languages_fromByteOrNoneGcn: (a: number) => number;
    readonly languages_stringFromByte: (a: number, b: number) => void;
    readonly languages_stringFromByteGcn: (a: number, b: number) => void;
    readonly languages_toGcnByte: (a: number) => number;
    readonly markingssixshapescolors_from_strings_optional: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => number;
    readonly origingames_allMetadata: (a: number) => void;
    readonly origingames_color: (a: number, b: number) => void;
    readonly origingames_gameName: (a: number, b: number) => void;
    readonly origingames_gameSetting: (a: number) => number;
    readonly origingames_gameSettingName: (a: number, b: number) => void;
    readonly origingames_gamecubeIndex: (a: number) => number;
    readonly origingames_generation: (a: number) => number;
    readonly origingames_getMetadata: (a: number) => number;
    readonly origingames_isBdsp: (a: number) => number;
    readonly origingames_isGameboy: (a: number) => number;
    readonly origingames_isGba: (a: number) => number;
    readonly origingames_isLetsGo: (a: number) => number;
    readonly origingames_isScarletViolet: (a: number) => number;
    readonly origingames_logoPath: (a: number, b: number) => void;
    readonly origingames_markPath: (a: number, b: number) => void;
    readonly origingamewithdata_game: (a: number) => number;
    readonly origingamewithdata_generation: (a: number) => number;
    readonly origingamewithdata_mark: (a: number, b: number) => void;
    readonly origingamewithdata_name: (a: number, b: number) => void;
    readonly pkmtypes_toString: (a: number, b: number) => void;
    readonly pkmtypes_tryFromString: (a: number, b: number) => number;
    readonly pokedate_new: (a: number, b: number, c: number) => number;
    readonly pokedate_set_year: (a: number, b: number) => void;
    readonly pokedate_year: (a: number) => number;
    readonly shinyleaves_clone: (a: number) => number;
    readonly shinyleaves_count: (a: number) => number;
    readonly shinyleaves_fromByte: (a: number) => number;
    readonly shinyleaves_hasCrown: (a: number) => number;
    readonly shinyleaves_hasFifth: (a: number) => number;
    readonly shinyleaves_hasFirst: (a: number) => number;
    readonly shinyleaves_hasFourth: (a: number) => number;
    readonly shinyleaves_hasSecond: (a: number) => number;
    readonly shinyleaves_hasThird: (a: number) => number;
    readonly shinyleaves_new_empty: () => number;
    readonly shinyleaves_toByte: (a: number) => number;
    readonly stats16le_new_from_js: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
    readonly stats16le_rust_type_name: (a: number) => number;
    readonly stats8_rust_type_name: (a: number) => number;
    readonly statspresplit_new: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly trainerdata_name: (a: number, b: number) => void;
    readonly trainerdata_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
    readonly trainermemory_new: (a: number, b: number, c: number, d: number) => number;
    readonly __wbg_get_geolocation_country: (a: number) => number;
    readonly __wbg_get_geolocation_region: (a: number) => number;
    readonly __wbg_get_markingssixshapes_circle: (a: number) => number;
    readonly __wbg_get_markingssixshapes_diamond: (a: number) => number;
    readonly __wbg_get_markingssixshapes_heart: (a: number) => number;
    readonly __wbg_get_markingssixshapes_square: (a: number) => number;
    readonly __wbg_get_markingssixshapes_star: (a: number) => number;
    readonly __wbg_get_markingssixshapes_triangle: (a: number) => number;
    readonly __wbg_get_pokedate_day: (a: number) => number;
    readonly __wbg_get_pokedate_month: (a: number) => number;
    readonly __wbg_get_stats8_atk: (a: number) => number;
    readonly __wbg_get_stats8_def: (a: number) => number;
    readonly __wbg_get_stats8_hp: (a: number) => number;
    readonly __wbg_get_stats8_spa: (a: number) => number;
    readonly __wbg_get_stats8_spd: (a: number) => number;
    readonly __wbg_get_stats8_spe: (a: number) => number;
    readonly __wbg_get_statspresplit_atk: (a: number) => number;
    readonly __wbg_get_statspresplit_def: (a: number) => number;
    readonly __wbg_get_statspresplit_hp: (a: number) => number;
    readonly __wbg_get_statspresplit_spc: (a: number) => number;
    readonly __wbg_get_statspresplit_spe: (a: number) => number;
    readonly __wbg_get_trainerdata_id: (a: number) => number;
    readonly __wbg_get_trainerdata_secret_id: (a: number) => number;
    readonly __wbg_get_trainermemory_memory: (a: number) => number;
    readonly __wbg_get_trainermemory_textVariables: (a: number) => number;
    readonly __wbg_set_markingssixshapes_circle: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapes_diamond: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapes_heart: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapes_square: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapes_star: (a: number, b: number) => void;
    readonly __wbg_set_markingssixshapes_triangle: (a: number, b: number) => void;
    readonly __wbg_set_geolocation_country: (a: number, b: number) => void;
    readonly __wbg_set_geolocation_region: (a: number, b: number) => void;
    readonly __wbg_set_pokedate_day: (a: number, b: number) => void;
    readonly __wbg_set_pokedate_month: (a: number, b: number) => void;
    readonly __wbg_set_stats8_atk: (a: number, b: number) => void;
    readonly __wbg_set_stats8_def: (a: number, b: number) => void;
    readonly __wbg_set_stats8_hp: (a: number, b: number) => void;
    readonly __wbg_set_stats8_spa: (a: number, b: number) => void;
    readonly __wbg_set_stats8_spd: (a: number, b: number) => void;
    readonly __wbg_set_stats8_spe: (a: number, b: number) => void;
    readonly __wbg_set_statspresplit_atk: (a: number, b: number) => void;
    readonly __wbg_set_statspresplit_def: (a: number, b: number) => void;
    readonly __wbg_set_statspresplit_hp: (a: number, b: number) => void;
    readonly __wbg_set_statspresplit_spc: (a: number, b: number) => void;
    readonly __wbg_set_statspresplit_spe: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_id: (a: number, b: number) => void;
    readonly __wbg_set_trainerdata_secret_id: (a: number, b: number) => void;
    readonly __wbg_set_trainermemory_memory: (a: number, b: number) => void;
    readonly __wbg_set_trainermemory_textVariables: (a: number, b: number) => void;
    readonly __wbg_origingames_free: (a: number, b: number) => void;
    readonly __wbg_pkmtypes_free: (a: number, b: number) => void;
    readonly __wbg_markingssixshapescolors_free: (a: number, b: number) => void;
    readonly __wbg_markingssixshapes_free: (a: number, b: number) => void;
    readonly __wbg_hypertraining_free: (a: number, b: number) => void;
    readonly stats8_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
    readonly __wbg_stats8_free: (a: number, b: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number) => void;
    readonly __wbindgen_export4: (a: number, b: number, c: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
