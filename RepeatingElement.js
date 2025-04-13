function findFirstRepeatingElement(arr) {
    const seen = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return arr[i]; // Return the first repeating element
        }
        seen.add(arr[i]);
    }
    
    return -1; // Return -1 if no repeating element is found
}

// Example usage:
let size = prompt("Enter the size:");
let numbers = [];
numbers.length = size;
for (let i = 0; i < size; i++) {
numbers[i] = prompt("Enter the " + i + " elemet");
}
let result = findFirstRepeatingElement(numbers);
console.log(result);
