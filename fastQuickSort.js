function fastQuickSort(array) {
  return (function qsort(arr, start, end) {
    if (start >= end) return arr;
    let swapPos = start;

    for (let i = start; i <= end; i++) {
      if (arr[i] <= arr[end]) {
        [arr[swapPos], arr[i]] = [arr[i], arr[swapPos]];
        swapPos++;
      }
    }
    qsort(arr, start, --swapPos - 1);
    qsort(arr, swapPos + 1, end);

    return arr;
  })(Array.from(array), 0, array.length - 1);
}

module.exports = fastQuickSort;
