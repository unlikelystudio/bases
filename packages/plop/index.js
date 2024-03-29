#!/usr/bin/env node
const path = require('path');
const pkgUp = require('pkg-up');

const args = process.argv.slice(2);
const {Plop, run} = require('plop');


(async () => {
  const fromPath = await pkgUp()

  const argv = require('minimist')(args);

  Plop.launch({
    cwd: argv.cwd,
    // In order for `plop` to always pick up the `plopfile.js` despite the CWD, you must use `__dirname`
    configPath: path.join(__dirname, 'plopfile.js'),
    require: argv.require,
    completion: argv.completion
  // This will merge the `plop` argv and the generator argv.
  // This means that you don't need to use `--` anymore
  },env => {
    const options = {
      ...env,
      dest: path.dirname(fromPath)
    }
    return run(options, undefined, true)
  })
})();

