class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Use devide
        const all = nums.reduce((total, value) => total * value);
        const res = [];
        if (nums.includes(0)) {
            const firstZeroIndex = nums.findIndex((value) => value === 0)
            const moreThanOneZero = firstZeroIndex < nums.findLastIndex((value) => value === 0)
            if (moreThanOneZero) {
                return Array(nums.length).fill(0);
            }
            const allWithoutZero = nums.toSpliced(firstZeroIndex, 1).reduce((total, value) => total * value)
            for (let num of nums) {
                if (num !== 0) res.push(all / num);
                else res.push(allWithoutZero);
            }
        }
        else {
            for (let num of nums) {
                res.push(all / num);
            }
        }
        return res
    }
}
