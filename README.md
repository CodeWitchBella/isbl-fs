# @isbl/fs

Wraps `node:fs/promises` and sync functions from `node:fs` to add proper async
error stack.

Install

```sh
yarn add @isbl/fs
```

If you are using typescript then you should also install type definitions

```sh
yarn add -D @types/node
```

## Usage

Same as original wrapped functions, also includes typescript definitions.
Note that this module is ESM-only so it can't be imported using `require`.

```ts
import fs from '@isbl/fs'
await fs.readFile(...)

// or

import { readFile } from '@isbl/fs'
await readFile(...)
```

## Available functions

See start of `index.js` file. It lists all the exports.
