interface MonData {
  dexNum: number;
  formeNum: number;
  format: string;
  isFemale?: boolean;
  isShiny?: boolean;
}

export interface SpritePlugin {
  name: string;
  id: string;
  version: string;
  api_version: number;
  getMonSpritePath: (params: MonData) => string | null;
}
