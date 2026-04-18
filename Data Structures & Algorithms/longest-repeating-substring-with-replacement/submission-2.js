class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // 1. Build a map to track the char-freq of the current windows/sub string
        // 2. Use two variables to track the max-freq and the to-replace numbers of chars
        // 3. Window size start from K, use two pointers to go through the string, 
        // 4. When the to-replace is not bigger than `subStringLength - max-freq` move the right pointer, 
        //    otherwise move the left
        // 5. Remeber to adjust the map and variables after moving the pointers
        const charFreq = {};
        let l = 0;
        let r = l + k + 1;
        let maxLen = k;
        if (s.length <= k) return s.length;

        if (k === 0) {
            let maxLen = 1;
            let l = 0;
            for (let r = 1; r < s.length; r++) {
                if (s[r] !== s[l]) l = r;
                maxLen = Math.max(maxLen, r - l + 1);
            }
            return maxLen;
        }
        
        for (let c of s.slice(l, r)) {
            charFreq[c] = (charFreq[c] || 0) + 1;
        }

        let maxFreq = Math.max(...Object.values(charFreq));// Be aware to use ..., otherwise return nan

        while (r < s.length) {
            let moved = false;
            charFreq[s[r]] = (charFreq[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, charFreq[s[r]]);
            const toReplace = r - l + 1 - maxFreq;
            if (toReplace > k) {
                charFreq[s[l]]--;
                charFreq[s[r]]--;
                l++;
            } else {
                maxLen = Math.max(maxLen, r - l + 1);
                r++;
            }
        }
        return maxLen;
    }
}
