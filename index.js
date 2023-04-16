const { hrtime } = require('node:process');
const path = require('node:path');
const fs = require('node:fs');
const heapSort = require('./heapSort');
const radixSort = require('./radixSort');
const quickSort = require('./quickSort');
const shellsort = require('./shellsort');
const mergeSort = require('./mergeSort');
const lsdRadixSort = require('./lsdRadixSort');
const msdRadixSort = require('./msdRadixSort');
const fastQuickSort = require('./fastQuickSort');
const iterativeQsort = require('./iterativeQuickSort');
const insertionSort = require('./insertionSort');
const { getMemoryUsage, calculateAverageAndFormat } = require('./memoryUsage');
const writeToCsv = require('./utils/writetocsv');

const results = [];

function generateRandomArray(n, min, max) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function sort(arr) {
  return arr.sort((a, b) => a - b);
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function runGC() {
  try {
    if (global.gc) {
      global.gc();
    }
  } catch (e) {
    console.log('`node --expose-gc index.js`');
    process.exit();
  }
}

function convertHRTimeToTimeFormat(start) {
  const time = hrtime.bigint();
  const diff = time - start;
  const millisecond = Number(diff / 1000000n);
  const seconds = Number(millisecond / 1000).toFixed();
  const minutes = Number(seconds / 60).toFixed();
  return minutes + ':' + seconds + '.' + millisecond;
}

const printProgress = (start) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(
    'Time elapsed: ' + convertHRTimeToTimeFormat(start) + '\n',
  );
};

const MAX_INT = Number.MAX_SAFE_INTEGER;
// const MAX_INT = 100;

function validateThatWorks(fn, size) {
  console.time(`Test ${fn.name} with size ${size.toExponential()}`);

  const validation = generateRandomArray(size, 0, MAX_INT);
  const arr1 = [...validation];
  const sorted = sort([...arr1]);
  try {
    const result = fn(arr1);
    if (!compareArrays(sorted, result ?? arr1)) {
      appendLine(`${fn.name} failed to pass validation sort`, fn);
      console.timeEnd(`Test ${fn.name} with size ${size.toExponential()}`);
      console.log(`Test ${fn.name} with size ${size.toExponential()} FAILED`);

      return false;
    }
  } catch {
    appendLine(`${fn.name} failed with error`, fn);
    console.timeEnd(`Test ${fn.name} with size ${size.toExponential()}`);
    console.log(`Test ${fn.name} with size ${size.toExponential()} FAILED`);

    return false;
  }
  console.timeEnd(`Test ${fn.name} with size ${size.toExponential()}`);

  return true;
}

function testSort(fn, size, isFirst = false) {
  const averages = [];
  const averageHeap = [];

  if (isFirst) {
    const validate = validateThatWorks(fn, size);

    if (!validate) {
      return false;
    }
  }

  for (let i = 0; i < 4; i++) {
    runGC();
    try {
      console.time(
        `Running loop for ${fn.name} #${
          i + 1
        } with size ${size.toExponential()}`,
      );
      const arr1 = generateRandomArray(size, 0, MAX_INT);
      const start = hrtime.bigint();
      fn(arr1);
      const end = hrtime.bigint();
      const time = +(Number((end - start) / 10000n) / 100).toFixed(2);
      averages.push(time);
      averageHeap.push(getMemoryUsage());

      console.timeEnd(
        `Running loop for ${fn.name} #${
          i + 1
        } with size ${size.toExponential()}`,
      );
    } catch {
      appendLine(`${fn.name} failed with error`, fn);

      break;
    }
  }
  if (averages.length !== 0) {
    const average = +(
      averages.reduce((a, b) => a + b, 0) / averages.length
    ).toFixed(2);
    results.push([
      fn.name,
      {
        time: average,
        size,
        heap: (
          averageHeap.reduce((acc, curr) => {
            return acc + curr['heapUsed'];
          }, 0) /
          averages.length /
          (1024 * 1024)
        ).toFixed(),
      },
    ]);
    const averageHeapSize = calculateAverageAndFormat(averageHeap);
    appendLine(
      `${fn.name} took average time ${average}ms; ${averageHeapSize};`,
      fn,
    );
    return true;
  }
}

function writeResults(fn) {
  const filename = path.join(__dirname, 'results', `${fn.name}.txt`);
  fs.writeFileSync(filename, 'Test begin\n');
}

function appendSpacer(size, fn) {
  appendLine(
    `\n===============\nNumber of elements: ${size}\n===============\n`,
    fn,
  );
}

function appendLine(line, fn) {
  const filename = path.join(__dirname, 'results', `${fn.name}.txt`);
  fs.appendFileSync(filename, line + '\n');
}

function run(size, fn, isFirst) {
  appendSpacer(size, fn);
  return testSort(fn, size, isFirst);
}

function generateSizes(n) {
  const arr = [];
  for (let i = 10; i <= Math.pow(10, n); i *= 10) {
    arr.push(i);
  }
  return arr;
}

const sizes = generateSizes(6);
const fns = [
  radixSort,
  heapSort,
  shellsort,
  sort,
  mergeSort,
  quickSort,
  lsdRadixSort,
  msdRadixSort,
  fastQuickSort,
  iterativeQsort,
  insertionSort,
];

fns.forEach((fn) => {
  console.log(`${fn.name} start`);
  writeResults(fn);
  let keepGoing = true;
  for (const [i, size] of sizes.entries()) {
    if (!keepGoing) {
      break;
    }
    keepGoing = run(size, fn, i === 0);
  }
  console.log(`${fn.name} end`);
});

// fns.forEach((fn) => {
//   console.log(`${fn.name} start`);
//   writeResults(fn);
//   let keepGoing = true;
//   for (const [i, size] of [1e3].entries()) {
//     if (!keepGoing) {
//       break;
//     }
//     keepGoing = run(size, fn, i === 0);
//   }
//   console.log(`${fn.name} end`);
// });

writeToCsv(results);