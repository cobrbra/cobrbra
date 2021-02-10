// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/

let DATA = {
  name: 'Jacob',
  date: new Date(),
  start_date: new Date('September 9, 2019 12:00:00'),
  finish_date: new Date('March 9, 2023 12:00:00'),
  progress: "-",
  non_progress: " ",

};

let DATA_DIFF = {
  remaining_time: (DATA.date - DATA.start_date),
  total_time:  (DATA.finish_date - DATA.start_date),
};

let DATA_RATIO = {
  time_ratio: (100 * (DATA_DIFF.remaining_time / DATA_DIFF.total_time)).toFixed(1),
  time_ratio_integer: (100 * (DATA_DIFF.remaining_time / DATA_DIFF.total_time)).toFixed(0)
};

let DATA_FINAL = {
  time_ratio: DATA_RATIO.time_ratio,
  progress: DATA.progress.repeat(DATA_RATIO.time_ratio_integer - 1),
  non_progress: DATA.non_progress.repeat(100 - DATA_RATIO.time_ratio_integer),
};

/**
  * A - We open 'main.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA_FINAL);
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();
