# Full stats

## Ryzen 9 5950x
### Using MAX_SAFE_INTEGER no insertion sort, max array size 1 million
|Sorting algorithm |Array size|Time (ms)|Heap used (MB)|
|------------------|----------|---------|--------------|
|radixSort         |10        |0.05     | 5            |
|radixSort         |100       |0.43     | 5            |
|radixSort         |1000      |1.28     | 5            |
|radixSort         |10000     |2.98     | 6            |
|radixSort         |100000    |30.84    | 19           |
|radixSort         |1000000   |350.62   | 87           |
|heapSort          |10        |0        | 61           |
|heapSort          |100       |0.11     | 62           |
|heapSort          |1000      |0.5      | 64           |
|heapSort          |10000     |2.7      | 65           |
|heapSort          |100000    |15.53    | 70           |
|heapSort          |1000000   |198.65   | 79           |
|shellSort         |10        |0        | 26           |
|shellSort         |100       |0.03     | 26           |
|shellSort         |1000      |0.61     | 26           |
|shellSort         |10000     |1.22     | 27           |
|shellSort         |100000    |16.04    | 38           |
|shellSort         |1000000   |212.93   | 72           |
|sort              |10        |0        | 100          |
|sort              |100       |0.01     | 100          |
|sort              |1000      |0.17     | 101          |
|sort              |10000     |1.95     | 107          |
|sort              |100000    |34.59    | 87           |
|sort              |1000000   |381.31   | 95           |
|mergeSort         |10        |0.01     | 58           |
|mergeSort         |100       |0.03     | 58           |
|mergeSort         |1000      |0.44     | 60           |
|mergeSort         |10000     |1.5      | 46           |
|mergeSort         |100000    |11.12    | 60           |
|mergeSort         |1000000   |130.57   | 103          |
|quickSort         |10        |0.02     | 130          |
|quickSort         |100       |0.04     | 131          |
|quickSort         |1000      |0.59     | 134          |
|quickSort         |10000     |0.68     | 136          |
|quickSort         |100000    |7.58     | 140          |
|quickSort         |1000000   |88.27    | 100          |
|lsdRadixSort      |10        |0.03     | 54           |
|lsdRadixSort      |100       |0.32     | 55           |
|lsdRadixSort      |1000      |0.79     | 57           |
|lsdRadixSort      |10000     |6.18     | 62           |
|lsdRadixSort      |100000    |55.95    | 62           |
|lsdRadixSort      |1000000   |556.62   | 68           |
|fastQuickSort     |10        |0        | 82           |
|fastQuickSort     |100       |0.08     | 82           |
|fastQuickSort     |1000      |0.52     | 85           |
|fastQuickSort     |10000     |0.7      | 87           |
|fastQuickSort     |100000    |8.68     | 78           |
|fastQuickSort     |1000000   |101.05   | 74           |
|iterativeQuickSort|10        |0.01     | 50           |
|iterativeQuickSort|100       |0.08     | 50           |
|iterativeQuickSort|1000      |0.34     | 51           |
|iterativeQuickSort|10000     |1.27     | 53           |
|iterativeQuickSort|100000    |6.71     | 55           |
|iterativeQuickSort|1000000   |72.73    | 99           |
|insertionSort     |10        |0        | 127          |
|insertionSort     |100       |0.1      | 127          |
|insertionSort     |1000      |1.66     | 12           |
|insertionSort     |10000     |16.43    | 14           |
|insertionSort     |100000    |1630.57  | 25           |
|insertionSort     |1000000   |162168.05| 27           |

### Using 0 to 100 iteger values, max array size 1 million
|Sorting algorithm|Array size|Time (ms)|Heap used (MB)|
|-----------------|----------|---------|--------------|
|radixSort        |10        |0.01     | 5            |
|radixSort        |100       |0.04     | 5            |
|radixSort        |1000      |1.27     | 5            |
|radixSort        |10000     |0.47     | 5            |
|radixSort        |100000    |4.61     | 17           |
|radixSort        |1000000   |57.68    | 95           |
|heapSort         |10        |0.01     | 110          |
|heapSort         |100       |0.11     | 110          |
|heapSort         |1000      |0.45     | 111          |
|heapSort         |10000     |2.55     | 112          |
|heapSort         |100000    |13.73    | 93           |
|heapSort         |1000000   |146.97   | 42           |
|shellSort        |10        |0        | 54           |
|shellSort        |100       |0.04     | 54           |
|shellSort        |1000      |0.62     | 54           |
|shellSort        |10000     |0.9      | 55           |
|shellSort        |100000    |10.45    | 60           |
|shellSort        |1000000   |120.55   | 64           |
|sort             |10        |0        | 54           |
|sort             |100       |0.01     | 54           |
|sort             |1000      |0.13     | 54           |
|sort             |10000     |1.29     | 56           |
|sort             |100000    |13.33    | 62           |
|sort             |1000000   |141.49   | 76           |
|mergeSort        |10        |0.01     | 98           |
|mergeSort        |100       |0.03     | 98           |
|mergeSort        |1000      |1.25     | 31           |
|mergeSort        |10000     |1.36     | 10           |
|mergeSort        |100000    |8.33     | 23           |
|mergeSort        |1000000   |92.22    | 49           |
|quickSort        |10        |0.03     | 61           |
|quickSort        |100       |0.06     | 62           |
|quickSort        |1000      |0.62     | 63           |
|quickSort        |10000     |0.73     | 65           |
|quickSort        |100000    |36.57    | 70           |
|lsdRadixSort     |10        |0.01     | 78           |
|lsdRadixSort     |100       |0.04     | 78           |
|lsdRadixSort     |1000      |0.47     | 79           |
|lsdRadixSort     |10000     |1.97     | 81           |
|lsdRadixSort     |100000    |9.64     | 34           |
|lsdRadixSort     |1000000   |73       | 44           |
|msdradixsort     |10        |0.03     | 69           |
|msdradixsort     |100       |0.22     | 69           |
|msdradixsort     |1000      |0.34     | 69           |
|msdradixsort     |10000     |0.52     | 70           |
|msdradixsort     |100000    |1.25     | 75           |
|msdradixsort     |1000000   |11.37    | 70           |
|fastQuickSort    |10        |0        | 54           |
|fastQuickSort    |100       |0.07     | 54           |
|fastQuickSort    |1000      |0.54     | 57           |
|fastQuickSort    |10000     |1.56     | 58           |
|fastQuickSort    |100000    |113.18   | 60           |
|iterativeQuickSort|10        |0        | 80           |
|iterativeQuickSort|100       |0.04     | 80           |
|iterativeQuickSort|1000      |0.34     | 80           |
|iterativeQuickSort|10000     |1.32     | 82           |
|iterativeQuickSort|100000    |55.89    | 84           |
|iterativeQuickSort|1000000   |5349.18  | 36           |
|insertionSort    |10        |0        | 50           |
|insertionSort    |100       |0.08     | 50           |
|insertionSort    |1000      |0.57     | 50           |
|insertionSort    |10000     |16.12    | 51           |
|insertionSort    |100000    |1561.79  | 57           |
|insertionSort    |1000000   |160103.6 | 25           |
