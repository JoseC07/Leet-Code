/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 
const l1head = new ListNode(2, null);
const l2head = new ListNode(5, l1head); 

console.log("no errors");



function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return null;
};
// @lc code=end

