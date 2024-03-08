# Cycle Finding

Useful for finding a cycle in a linked-list

## Algorithm

1. Initialise 2 pointers `slow` and `fast`
2. `slow` moves 1 node at a time, while `fast` moves 2 nodes at a time
3. If `slow == fast`, there is a cycle
4. If `fast == null`, we reached the end of the list, and there is no cycle

## Code

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def hasCycle(self, head: Optional[ListNode]) -> bool:
    if head is None: # handle empty list
        return False

    # initialise slow and fast pointers
    slow = head
    fast = head.next

    # while fast pointer has not reached the end of the list
    # also need to ensure fast.next is not None, so that we do not get a NoneType error
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next

        # fast caught up with slow
        if slow == fast:
            return True

    # reached end of list without any cycle
    return False
```

## Resources

- https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/
- https://en.wikipedia.org/wiki/Cycle_detection