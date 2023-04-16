# Benchmark of JavaScript common sorting algorithms

All algorithms are not written by me. This's what I could find on the internet, some of them are translated from the other languages.
There're the fastest implementations I could find, if you have a faster solution make a pull request or give me a link.

Note: if there's no algorithm in table then it can't handle such longs array
Failing with Maximum call stack size exceeded error or takes too long to run

[Full statistics](Full_Results.md)

## Results R9 5950x for integers starting from 0 to 100
### 1k array size
|Sorting algorithm|Array size|Time (ms)|Heap used (MB)|
|-----------------|----------|---------|--------------|
|radixSort        |1000      |0.52     | 5            |
|heapSort         |1000      |0.17     | 5            |
|shellSort        |1000      |0.33     | 5            |
|sort             |1000      |0.15     | 5            |
|mergeSort        |1000      |0.44     | 5            |
|quickSort        |1000      |0.41     | 5            |
|lsdRadixSort     |1000      |0.46     | 5            |
|msdradixsort     |1000      |0.42     | 5            |
|fastQuickSort    |1000      |0.76     | 5            |
|iterativeQuickSort|1000      |0.2      | 5            |
|insertionSort    |1000      |0.39     | 5            |


### 10k array size
|Sorting algorithm|Array size|Time (ms)|Heap used (MB)|
|-----------------|----------|---------|--------------|
|radixSort        |10000     |1.19     | 5            |
|heapSort         |10000     |1.83     | 6            |
|shellSort        |10000     |1.19     | 6            |
|sort             |10000     |1.22     | 6            |
|mergeSort        |10000     |1.79     | 6            |
|quickSort        |10000     |0.78     | 6            |
|lsdRadixSort     |10000     |0.91     | 7            |
|msdradixsort     |10000     |2.05     | 8            |
|fastQuickSort    |10000     |2.93     | 7            |
|iterativeQuickSort|10000     |1.21     | 8            |
|insertionSort    |10000     |16.38    | 8            |

### 100k array size
|Sorting algorithm|Array size|Time (ms)|Heap used (MB)|
|-----------------|----------|---------|--------------|
|radixSort        |100000    |5.38     | 20           |
|heapSort         |100000    |14.98    | 16           |
|shellSort        |100000    |10.71    | 18           |
|sort             |100000    |13.14    | 23           |
|mergeSort        |100000    |9.16     | 24           |
|quickSort        |100000    |36.04    | 28           |
|lsdRadixSort     |100000    |8.87     | 26           |
|msdradixsort     |100000    |4.02     | 30           |
|fastQuickSort    |100000    |113.31   | 41           |
|iterativeQuickSort|100000    |46.88    | 34           |
|insertionSort    |100000    |1580.11  | 36           |

### 1 mil array size
|Sorting algorithm|Array size|Time (ms)|Heap used (MB)|
|-----------------|----------|---------|--------------|
|radixSort        |1000000   |63.81    | 102          |
|heapSort         |1000000   |153.9    | 89           |
|shellSort        |1000000   |121.25   | 83           |
|sort             |1000000   |138.84   | 118          |
|mergeSort        |1000000   |90.26    | 95           |
|lsdRadixSort     |1000000   |70.95    | 97           |
|msdradixsort     |1000000   |13.6     | 44           |
|iterativeQuickSort|1000000   |5123.33  | 37           |
### 10 mil array size
|Sorting algorithm|Array size|Time (ms)|Heap used (MB)|
|-----------------|----------|---------|--------------|
|radixSort        |10000000  |601.08   | 785          |
|heapSort         |10000000  |2004.63  | 884          |
|shellSort        |10000000  |1388.13  | 884          |
|sort             |10000000  |1391.28  | 784          |
|mergeSort        |10000000  |988      | 957          |
|lsdRadixSort     |10000000  |696.75   | 956          |
|msdradixsort     |10000000  |116.07   | 892          |
### 100 mil array size
|Sorting algorithm|Array size|Time (ms)|Heap used (MB)|
|-----------------|----------|---------|--------------|
|radixSort        |100000000 |5188.5   | 5325         |
|sort             |100000000 |14085.72 | 4539         |
|lsdRadixSort     |100000000 |42431.99 | 2777         |
|msdradixsort     |100000000 |1198.34  | 2461         |
