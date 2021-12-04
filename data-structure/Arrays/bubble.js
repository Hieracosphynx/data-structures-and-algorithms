const swap = require("./helpers/swap");

const array = [1, 3, 7, 5, 1, 3, 0, 8];

console.log(`Unsorted: ${array}`);

const bubble = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
};

bubble(array);

console.log(`Sorted: ${array}`);
