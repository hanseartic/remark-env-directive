/**
 * @typedef {import('mdast-util-directive').TextDirective} TextDirective
 * @typedef {import('mdast').Text} Text
 **/
import remarkEnvVarDirective from './lib/index.js';

/** @type {import('unified').Plugin<[], TextDirective, Text>} */
export default remarkEnvVarDirective;
