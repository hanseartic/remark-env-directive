# env-var remark directive plugin

This remark-plugin allows to resolve an environment variable from a given value into markdown files.

## Installation
### npm
```shell
npm i @hanseartic/remark-env-directive
```
### yarn
```shell
yarn add @hanseartic/remark-env-directive
```

### Pre-Conditions
This plugin needs the [`remark-directive`](https://github.com/remarkjs/remark-directive) plugin to generally enable directives.

### Usage
Given a markdown file `example.md`:
```markdown
# Example with environment variable

:env[VALUE_IN_ENV_VAR]

```

and a processing module `example.js`:
```javascript
import {read} from 'to-vfile'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
// necessary to enable directives in general
import remarkDirective from 'remark-directive'
// the env-var directive itself
import envDirective from '@hanseartic/remark-env-directive'

main()

async function main() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(envDirective)
    .process(await read('example.md'))

  console.log(String(file))
}
```

Following result could be rendered by `VALUE_IN_ENV_VAR="Hi from the environment" node example`:

```markdown
# Example with environment variable

Hi from the environment

```
