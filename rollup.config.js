import ascii from "rollup-plugin-ascii";
import node from "rollup-plugin-node-resolve";

export default {
  entry: 'index.js',
  format: 'cjs',
  dest: 'dist/topojson.js',
  plugins: [node(), ascii()]
};
