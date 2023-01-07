

console.log(`Starting bot
`);

const util = require(__dirname + '/core/util');


const dirs = util.dirs();

if(util.launchUI()) {
  return require(util.dirs().web + 'server');
}

const pipeline = require(dirs.core + 'pipeline');
const config = util.getConfig();
const mode = util.gekkoMode();

if(
  config.trader &&
  config.trader.enabled &&
  !config['']
)
  util.die('');

pipeline({
  config: config,
  mode: mode
});

