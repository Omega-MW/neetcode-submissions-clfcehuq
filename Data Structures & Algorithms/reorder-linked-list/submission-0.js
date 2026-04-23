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
     * @return {void}
     */
    // 1. Use a stack store the reversed list
    // 2. Build resturcture the list with the featured order
    reorderList(head) {
        if (!head) return;

        const reversedNodes = [];
        while (head) {
            reversedNodes.push(head);
            head = head.next;
        }

        let i = 0;
        let j = reversedNodes.length - 1;
        while (i < j) {
            reversedNodes[i].next = reversedNodes[j];
            i++;
            if (i >= j) break;
            reversedNodes[j].next = reversedNodes[i];
            j--;
        }

        reversedNodes[i].next = null;
        
    }
}
