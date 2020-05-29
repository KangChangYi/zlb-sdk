import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";

export default {
  input: "src/main.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    name: "ybj-zlb-sdk",
    exports: "default",
  },
  plugins: [
    terser(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
