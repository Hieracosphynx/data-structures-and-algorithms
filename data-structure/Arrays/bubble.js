console.log('BUBBLE SORTING ALGORITHM');
const array = [1, 3, 7, 5, 1, 3, 0, 8];

console.log(`Unsorted: ${array}`);

let temp;

const bubbleSort = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
};

bubbleSort(array);

console.log(`Sorted: ${array}`);
