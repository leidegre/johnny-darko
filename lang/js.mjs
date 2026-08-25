import { palette } from "../palette.mjs";

/** @type {TokenColor[]} */
export const tokenColors = [
  {
    scope: [
      "storage.type.js",
      "storage.type.function.js",
      "storage.type.class.js",
    ],
    settings: { foreground: palette.other },
  },
];
