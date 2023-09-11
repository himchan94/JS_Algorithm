# Binary Heap


### Objectives
- Define what a binary heap is
- Compare and contrast min and max heaps
- Implement basic methods on heaps
- Understand where heaps are used in the real world and what other data structures can be constructed from heaps

### What is a Binary Heap?
- Very similar to a binary search tree, but with some different rules.
- ***In a MaxBinaryHeap***, parent nodes are always larger than child node.
- ***In MinBinaryHeap***, parent nodes are always smaller than child nodes

(오른쪽 왼쪽 구분이 없다.)


### MAX BINARY HEAP
- Each parent has at most two child nodes
- The value of each parent node is ***always*** greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- ***A binary heap is as compact as possible.*** All the children of each node are as full as they can be and left children are filled out first.

### Why do we need to know this?
- Binary Heaps are used to implement Priority Queues, which are very commonly used data structures

### Logic
- For any index of an array n...
- The left child is stored at 2n + 1
- The right child is at 2n + 2

***위 점화식으로 자식-부모의 위치를 찾을 수 있다***
부모의 index는 (n-1)/2의 floored한 값이다. (4.5 -> 4)


### Big O

- Insertion O(logN)
- Delete O(logN)
- Search O(N) // n/2지만 n으로 표기한다!
