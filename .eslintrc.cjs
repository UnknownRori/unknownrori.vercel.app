module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue"],
  rules: {
    semi: [2, "always"],
  },
  overrides: [
    {
      files: ["./**/*.*"],
      rules: {
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
    {
      files: ["pages/**/*.vue", "components/**/*.vue", "./app.vue"],
      rules: {
        "vue/no-multiple-template-root": "off",
      },
    },
    {
      files: ["pages/**/*.vue", "layouts/**/*.vue", "./error.vue"], // Apply to Vue files in the "pages" directory
      rules: {
        "vue/multi-word-component-names": "off", // Disable the rule
      },
    },
  ],
};
