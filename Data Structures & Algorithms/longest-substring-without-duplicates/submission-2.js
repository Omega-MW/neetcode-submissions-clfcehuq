class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // 1. Window size = max length of substring
        // 2. Two pointer start from left, grows untill find the first repeating char
        // 3. Move the left pointer to el after the first repeated char, continue
        if (s.length === 0) return 0;
        let maxLen = 1;
        let l = 0;
        let r = l + 1;
        while (r < s.length) {
            const subString = s.slice(l, r);
            if (subString.includes(s[r])) {
                const index = s.indexOf(s[r], l);
                l = index + 1;
            }
            else {
                r++;
                maxLen = Math.max(maxLen, r - l);
            }
        }
        return maxLen;
    }
}
