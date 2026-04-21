class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Wrong solution, counter example: [5,1,2,3,4] target = 1;
        // Patch added after if (nums[mid] > target)
        // Take away: 
        //   endpoint value alone can't represent a half's range when it contains the rotation point; 
        //   check if the half is sorted before eliminating it.
        let left = 0;
        let right = nums.length - 1;
        let mid = Math.ceil((left + right) / 2);
        while (nums[mid] !== target) {
            if (nums[right] === target) return right;
            if (nums[left] === target) return left;
            if (mid === right) {
                return -1;
            }
            if (nums[mid] > target) {
                if (nums[left] < target) {
                    right = mid;
                } else {
                    if (nums[left] <= nums[mid]) {
                        left = mid + 1;
                    } else {
                        right = mid;
                    }
                }
            }
            else {
                if (nums[right] > target) {
                    left = mid + 1;
                } else {
                    if (nums[right] >= nums[mid]) {
                        right = mid;
                    } else {
                        left = mid + 1;
                    }
                }
            }
            mid = Math.ceil((left + right) / 2);
        }
        return mid;
    }
}
