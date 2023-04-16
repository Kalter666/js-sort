const formatMemoryUsage = (data) =>
  `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;

function getMemoryUsage() {
  return process.memoryUsage();
}

function calculateAverageAndFormat(averages) {
  const averageHeap =
    averages.reduce((acc, curr) => {
      return acc + curr['heapUsed'];
    }, 0) / averages.length;
  const averageRSS =
    averages.reduce((acc, curr) => {
      return acc + curr['rss'];
    }, 0) / averages.length;
  return `A-heap: ${formatMemoryUsage(averageHeap)}, A-RSS: ${formatMemoryUsage(
    averageRSS,
  )}`;
}

module.exports = {
  getMemoryUsage,
  formatMemoryUsage,
  calculateAverageAndFormat,
};
