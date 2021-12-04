const array = [
	3, 1, 3, 2, 5, 7, 500000, 3, 8, 90, 12, 1000, 21, 31, 21, 432, 5423, 321, 234,
	847, 89, 21, 37, 83, 60884521,
];
console.log(`Unsorted: ${array}`);

const merge = (rightArray, leftArray) => {
	const output = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (rightArray.length > rightIndex && leftArray.length > leftIndex) {
		const leftElement = leftArray[leftIndex];
		const rightElement = rightArray[rightIndex];

		if (rightElement > leftElement) {
			output.push(leftElement);
			leftIndex++;
		} else {
			output.push(rightElement);
			rightIndex++;
		}
	}

	return [
		...output,
		...leftArray.slice(leftIndex),
		...rightArray.slice(rightIndex),
	];
};

const mergeSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}

	const middleIndex = Math.floor(arr.length / 2);
	const leftArray = arr.slice(0, middleIndex);
	const rightArray = arr.slice(middleIndex);

	return merge(mergeSort(rightArray), mergeSort(leftArray));
};

console.log(`Sorted: ${mergeSort(array)}`);
