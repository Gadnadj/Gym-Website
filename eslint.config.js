import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier"; // Ajout du plugin Prettier
import eslintConfigPrettier from "eslint-config-prettier"; // Ajout de la config Prettier

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:prettier/recommended", // Active la règle Prettier
      eslintConfigPrettier, // Désactive les règles de formatage d'ESLint
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier, // Ajout du plugin Prettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
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
  },
);
