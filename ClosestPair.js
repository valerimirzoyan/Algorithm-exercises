function findClosestPair(arr1, arr2) {
    let i = 0, j = 0;
    let closestPair = [];
    let minDifference = Infinity;

    while (i < arr1.length && j < arr2.length) {
        let diff = Math.abs(arr1[i] - arr2[j]);

        // Update the closest pair if a smaller difference is found
        if (diff < minDifference) {
            minDifference = diff;
            closestPair = [arr1[i], arr2[j]];
        }

        // Move the pointer of the array with the smaller value to find a closer pair
        if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return closestPair;
}

// Example usage
const arr1 = [1, 3, 8, 10, 15];
const arr2 = [2, 4, 6, 7, 12];

console.log(findClosestPair(arr1, arr2));
