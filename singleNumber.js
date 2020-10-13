// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

function singleNumber(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    
    return Array.from(set)[0];
}

console.log(singleNumber([2, 2, 1, 1, 4]));