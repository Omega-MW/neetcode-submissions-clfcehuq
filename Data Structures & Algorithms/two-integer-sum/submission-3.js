class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // 1. Create a hash map storing num -> index
        // 2. For all num in nums, check if `diff = target - num` exist in map
        // 3. Optional: check diff while creating the map
        const numsMap = {};
        for (let i = 0; i < nums.length; i++) {
            numsMap[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (numsMap[diff] && numsMap[diff] !== i) return [i, numsMap[diff]];
        }

        return [];
    }
}
