class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = new Node(val)
    if (!this.root) return this.root = node
    let curr = this.root
    
    while (curr) {
      if (node.val < curr.val) {
        if (!curr.left) {
          curr.left = node
          return this
        } else {
          curr = curr.left
        }
      } else {
        if (!curr.right) {
          curr.right = node
          return this
        } else {
          curr = curr.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr=this.root) {
    let node = new Node(val)
    //if no nodes yet, make node a root
    if (!curr) return this.root = node
     
    //if node value is less then current value
    if (node.val < curr.val) {
      //and current node doesn't have a left child
      if (!curr.left) {
        //insert the node as a left child of current and return the tree
        curr.left = node
        return this
      }
      // move on to a next left node and start over
      return  this.insertRecursively(val, curr.left)
    }
    
    //if node value is greater than current value
    if (node.val > curr.val) {
      //and current doesn't have the right child
      if (!curr.right) {
        //insert the node as a right child of current and return the tree
        curr.right = node
        return this
      }

      //otherwise move on to the next right child and start over
      return this.insertRecursively(val, curr.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curr = this.root
    while (curr) {
      if (val === curr.val) return curr
      if (val < curr.val) {
        curr = curr.left
      }
      if (val > curr.val) {
        curr = curr.right
      }
    }
  }
  
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr=this.root) {
    if (!curr) return undefined
    if (val === curr.val) return curr
    if (val < curr.val) return this.findRecursively(val, curr.left)
    if (val > curr.val) return this.findRecursively(val, curr.right)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = []
    //if no root, array is empty
    if (!this.root) return []
    //adding root node to the stack
    let stack = [this.root]
    //while there are elements in stack:
    while (stack.length) {
      //taking the top element from stack
      let node = stack.pop()
      //pushing it's value to the array, 
      arr.push(node.val)
      //and check if and check if it has children
        //if so adding right to the stack
      if (node.right) stack.push(node.right)
        //then adding left to stack
      if (node.left) stack.push(node.left)
    }
    return arr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = []
    //if no root, array is empty
    if (!this.root) return []
    //adding root node to the stack
    let stack = []
    let curr = this.root
    //while there are elements in stack:
    while (stack.length || curr) {

      //while node exist
      while(curr) {
        //adding on top of stack
        stack.push(curr)
        //move to the next left node
        curr = curr.left
      }

      //removing from top of stack 
      curr = stack.pop()
      //adding it's value to array
      arr.push(curr.val)
      //moving to the next right
      curr = curr.right
    } 
    return arr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    //if no root, array is empty
    if (!this.root) return []
    const arr = []

    const traverse = (node) => {
      //return null if no node
      if (!node) return null
      //check left first
      if (node.left) traverse(node.left)
      //then right
      if (node.right) traverse(node.right)
      arr.push(node.val)
    }
    traverse(this.root)
    return arr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return []
    let arr = []
    let queue = [this.root]
    //while there are elements in the queue:
    while (queue.length) {
      //remove first element from the queue
      let curr = queue.shift()
      //add it's value to the array
      arr.push(curr.val)
      //add it's children to the queue(if they exist)
      for (let child of [curr.left, curr.right]) {
        if (child) queue.push(child)
      }
    }
    return arr
  }

  /** Further Study!
   * 
   * 
   * 
   * 
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}
module.exports = BinarySearchTree;
