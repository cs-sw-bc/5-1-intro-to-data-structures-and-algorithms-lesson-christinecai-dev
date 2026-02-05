Data Structure and Algorithms
- organize data
- fetch data easily
- read
- update
- delete (CRUD functions)

Types of data structure
1. Arrays
2. Linked list
3. Trees
4. Hash table
5. Stack (Arrays)
6. Queues (Arrays)

Arrays
- continuous blocks of data in memory
- access through index
- start at 0
- last index is n-1
- add or remove or change anywhere if you know the index

Disadv of Arrays/Lists
- fixed size

Linked List
- dynamic (add/remove as needed)
- slower and lots of operations to be done and more difficult to code
- nodes and connected using connections
- have two compartments (first: value you want to store; second: address to the next node)
- no more elements: put none or null as the last element of the array
- no space wasted


Doubly linked list
- three boxes
- first value, second next address, third previous address


Trees
- represents a hierarchy
- upside down tree like a family tree
- DOM tree: document object model


Bindary Search Tree
- make searching easier
- each node has exactly two children (max 2 children, 0,1,2 child)
- left side children (lesser value than the parent)
- right side children (greater value than the parent)
- divide the number of elements into half at every level
- look at half of the lements based on whether something is smaller or bigger


Stacks
- LIFO: last in and first out data structure
- like a Pringles box
- function stack
- to do undo redo
- add something to the stack: it's called pushing
- remove: pop (remove the top most element)


Queues
- FIFO: first in, first out data structure
- book an uber-- go to a queue in the cloud (first person gets served first)
- add an element: enqueuing
- cut off the head of the array: dequeuing

command Z: undo operation


Algorithms-- methodology to work with the data structure
- find/insert/delete

1. time complexity (how long/longer will an operation take as input size increases)
- unit: O() (order of)

2. space complexity
- not an issue nowadays
- how much more space is needed as algorithm grows
- unit: O() (order of)

- O(n): order of n: number of efforts equal to the length (searching in an unsorted array)
- O(1): order of 1 which is the best possible complexity (find the specific value/ smallest of a sorted array like the 5th)(fastest)fixed time
- O(logn): find the value in a binary tree (max would be how many levels are there in the tree)(faster than 0(n))
- use for(i=0; i <100; i++){
}-- complexity is O of n
- O of n squared: 2 for loops--nested for loop (i, k)
- O if n cubed: 3 for loops nested
- O(nlogn): worse than O(n), better O(n squared)
- O (2^n): exponential (most time consuming)
- 6 values


Sorting
- arranging an array in a asc/desc
- bubble sort
- make searching easier

Bubble Sort
- compare two elements at a time and switch them
- if do it n times, it would be sorted