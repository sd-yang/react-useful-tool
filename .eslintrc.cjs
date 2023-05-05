module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    eqeqeq: 2,
    "no-alert": 2,
    "no-undef": 2,
    "no-use-before-define": 2,
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "react-hooks/exhaustive-deps": "off"
  },
  "globals": {
    "RequestInit": "readonly",
  }
};
