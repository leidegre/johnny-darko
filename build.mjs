import { writeFileSync } from "node:fs";

import { palette } from "./palette.mjs";

import * as go from "./lang/go.mjs";

const theme = {
  name: "Johnny Bright",
  semanticHighlighting: true,
  colors: {
    "editor.background": palette.background,
    "editor.foreground": palette.foreground,
  },
  semanticTokenColors: {
    macro: palette.constant,
    namespace: palette.other,
    type: palette.typename,
    templateType: palette.typename,
    parameter: palette.parameter,
    typeParameter: palette.parameter,
    enum: palette.typename,
    class: palette.typename,
    struct: palette.typename,
    interface: palette.typename,
    recordClass: palette.typename,
    recordStruct: palette.typename,
    delegate: palette.typename,
    "function.defaultLibrary": palette.builtin,
  },
  tokenColors: [
    // Parameter
    {
      scope: "variable.parameter.preprocessor",
      settings: {
        foreground: palette.parameter,
      },
    },
    // Type (builtin and custom)
    {
      scope: [
        "storage.type.primitive",
        "storage.modifier",
        "support.type.built-in",
      ],
      settings: {
        foreground: palette.builtin,
      },
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: palette.typename,
      },
    },
    // Preprocessor
    {
      scope: ["meta.preprocessor"], // applies to all preprocessor content
      settings: {
        foreground: "#aaaaaa",
      },
    },
    {
      scope: ["entity.name.function.preprocessor"],
      settings: {
        foreground: "#aa4433",
      },
    },
    {
      scope: ["keyword.control.directive"],
      settings: {
        foreground: "#aa7733",
      },
    },
    // Comment
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: palette.comment,
      },
    },
    // Punctuation
    {
      scope: [
        "constant.language.nullptr", // nullptr
        "constant.language.undefined", // undefined
        "entity.name.operator.type", // bool
        "keyword.control",
        "keyword.operator",
        "keyword.other",
        "meta.brace.round", // () JavaScript
        "punctuation",
        "storage.type.built-in.primitive", // C void
        "storage.type.enum",
        "storage.type.struct",
        "storage.type.template",
        "storage.type.union",
        "variable.language.this",
      ],
      settings: {
        foreground: palette.other,
      },
    },
    // Number
    {
      scope: ["constant.numeric", "constant.language"],
      settings: { foreground: palette.digit },
    },
    {
      scope: "keyword.other.unit.hexadecimal",
      settings: { foreground: "#006600" }, // slight touch
    },
    // String
    {
      scope: "string.quoted",
      settings: {
        foreground: palette.string,
      },
    },
    {
      scope: [
        "string.quoted constant.character.escape",
        "punctuation.definition.string.begin", // first "
        "punctuation.definition.string.end", // last "
      ],
      settings: {
        foreground: "#bb8800",
      },
    },
    // Enum definition
    {
      scope: "meta.enum.definition variable.other",
      settings: {
        foreground: palette.foreground,
      },
    },
    
    ...go.tokenColors,
  ],
};

writeFileSync(
  "themes/johnny-bright-color-theme.json",
  JSON.stringify(theme, undefined, 2),
);
