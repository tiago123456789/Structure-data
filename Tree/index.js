/**
 * ### Tree data structure concepts:
 * Root: the top node n a tree
 * Child: a node directly connected to another node when moving away from the root
 * Parent: the converse notion of a child
 * Siblings: a group of nodes with an same parent 
 * Leaf: a node with no children
 * Edge: the connection between one node and another.
 * 
 * ### Use cases
 * HTML DOM
 * Networking routing
 * Abstract syntrax tree
 * Artificial intelligence
 * Folders in operating systems
 * Computer file systems
 */

/**
 * ## Binary tree data structure concepts:
 * Every parent node has at most two children
 * Every node to the left of parent node is always less than the parent
 * Every node to the right of a parent node is always greater than the parent
 *
 * BIG O of BST
 * Insertion O(log n)
 * Searching O(log n)
 */

class Node {

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Version using recursion
    find(value, currentNode = this.root) {
        if (!this.root) return undefined;
        if (this.root  && this.root.value === value) return this.root;
        if (!currentNode) return undefined;
        if (value === currentNode.value) return currentNode;

        if (value < currentNode.value) {
            return this.find(value, currentNode.left)
        }

        if (value > currentNode.value) {
            return this.find(value, currentNode.right)
        }
    }

    // Version using while
    // find(value) {
    //     if (!this.root) return undefined;
    //     if (this.root  && this.root.value === value) return this.root;

    //     let currentNode = this.root;
    //     while(true) {
    //         if (!currentNode) return undefined;
    //         if (currentNode.value === value) return currentNode;
    //         if (value < currentNode.value) {
    //             if (!currentNode.left) return undefined;
    //             if (currentNode.left.value === value) {
    //                 return currentNode.left
    //             }

    //             currentNode = currentNode.left;
    //         } else if (value > currentNode.value) {
    //             if (!currentNode.right) return undefined;
    //             if (currentNode.right === value) {
    //                 return currentNode.right
    //             }
    //             currentNode = currentNode.right;
    //         }
    //     }
    // }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
            return;
        }

        let currentNode = this.root;
        let previousNode;
        while (true) {

            if (value < currentNode.value) {
                if (!currentNode.left) {
                    previousNode = currentNode;
                    const newNode = new Node(value);
                    currentNode = newNode
                    previousNode.left = newNode
                    break;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.left;
                }
            }

            if (value > currentNode.value) {
                if (!currentNode.right) {
                    previousNode = currentNode;
                    const newNode = new Node(value);
                    currentNode = newNode;
                    previousNode.right = newNode
                    break;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.right;
                }
            }

        }
    }
}

// Teacher solution
// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         if (!this.root) {
//             this.root = new Node(value)
//             return;
//         }

//         let currentNode = this.root;
//         while (true) {
//             if (value === currentNode.value) return undefined;

//             if (value < currentNode.value) {
//                 if (currentNode.left === null) {
//                     currentNode.left = new Node(value);
//                     return;
//                 }
//                 currentNode = currentNode.left;
//             }

//             if (value > currentNode.value) {
//                 if (!currentNode.right) {
//                     currentNode.right =  new Node(value);
//                     return;
//                 } 
//                 currentNode = currentNode.right;
//             }

//         }

//     }
// }

const bst = new BST();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(4)
bst.insert(6)
bst.insert(12)
bst.insert(17)
bst.insert(20)
bst.insert(19)


// bst.root = new Node(10);
// bst.root.left = new Node(5);
// bst.root.right = new Node(15);
// bst.root.left.left = new Node(2);
// bst.root.left.right = new Node(7);
// bst.root.right.left = new Node(12);
// bst.root.right.right = new Node(17);



console.log(bst)


console.log(bst.find(18))

