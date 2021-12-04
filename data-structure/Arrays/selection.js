const swap = require("./helpers/swap");

console.log("SELECTION ALGORITHM");
const array = [3, 2, 4, 1, 5, 8, 6, 9, 7, 0];
console.log(`Unsorted: ${array}`);

const selection = (arr) => {
	let min = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		min = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min != i) {
			swap(arr, i, min);
		}
	}
};

selection(array);

console.log(`Sorted: ${array}`);
