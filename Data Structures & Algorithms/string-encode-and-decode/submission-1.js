class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";
        for (let str of strs) {
            output += str.length + '#' + str;
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let strLength = "";
        for (let i = 0; i <= str.length; i++) {
            if (str[i] === '#') {
                strLength = parseInt(strLength);
                const subStr = strLength > 0 ? str.slice(i+1, strLength+i+1) : "";
                strs.push(subStr);
                i += strLength;
                strLength = "";
            }
            else {
                strLength += str[i]
            }
        }
        return strs;
    }
}
