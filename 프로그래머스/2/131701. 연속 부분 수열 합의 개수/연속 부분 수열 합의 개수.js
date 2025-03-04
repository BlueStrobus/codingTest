const solution = (elements) => {
    const sums = new Set(); // Using Set to store unique sums
    
    // For each possible length of subsequence
    for (let length = 1; length <= elements.length; length++) {
        // For each starting position
        for (let start = 0; start < elements.length; start++) {
            let currentSum = 0;
            
            // Calculate sum for current length from starting position
            for (let i = 0; i < length; i++) {
                // Use modulo to wrap around the array
                let index = (start + i) % elements.length;
                currentSum += elements[index];
            }
            
            sums.add(currentSum);
        }
    }
    
    return sums.size; // Return count of unique sums
};
