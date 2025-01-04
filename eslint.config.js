import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier"; // Configuration Prettier
import prettier from "eslint-plugin-prettier"; // Plugin Prettier
import typescript from "@typescript-eslint/eslint-plugin"; // Plugin TypeScript
import typescriptParser from "@typescript-eslint/parser"; // Parser TypeScript

export default {
  parser: typescriptParser, // Utilisation du parser TypeScript
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module", // Pour utiliser les imports ES6
  },
  extends: [
    js.configs.recommended, // Configuration ESLint de base
    "plugin:@typescript-eslint/recommended", // Recommandations TypeScript
    "plugin:react-hooks/recommended", // Recommandations React Hooks
    "plugin:react-refresh/recommended", // Recommandations React Refresh
    "plugin:prettier/recommended", // Active la règle Prettier
    eslintConfigPrettier, // Désactive les règles de formatage d'ESLint
  ],
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    prettier, // Ajout du plugin Prettier
    "@typescript-eslint": typescript,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-object-type": [
      "error",
      { allowObjectTypes: true },
    ],
    "semi": ["error", "always"], // Exige des points-virgules
    "prettier/prettier": ["error"], // Applique les règles de Prettier dans ESLint
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  ignorePatterns: ["dist"], // Ignorer les fichiers générés
};
