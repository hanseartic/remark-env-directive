/** @type {import('unified').Plugin<[], TextDirective, Text>} */
export default function remarkEnvVarDirective(): (tree: import('mdast-util-directive').Root) => void;
export type Text = import('mdast').Text
export type TextDirective = import('mdast-util-directive').TextDirective;
