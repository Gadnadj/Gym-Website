module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  semi: true, // Assurez-vous que Prettier ajoute des points-virgules
  singleQuote: true, // Utilisation de guillemets simples
  trailingComma: "all", // Ajouter des virgules de fin dans les objets et tableaux
  tabWidth: 2, // Définir la largeur d'indentation (par exemple, 2 espaces)
  useTabs: false, // Utiliser des espaces au lieu des tabulations
};
