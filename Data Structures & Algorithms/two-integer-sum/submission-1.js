class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Queue search
        // Search for `target - nums[i]` untill the last element
        const results = [];
        let diff = 0;
        for (let i = 0; i < nums.length; i++) {
            results.push(i);
            diff = target - nums[i];
            for (let j=i+1; j < nums.length; j++) {
                if (nums[j] == diff) {
                    results.push(j);
                    return results;
                }
            }
            results.pop()
        }
        return results;
    }
}
