class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Create map `count`: num -> freq
        // 2. Place all nums from `count` to array `freq`, index represents freq
        // 3. Return top K valide elements from `freq`
        const counts = {};
        const freq = Array.from({length: nums.length + 1}, () => []);

        for (let num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }
        for (let num in counts) {
            freq[counts[num]].push(num);
        }

        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}
