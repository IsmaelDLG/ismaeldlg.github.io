import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, import: pluginImport },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // enforce unidirectional codebase:
            {
              target: "./src/features",
              from: "./src/app",
            },
            {
              target: [
                "./src/components",
                "./src/hooks",
                "./src/lib",
                "./src/types",
                "./src/utils",
              ],
              from: ["./src/features", "./src/app"],
            },
            // disables cross-feature imports:
            {
              target: "./src/features/auth",
              from: "./src/features",
              except: ["./auth"],
            },
            {
              target: "./src/features/comments",
              from: "./src/features",
              except: ["./comments"],
            },
            {
              target: "./src/features/discussions",
              from: "./src/features",
              except: ["./discussions"],
            },
            {
              target: "./src/features/teams",
              from: "./src/features",
              except: ["./teams"],
            },
            {
              target: "./src/features/users",
              from: "./src/features",
              except: ["./users"],
            },
            // More restrictions...
          ],
        },
      ],
    },
  },
  pluginReact.configs.flat.recommended,
]);
