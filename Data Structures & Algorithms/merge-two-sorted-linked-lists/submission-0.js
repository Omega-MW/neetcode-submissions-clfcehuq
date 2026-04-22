class Solution {
    // Wrong code archive, works but too complicated, introduced unnecessary var 'currL'
    mergeTwoLists(list1, list2) {
        if (!(list1 && list2)) return list1 ?? list2;
        let curr = null;
        let currL = 0;
        if (list1.val <= list2.val) {
            curr = list1;
            list1 = list1.next;  // 修改1：选中后推进
            currL = 1;
        }
        else {
            curr = list2;
            list2 = list2.next;  // 修改2：选中后推进
            currL = 2;
        }
        const head = curr;
        while (curr) {
            if (!(list1 && list2)) break;
            if (currL === 1) {
                if (curr.next === null || curr.next.val > list2.val) {
                    const next2 = list2.next;  // 修改3：切换前保存list2的后续
                    curr.next = list2;
                    curr = list2;
                    list2 = next2;  // 修改4：用保存的值推进list2
                    currL = 2;
                }
                else {
                    curr = curr.next;
                    list1 = list1.next;  // 修改5：沿着list1走时同步推进
                }
            }
            else if (currL === 2) {
                if (curr.next === null || curr.next.val > list1.val) {
                    const next1 = list1.next;  // 修改6：同理保存list1的后续
                    curr.next = list1;
                    curr = list1;
                    list1 = next1;  // 修改7：推进list1
                    currL = 1;
                }
                else {
                    curr = curr.next;
                    list2 = list2.next;  // 修改8：同步推进
                }
            }
        }
        curr.next = list1 ?? list2;  // 修改9：接上剩余部分
        return head;
    }
}