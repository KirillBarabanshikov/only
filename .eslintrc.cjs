// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".json"],
  },
  plugins: ["@typescript-eslint", "react", "simple-import-sort"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "dist/**/*",
    "node_modules/**/*",
    "webpack.config.ts",
    ".eslintrc.cjs",
    "**/*.json",
  ],
};
