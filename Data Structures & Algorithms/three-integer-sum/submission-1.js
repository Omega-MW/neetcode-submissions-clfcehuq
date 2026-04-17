class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // 1. Sort
        // 2. For all nums, run two pinter
        // 3. For i in nums, find k, j, where nums[k] + nums[j] = -nums[i]
        // 4. Remove duplicate results (line 14 15 25-27)
        nums.sort((a, b) => a - b);
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i-1]) continue;
            
            const target = -nums[i];
            let k = i + 1;
            let j = nums.length - 1;
            while (k < j) {
                if (nums[j] + nums[k] === target) {
                    res.push([nums[i], nums[j], nums[k]]);
                    k++;
                    j--;
                    while (k < j && nums[k] === nums[k-1]) {
                        k++;
                    }
                }
                else if (nums[j] > target - nums[k]) j--;
                else k++;
            }
        };
        return res;
    }
}
