console.log('SELECTION ALGORITHM');
const array = [3, 2, 4, 1, 5, 8, 6, 9, 7, 0];
console.log(`Unsorted: ${array}`);

let timeNow;
let finalTime;
const selection = (a) => {
  let min = 0;
  let temp;
  timeNow = new Date();
  for (let i = 0; i < a.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min != i) {
      temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
};

selection(array);

console.log(`Sorted: ${array} ${timeNow}`);
