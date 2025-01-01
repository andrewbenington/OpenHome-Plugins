
from typing import TypedDict


class Forme(TypedDict):
  name: str
  formeName: str
  formeNumber: int
  isBaseForme: bool
  isMega: bool
  isGMax: bool
  isBattleOnly: bool
  alias: str
  types: list[str]
  genderRatio: dict
  baseStats: dict
  ability1: str
  ability2: str | None
  abilityH: str | None
  height: int
  weight: int
  evos: list[dict]
  prevo: dict | None
  eggGroups: list[str]
  gen: int
  regional: str | None
  subLegendary: bool
  restrictedLegendary: bool
  ultraBeast: bool
  paradox: bool
  mythical: bool
  cosmeticForme: bool
  sprite: str
  spriteIndex: tuple[int, int]

class Pokemon(TypedDict):
  name: str
  nationalDex: int
  formes: list[Forme]
  levelUpType: str
