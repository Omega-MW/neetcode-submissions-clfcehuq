class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // 1. Convert words to Map charFreqList -> words
        // 2. If keys in maps is the same, they are anagrams
        // 3. Return values of Map, it grouped anagrams while creating itself

        const results = {};
        const charsMap = {
            a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9,
            k:10, l:11, m:12, n:13, o:14, p:15, q:16, r:17,
            s:18, t:19, u:20, v:21, w:22, x:23, y:24, z:25
        }; // Use `String.prototype.charCodeAt()`
        for (let str of strs){
            const charFreq = Array(26).fill(0);
            for (let c of str) {
                charFreq[charsMap[c]]++;
            }
            const key = charFreq.join(','); // Key of dict has to be string;
            if (!results[key]){
                results[key] = [];
            }
            results[key].push(str);
        }
        return Object.values(results);
    }
}
