module.exports = {
  plugins: ["@typescript-eslint", "import", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./apps/web/web/tsconfig.json",
    ecmaVersion: "latest",
    allowDefaultProject: true,
    projectService: true,
    tsconfigRootDir: __dirname,
    projectFolderIgnoreList: [
      "**dist**",
    ],
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "comma-dangle": ["error", "only-multiline"],
    "arrow-parens": ["error", "as-needed"],
    "object-curly-spacing": ["error", "always"],
    "no-restricted-imports": ["error", { patterns: ["./*", "../*"] }],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: [],
        alphabetize: { order: "asc", caseInsensitive: false },
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "react-hooks/exhaustive-deps": "error",
  },
}
