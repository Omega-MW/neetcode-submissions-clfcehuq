class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 1. create a dict for s and t with strcuture: char -> nums
        // 2. compare 2 dict, see if they are the same
        const charCountS = {};
        const charCountT = {};
        for (const char of s) {
            charCountS[char] = (charCountS[char] || 0) + 1;
        }
        for (const char of t) {
            charCountT[char] = (charCountT[char] || 0) + 1;
        }
        
        function areDictsEqual(dict1, dict2) {
            // Get keys of both objects
            const keys1 = Object.keys(dict1);
            const keys2 = Object.keys(dict2);

            // Quick check: different number of keys → not equal
            if (keys1.length !== keys2.length) return false;

            // Check each key/value
            for (const key of keys1) {
                if (dict1[key] !== dict2[key]) return false;
            }

            // All keys match
            return true;
        }
        
        return areDictsEqual(charCountS, charCountT);
    }
}
