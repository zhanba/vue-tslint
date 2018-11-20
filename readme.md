# vue-tslint

A cli tool that lint your Vue SFC files with TSLint

## install

```bash
npm i -D vue-tslint
```

## usage

Please use with TypeScript version > 3.0.0

```txt
Usage: vue-tslint [options]

Options:
  -v, --version            output the version number
  -c, --config [config]    tslint configuration file
  -p, --project [project]  tsconfig.json file
  --fix                    fixes linting errors for select rules (this may overwrite linted files)
  -e, --exclude <exclude>  an array of glob patterns to exclude matches
  -g, --gitignore          respect ignore patterns in .gitignore files that apply to the globbed files
  -h, --help               output usage information
```

## lisence

MIT
