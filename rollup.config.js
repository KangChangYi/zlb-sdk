import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "umd",
    name: "ybj-zlb-sdk",
    sourceMap: true,
  },
  plugins: [
    typescript(),
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
  ],
};
