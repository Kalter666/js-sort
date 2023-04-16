const last = new Uint32Array(256);
const pointer0 = new Uint32Array(256);
const pointer8 = new Uint32Array(256);
const pointer16 = new Uint32Array(256);
const pointer24 = new Uint32Array(256);

function msdradixsort(arr, start = 0, end = arr.length, shift = 24) {
  const ptr =
    shift === 0
      ? pointer0
      : shift === 8
      ? pointer8
      : shift === 16
      ? pointer16
      : pointer24;

  for (let x = start; x < end; ++x) last[(arr[x] >> shift) & 0xff]++;

  last[0] += start;
  ptr[0] = start;
  for (let x = 1; x < 256; ++x) {
    ptr[x] = last[x - 1];
    last[x] += last[x - 1];
  }

  for (let x = 0; x < 256; ++x) {
    let i = ptr[x];
    while (i !== last[x]) {
      let value = arr[i],
        y;
      while ((y = (value >> shift) & 0xff) !== x) {
        value = arr[ptr[y]];
        swap(arr, i, ptr[y]++);
      }
      i++;
    }
    ptr[x] = i;
    last[x] = 0;
  }

  if (shift === 0) return;

  for (let x = 0; x < 256; ++x) {
    const i = x > 0 ? ptr[x - 1] : start;
    const j = ptr[x];
    if (j - i > 64) {
      msdradixsort(arr, i, j, shift - 8);
    } else {
      insertionSort(arr, i, j);
    }
  }
}

function insertionSort(arr, start, end) {
  for (let x = start + 1; x < end; ++x) {
    for (let y = x; y > start && arr[y - 1] > arr[y]; y--) swap(arr, y, y - 1);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = msdradixsort;
