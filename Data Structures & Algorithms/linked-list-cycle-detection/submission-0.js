/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    // 1. Go through the linked list by order
    // 2. Store visited node in a set
    // 3. Check if current node already in set, if yes return true, otherwise continue untill reach to the end and return false
    hasCycle(head) {
        let curr = head;
        const visitedNodes = new Set();
        while (curr) {
            if (visitedNodes.has(curr)) return true;
            visitedNodes.add(curr);
            curr = curr.next;
        }
        return false;
    }
}
