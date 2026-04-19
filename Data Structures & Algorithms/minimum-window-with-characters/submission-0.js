class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // 1. Keep a dict storing char -> freq for t
        // 2. Window size start from 0, position start from the first elment of s
        // 3. Check the sub string in the window, if matches all char -> freq, shirnk window from the left
        // 4. If not match, grow the window size from the right
        // 5. Stop shrinking untill not mathch, store the current sub string to result
        // 6. Repeat 3-5 untill the window reaches the end of s, replace the result if the current sub string is shorter

        const freqT = {};
        for (let c of t) {
            freqT[c] = (freqT[c] || 0) + 1;
        }
        let result = null;
        let l = 0;
        let r = 0;
        const need = {...freqT};
        while (r < s.length) {
            if (s[r] in need) {
                need[s[r]]--;
            }

            while (Object.values(need).every(v => v <= 0)) {
                const subS = s.slice(l, r + 1);
                result = result === null || subS.length < result.length ? subS : result;

                if (s[l] in need) need[s[l]]++;
                l++
            }
            r++;
        }
        return result || "";
    }
}
