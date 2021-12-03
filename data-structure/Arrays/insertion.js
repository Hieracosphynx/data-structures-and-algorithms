console.log('INSERTION ALGORITHM');
const array = [2, 1, 4, 5, 2, 8, 4];
console.log(`Unsorted: ${array}`);

const insertion = (a) => {
  let j = 0;
  let temp;
  for (let i = 0; i < array.length; i++) {
    j = i;
    while (j > 0 && a[j - 1] > a[j]) {
      temp = a[j];
      a[j] = a[j - 1];
      a[j - 1] = temp;
      j--;
    }
  }
};

insertion(array);

console.log(`Sorted: ${array}`);
