const { argv } = require('yargs');
const { createLauncher, proc } = require('process-launch');
const { logger } = require('jege/server');

const cwd = process.cwd();
const log = logger('[monorepo-objekt]');

const buildOrder = [
  'objekt',
];

const processDefinitions = {
  objekt: proc(
    'node',
    [
      './scripts/build.js',
    ],
    {
      cwd: `./packages/objekt`,
      stdio: 'inherit',
    },
  ),
};

async function builder() {
  log('builder(): start building, cwd: %s, argv: %j', cwd, argv);

  try {
    const Launcher = createLauncher({
      processDefinitions,
    });

    Launcher.runInSequence({
      order: buildOrder,
    });
  } catch (err) {
    log('builder(): error', err);
  }
}
module.exports = builder;

if (require.main === module) {
  builder();
}
