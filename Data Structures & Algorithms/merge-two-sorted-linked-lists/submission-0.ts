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
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
            if (!list1) return list2!;
    if (!list2) return list1!;
    let dummy: ListNode;

    if (list1.val < list2.val) {
      dummy = list1;
      list1 = list1.next;
    } else {
      dummy = list2;
      list2 = list2.next;
    }

    let current = dummy;
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }

      current = current.next;
    }

    current.next = list1 || list2;

    return dummy;
    }
}
