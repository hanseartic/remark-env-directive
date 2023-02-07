/**
 * @typedef {import('mdast-util-directive').TextDirective} TextDirective
 * @typedef {import('mdast').Text} Text
 **/

import {visit} from 'unist-util-visit';

/** @type {import('unified').Plugin<[], TextDirective, Text>} */
export default function remarkEnvVarDirective() {
  return (tree) => {
    visit (tree, ['textDirective'], (node) => {
      if (node.name !== 'env') return;
      if (node.children.length === 0) {
        console.error('No content');
        return;
      }
      node.value = process.env[node.children[0].value ?? ''] ?? '';
      node.type = 'text';
      node.children = [];
    });
  }
}
