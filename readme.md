[![npm version](https://badge.fury.io/js/vue-tslint.svg)](https://badge.fury.io/js/vue-tslint)
[![downloads](https://img.shields.io/npm/dm/vue-tslint.svg)](https://www.npmjs.com/package/vue-tslint)

# vue-tslint

A cli tool that lint your Vue SFC files with TSLint

## Install

```bash
npm i -D vue-tslint
```

## Usage

Please use with TypeScript version > 3.0.0

```txt
Usage: vue-tslint [options]

Options:
  -c, --config [config]    TSLint configuration file. Default: project root
  -p, --project [project]  Folder that contain your tsconfig.json file. Default: project root
  --fix                    Fixes linting errors for select rules (this may overwrite linted files).
  -e, --exclude <exclude>  An array of glob patterns to exclude matches
  -g, --gitignore          Respect ignore patterns in .gitignore files that apply to the globbed files
  -v, --version            output the version number
  -h, --help               output usage information
```

### Example

```bash
vue-tslint -p vue-project -c tslint.json --fix
```

## Background

Current TSLint can't check .vue file directly. Luckily, there are some solutions.

- If you use Webpack, ts-loader and fork-ts-checker-webpack-plugin can help you. In this way, you can keep compiling and linting you ts and vue file in webpack dev mode.

- If you use VSCode, vscode-tslint-vue extension can help you.

- The vue-cli 3 has a [TypeScript plugin](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-typescript#readme), it provide the lint command to lint your TypeScript code. But the plugin can't be used alone, this cli tool is created based on the plugin's implementation

- Besides, there is a new linter [Wotan](https://github.com/fimbullinter/wotan) can lint ts code  in .vue file directly.

Thus, before use vue-tslint, make sure you really need it.

## lisence

MIT
