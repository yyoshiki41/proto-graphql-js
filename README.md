# ProtoNexus
[![CI](https://github.com/proto-graphql/proto-nexus/workflows/CI/badge.svg)](https://github.com/proto-graphql/proto-nexus/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/proto-graphql/proto-nexus/badge.svg?branch=main)](https://coveralls.io/github/proto-graphql/proto-nexus?branch=main)
[![GitHub](https://img.shields.io/github/license/proto-graphql/proto-nexus)](./LICENSE)

Protobuf-First GraphQL Schemas with [GraphQL Nexus](https://nexusjs.org/)

## Packages

| package | description | version |
| ------- | ----------- | ------- |
| [protoc-gen-nexus](./packages/protoc-gen-nexus) | `protoc` plugin for generating Nexus type definitions | [![npm version](https://badge.fury.io/js/protoc-gen-nexus.svg)](https://badge.fury.io/js/protoc-gen-nexus) |
| [@proto-nexus/google-protobuf](./packages/@proto-nexus/google-protobuf) | Runtime library | [![npm version](https://badge.fury.io/js/%40proto-nexus%2Fgoogle-protobuf.svg)](https://badge.fury.io/js/%40proto-nexus%2Fgoogle-protobuf) |
| [@proto-nexus/protobufjs](./packages/@proto-nexus/protobufjs) | Runtime library | [![npm version](https://badge.fury.io/js/%40proto-nexus%2Fprotobufjs.svg)](https://badge.fury.io/js/%40proto-nexus%2Fprotobufjs) |

## Installation

```sh
yarn add nexus graphql  # required as a peer dependency
yarn add --dev protoc-gen-nexus

# if you generate code with `protoc --js_out`
yarn add @proto-nexus/google-protobuf \
  google-protobuf @types/google-protobuf  # required as a peer dependency

# if you generate code with protobufjs
yarn add @proto-nexus/protobufjs \
  protobufjs  # required as a peer dependency
```

## Usage
### Generate GraphQL Types from Protobuf IDL

To generate Nexus type definitions from `.proto` files, you need to invoke following command:

```sh
protoc \
  -I ./node_modules/protoc-gen-nexus/include \
  -I <YOUR_PROTO_PATH> \
  --plugin=protoc-gen-nexus=`yarn bin protoc-gen-nexus` \
  --nexus_out=<DIST_DIR> \
  --nexus_opt="import_prefix=<YOUR_PROTO_PATH_OR_PACKAGE>" \
  path/to/file.proto
```

#### with protobufjs

proto-nexus supports protobufjs with static code generated by [protobufjs CLI](https://github.com/protobufjs/protobuf.js#command-line).

```sh
# `target`, `wrap` and `force-message` options are required.
# An output file name must be `index.js`.
pbjs \
  --target static-module \
  --wrap commonjs \
  --force-message \
  --path <YOUR_PROTO_PATH> \
  --out "<DIST_DIR>/index.js" \
  path/to/package/*.proto

# An output file name must be `index.d.ts`
pbts --out "<DIST_DIR>/index.d.ts" "<DIST_DIR>/index.js"
```

And `protoc-gen-nexus` requires `use_protobufjs` option.

```sh
  --nexus_opt="import_prefix=<YOUR_PROTO_PATH_OR_PACKAGE>,use_protobufjs" \
```


### Make schema
See also [Best Practices - GraphQL Nexus](https://nexusjs.org/docs/guides/best-practices#consistent-file-structure-for-graphql-type-imports).

```typescript
// src/schema/types/index.ts

// Export generated types
export * from "./path/to/generated_types/...";
export * from "./path/to/generated_types/...";
// ...
```

When `makeSchema`, `abstractTypeStrategies` must have `isTypeOf: true`.

```typescript
import { makeSchema } from "nexus";
import * as allTypes from "./schema/types";

export const schema = makeSchema({
  types: alltypes,
  output: { /* ... */ },
  features: {
    abstractTypeStrategies: {
      isTypeOf: true,
    },
  },
})
```

## Author

- [Masayuki Izumi (@izumin5210)](https://github.com/izumin5210)
