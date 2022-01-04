/* 21. Merge Two Sorted Lists
* You are given the heads of two sorted linked lists list1 and list2.
* Merge the two lists in a one sorted list. 
* The list should be made by splicing together the nodes of the first two lists.
* Return the head of the merged linked list.
*/

const mergeTwoLists = (list1, list2) => {
    if(!list1) return list2;
    if(!list2) return list1;
    
    let returnList = null;
    let tempNode = returnList;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            if (tempNode) {
                tempNode.next = new ListNode(list1.val);
                tempNode = tempNode.next;
            }
            else {
                tempNode = returnList = new ListNode(list1.val);
            }
            list1 = list1.next;
            
        } 
        else {
            if (tempNode) {
                tempNode.next = new ListNode(list2.val);
                tempNode = tempNode.next;
            }
            else {
                tempNode = returnList = new ListNode(list2.val);  
            }
            list2 = list2.next;  
        }
    }
    
    if (list1) tempNode.next = list1;
    if (list2) tempNode.next = list2;

    return returnList;
};
