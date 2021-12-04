const swap = require("./helpers/swap");

const array = [2, 1, 4, 5, 2, 8, 4];
console.log(`Unsorted: ${array}`);

const insertion = (arr) => {
	let j = 0;

	for (let i = 0; i < arr.length; i++) {
		j = i;
		while (j > 0 && arr[j - 1] > arr[j]) {
			swap(arr, j, j - 1);
		}
	}
};
insertion(array);
console.log(`Sorted: ${array}`);
