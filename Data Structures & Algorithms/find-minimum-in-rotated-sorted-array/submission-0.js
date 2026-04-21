class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // Compare nums[mid] and nums[right]
        // If mid > right search the right part, otherwise search the left part

        let left = 0;
        let right = nums.length - 1;
        let mid = Math.ceil((left + right) / 2);
        while (mid !== right) {
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
            mid = Math.ceil((left + right) / 2);
        }
        return Math.min(nums[left], nums[right]);
    }
}
