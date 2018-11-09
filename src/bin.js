const commander = require('commander');
const updateNotifier = require('updateNotifier');
const pkg = require('../package.json');
const {lint} = require('./lint')

commander.version(pkg.version, '-v, --version');

commander
    .option(`--fix`, 'fixes linting errors for select rules (this may overwrite linted files)')
    .action(options => {
        console.log('options --- ', options)
        lint();
    });

commander.parse(process.argv)

updateNotifier({ pkg }).notify();