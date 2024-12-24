interface MonData {
    dexNum: number;
    formeNum: number;
    format: string;
    isFemale?: boolean;
    isShiny?: boolean;
}
interface SpritePlugin {
    pluginName: string;
    pluginID: string;
    getMonSpritePath: (params: MonData) => string | null;
}
declare const plugin: SpritePlugin;

export { plugin };
