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
     * @return {ListNode}
     */
    // 1. For node i, get the next node
    // 2. Go to the next node, point it to the previous node, then going to the next node
    // 3. handle edge case: prev = null, next = null, head.length = 0, 1
    reverseList(head) {
        let prev = null;
        let curr = head;
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
}
