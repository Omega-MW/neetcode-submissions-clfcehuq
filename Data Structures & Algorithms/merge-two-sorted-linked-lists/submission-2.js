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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!(list1 && list2)) return list1 ?? list2;
        let curr = null;
        if (list1.val <= list2.val) {
            curr = list1;
            list1 = list1.next;  // 修改1：选中后立即推进指针
        }
        else {
            curr = list2;
            list2 = list2.next;  // 修改2：同上
        }
        const head = curr;
        while (curr) {
            if (!(list1 && list2)) break;
            // 修改3：去掉了 currL 的分支，统一处理
            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        // 修改4：循环结束后接上剩余部分
        curr.next = list1 ?? list2;
        return head;
    }
}
