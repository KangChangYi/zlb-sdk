import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import typescript from '@rollup/plugin-typescript';

export default {
  input: "src/main.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    name: "ybj-zlb-sdk",
    exports: "default",
    sourceMap: true,
  },
  plugins: [
    terser(),
    babel({
      exclude: "node_modules/**",
    }),
    typescript(),
  ],
};
