import { writeFileSync } from "node:fs";

const colors = {
  background: "#f9f4e7",
  foreground: "#242829",
  constant: "#912e1d",
  typename: "#11518d",
  digit: "#169258", // literal
  parameter: "#285c41", // tint like literal
  comment: "#8c8c8c",
  other: "#a99f84",
  keyword: "#be9913",
  builtin: "#3c99c8",
  string: "#a5731d",
};

const theme = {
  name: "Johnny Bright",
  semanticHighlighting: true,
  colors: {
    "editor.background": colors.background,
    "editor.foreground": colors.foreground,
  },
  semanticTokenColors: {
    macro: colors.constant,
    namespace: colors.other,
    type: colors.typename,
    templateType: colors.typename,
    parameter: colors.parameter,
    typeParameter: colors.parameter,
    enum: colors.typename,
    class: colors.typename,
    struct: colors.typename,
    interface: colors.typename,
    recordClass: colors.typename,
    recordStruct: colors.typename,
    delegate: colors.typename,
    "function.defaultLibrary": colors.builtin,
  },
  tokenColors: [
    // Parameter
    {
      scope: "variable.parameter.preprocessor",
      settings: {
        foreground: colors.parameter,
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
        foreground: colors.builtin,
      },
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: colors.typename,
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
        foreground: colors.comment,
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

        // Go
        "keyword.package",
        "keyword.struct",
        "keyword.type",
        "keyword.function",
      ],
      settings: {
        foreground: colors.other,
      },
    },
    // Number
    {
      scope: ["constant.numeric", "constant.language"],
      settings: { foreground: colors.digit },
    },
    {
      scope: "keyword.other.unit.hexadecimal",
      settings: { foreground: "#006600" }, // slight touch
    },
    // String
    {
      scope: "string.quoted",
      settings: {
        foreground: colors.string,
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
        foreground: colors.foreground,
      },
    },
  ],
};

writeFileSync(
  "themes/johnny-bright-color-theme.json",
  JSON.stringify(theme, undefined, 2),
);
