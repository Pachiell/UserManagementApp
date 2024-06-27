module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "sonarjs"],
  rules: {
    "no-console": ["error"],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: ["function-declaration", "arrow-function"] },
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  overrides: [
    {
      // @see https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
      files: ["src/**/*slice.ts"],
      rules: { "no-param-reassign": ["error", { props: false }] },
    },
    {
      // @see https://github.com/airbnb/javascript/pull/2591
      files: ["**/vite.config.ts", "**/vitest.config.ts"],
      rules: { "import/no-extraneous-dependencies": 0 },
    },
  ],
};
