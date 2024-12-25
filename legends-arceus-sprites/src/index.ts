import { NationalDex, PokemonData } from "pokemon-species-data";

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

const legendsDex = [
  25, 26, 35, 36, 37, 38, 41, 42, 46, 47, 54, 55, 58, 59, 63, 64, 65, 66, 67,
  68, 72, 73, 74, 75, 76, 77, 78, 81, 82, 92, 93, 94, 95, 100, 101, 108, 111,
  112, 113, 114, 122, 123, 125, 126, 129, 130, 133, 134, 135, 136, 137, 143,
  155, 156, 157, 169, 172, 173, 175, 176, 185, 190, 193, 196, 197, 198, 200,
  201, 207, 208, 211, 212, 214, 215, 216, 217, 220, 221, 223, 224, 226, 233,
  234, 239, 240, 242, 265, 266, 267, 268, 269, 280, 281, 282, 299, 339, 340,
  315, 355, 356, 358, 361, 362, 363, 364, 365, 387, 388, 389, 390, 391, 392,
  393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407,
  408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422,
  423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437,
  438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452,
  453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467,
  468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482,
  483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 501, 502, 503, 548,
  549, 550, 570, 571, 627, 628, 641, 642, 645, 700, 704, 705, 706, 712, 713,
  722, 723, 724, 899, 900, 901, 902, 903, 904, 905,
];

const allFormesAllowed = [
  NationalDex.Vulpix,
  NationalDex.Ninetales,
  NationalDex.Sneasel,
];

export const plugin: SpritePlugin = {
  pluginName: "Legends Arceus Sprites",
  pluginID: "legends-arceus-sprites",
  getMonSpritePath: (params: MonData) => {
    const { dexNum, formeNum, format, isShiny } = params;

    if (format !== "PA8") return null;
    if (!legendsDex.includes(dexNum)) {
      return null;
    }

    const speciesData = PokemonData[dexNum];
    if (!speciesData) return null;

    const formeData = speciesData.formes[formeNum];
    if (!formeData || formeData.gen > 8) return null;

    if (allFormesAllowed.includes(dexNum)) {
      return `assets/${
        isShiny ? "shiny/" : ""
      }${formeData.formeName.toLowerCase()}.gif`;
    }

    if (formeData.regional !== null && formeData.regional !== "Hisui") {
      return null;
    }

    if (
      speciesData.formes.some(
        (otherForme) => otherForme.regional === "Hisui"
      ) &&
      formeData.regional !== "Hisui"
    ) {
      return null;
    }

    return `assets/${isShiny ? "shiny/" : ""}${formeData.sprite}.png`;
  },
};
