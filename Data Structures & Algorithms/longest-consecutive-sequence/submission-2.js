class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a, b) => a - b);
        let longestLen = 1;
        let currentLen = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i-1] + 1) {
                currentLen += 1;
                longestLen = longestLen < currentLen ? currentLen : longestLen;
            }
            else if (nums[i] === nums[i-1]) continue;
            else currentLen = 1;
        }
        return longestLen;
    }
}
