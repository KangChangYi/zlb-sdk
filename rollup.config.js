import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "src/modules/index.ts",
  output: {
    file: "./dist/index.js",
    format: "cjs",
    name: "ybj-zlb-sdk",
    sourceMap: true,
  },
  plugins: [
    typescript(),
    terser(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
