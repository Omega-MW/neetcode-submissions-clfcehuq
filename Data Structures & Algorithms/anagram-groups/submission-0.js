class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const results = [];
        while (strs.length !== 0) {
            processFirstStr();
        }
        return results;

        function processFirstStr() {
            const result = [];
            const indexes = [];
            result.push(strs[0]);
            indexes.push(0);

            for (let j = 1; j < strs.length; j++) {
                if (isAnagram(strs[0], strs[j])){
                    result.push(strs[j]);
                    indexes.push(j);
                }
            }
            results.push(result);
            
            // better to use `filter()` here
            for (let k = indexes.length - 1; k >= 0; k--) {
                strs.splice(indexes[k], 1);
            }
        }

        function isAnagram(s, t) {
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
}
