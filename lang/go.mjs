import { palette } from "../palette.mjs";

// Issues
//
// The scope entity.name.type.go is slapped on everything inside a type block 
// or any type alias. It's not very consistent. Looks odd.
//
// const works better but the first ident has the variable.other.constant.go 
// scope. subsequent tokens have variable.other.go which is what I would expect
// from type blocks.
//
// The usage of these names doesn't seem to carry the scopes. I don't know if Go
// provides semantic colors but I would like it if it did.
//
// All this textmate scoping nonsense is just annoying because it often turns 
// out incorrect.

/** @type {TokenColor[]} */
export const tokenColors = [
  {
    scope: [
      "keyword.channel.go",
      "keyword.const.go",
      "keyword.control.go",
      "keyword.function.go",
      "keyword.interface.go",
      "keyword.map.go",
      "keyword.package.go",
      "keyword.struct.go",
      "keyword.type.go",
      "keyword.var.go",
    ],
    settings: {
      foreground: palette.other,
    },
  },
  {
    scope: [
      "entity.name.type.comparable.go", // spec has it as an builtin type idk 🤷
      "storage.type.boolean.go",
      "storage.type.byte",
      "storage.type.error.go",
      "storage.type.numeric.go",
      "storage.type.rune.go",
      "storage.type.string.go",
      "storage.type.uintptr.go",
    ],
    settings: {
      foreground: palette.builtin,
    },
  },
  {
    scope: [
      "constant.language.boolean.go",
      "constant.language.iota.go",
      "constant.numeric.decimal.go",
    ],
    settings: {
      foreground: palette.constant,
    },
  },
];
