/* This function takes last element as pivot,
    places the pivot element at its correct
    position in sorted array, and places all
    smaller (smaller than pivot) to left of
    pivot and all greater elements to right
    of pivot */
function partition(arr, low, high) {
  let temp;
  let pivot = arr[high];

  // index of smaller element
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than or equal to pivot
    if (arr[j] <= pivot) {
      i++;

      // swap arr[i] and arr[j]
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // swap arr[i+1] and arr[high]
  // (or pivot)

  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

/* A[] --> Array to be sorted,
    l --> Starting index,
    h --> Ending index */
function quickSIterative(arr, l, h) {
  // Create an auxiliary stack
  let stack = new Array(h - l + 1);
  stack.fill(0);

  // initialize top of stack
  let top = -1;

  // push initial values of l and h to
  // stack
  stack[++top] = l;
  stack[++top] = h;

  // Keep popping from stack while
  // is not empty
  while (top >= 0) {
    // Pop h and l
    h = stack[top--];
    l = stack[top--];

    // Set pivot element at its
    // correct position in
    // sorted array
    let p = partition(arr, l, h);

    // If there are elements on
    // left side of pivot, then
    // push left side to stack
    if (p - 1 > l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    // If there are elements on
    // right side of pivot, then
    // push right side to stack
    if (p + 1 < h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }
}

function iterativeQuickSort(arr) {
  return quickSIterative(arr, 0, arr.length - 1);
}

module.exports = iterativeQuickSort;
