class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // 1. Remove all spaces and special chars
        // 2. Compare s[n] with s[length-n-1]
        const regex = /[^A-Za-z0-9]/g;
        const str = s.replace(regex, '').toLowerCase();
        for (let i = 0; i < str.length/2; i++) {
            const index = str.length - i - 1;
            if (str[i] !== str[index]) return false;
        }
        return true;
    }
}
