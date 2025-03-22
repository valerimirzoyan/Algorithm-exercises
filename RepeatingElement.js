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
const numbers = [4, 5, 6, 3, 5, 7, 8];
const result = findFirstRepeatingElement(numbers);
console.log(result); // Output: 5
