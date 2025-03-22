function findNextGreaterElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let nextGreater = -1;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                nextGreater = arr[j];
                break;
            }
        }
        result.push(nextGreater);
    }
    return result;
}


let arr1 = [4, 5, 2, 25];
console.log(findNextGreaterElements(arr1)); 

let arr2 = [13, 7, 6, 12];
console.log(findNextGreaterElements(arr2));
