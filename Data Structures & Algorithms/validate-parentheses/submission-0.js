class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Option1: Two pointer -- counter example: '()()' -- not all valid cases are symmetrical
        // Option2: Stack (Array.push() with Array.pop())
        // Stack:
        // 1. Use a map/dict to store close -> open bracket
        // 2. For all c in s, if c is open bracket, push it to stack
        // 3. If c is close bracket, check if it matchs the last open bracket, yes -> pop it, no -> return false
        const stack = [];
        const closeToOpen = {
            '}': '{',
            ']': '[',
            ')': '('
        }
        for (let c of s) {
            if (closeToOpen[c]) {
                const last = stack.pop();
                if (last !== closeToOpen[c]) return false;
            }
            else stack.push(c);
        }
        return stack.length === 0;
    }
}
