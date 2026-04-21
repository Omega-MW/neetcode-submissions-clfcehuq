class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Optimized version of solution1
        // 1. Use binary search with left, mid, right pointers
        // 2. If nums[mid] === target, return mid
        // 3. If left segment [left..mid] is sorted (nums[left] <= nums[mid]):
        //      - If target falls within [nums[left], nums[mid]), search left half
        //      - Otherwise search right half
        // 4. Else right segment [mid..right] is sorted:
        //      - If target falls within (nums[mid], nums[right]], search right half
        //      - Otherwise search left half
        // 5. If no match found, return -1
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) return mid;

            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
