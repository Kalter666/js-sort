const fs = require('fs');
const os = require('os');

if (!fs.existsSync('./statistics')) {
  fs.mkdirSync('./statistics');
}

const computerName = os.hostname();
const filename = `./statistics/${computerName}.csv`;

function writeHeaders() {
  const headers = [
    'Sorting algorithm',
    'Array size',
    'Time (ms)',
    'Heap used (MB)',
  ];
  const csv = `${headers.join(';')}\n`;
  fs.writeFileSync(filename, csv);
}

function appendLine(algorithm, size, time, heap) {
  const csv = `${algorithm};${size};${time}; ${heap}\n`;
  fs.appendFileSync(filename, csv);
}

function writeToCsv(resultsMap) {
  writeHeaders();
  for (const [key, value] of resultsMap) {
    appendLine(key, value.size, value.time, value.heap);
  }
}

module.exports = writeToCsv;
