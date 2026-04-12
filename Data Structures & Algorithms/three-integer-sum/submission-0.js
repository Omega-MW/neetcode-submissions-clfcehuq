class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const len = nums.length;
        const res = [];
        for (let i = 0; i <= len - 3; i++) {
            for (let j = i + 1; j <= len - 2; j++) {
                for (let k = j + 1; k <= len - 1; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        const isDuplicate = res.some(result =>
                            result[0] === triplet[0] &&
                            result[1] === triplet[1] &&
                            result[2] === triplet[2]
                        );
                        if (!isDuplicate) {
                            res.push(triplet);
                        }
                    }
                }
            }
        }
        return res;
    }
}
