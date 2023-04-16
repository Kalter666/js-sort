function mergeSort(array) {
  function merge(arr, aux, lo, mid, hi) {
    var i = lo;
    var j = mid + 1;
    var k = lo;
    while (true) {
      if (arr[i] <= arr[j]) {
        aux[k++] = arr[i++];
        if (i > mid) {
          do aux[k++] = arr[j++];
          while (j <= hi);
          break;
        }
      } else {
        aux[k++] = arr[j++];
        if (j > hi) {
          do aux[k++] = arr[i++];
          while (i <= mid);
          break;
        }
      }
    }
  }

  function sortarrtoaux(arr, aux, lo, hi) {
    if (hi < lo) return;
    if (hi == lo) {
      aux[lo] = arr[lo];
      return;
    }
    var mid = Math.floor(lo + (hi - lo) / 2);
    sortarrtoarr(arr, aux, lo, mid);
    sortarrtoarr(arr, aux, mid + 1, hi);
    merge(arr, aux, lo, mid, hi);
  }

  function sortarrtoarr(arr, aux, lo, hi) {
    if (hi <= lo) return;
    var mid = Math.floor(lo + (hi - lo) / 2);
    sortarrtoaux(arr, aux, lo, mid);
    sortarrtoaux(arr, aux, mid + 1, hi);
    merge(aux, arr, lo, mid, hi);
  }

  function merge_sort(arr) {
    var aux = arr.slice(0);
    sortarrtoarr(arr, aux, 0, arr.length - 1);
    return arr;
  }

  return merge_sort(array);
}

module.exports = mergeSort;
