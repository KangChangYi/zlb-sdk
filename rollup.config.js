import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],

  plugins: [
    typescript(),
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
  ],
};
