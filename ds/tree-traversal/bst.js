function Node(val) { 
	this.val = val;
	this.right = null;
	this.left = null;	
}

function BstTree() {
	this.root = null;
}

var tree = new BstTree(); //BstTree {root: null}

tree.root = new Node(10); //Node {val: 10, right: null, left: null}
tree.root.left = new Node(15); //Node {val: 15, right: null, left: null}
tree.root.right = new Node(13); //Node {val: 13, right: null, left: null}

// BstTree {root: Node}
// root: Node
// left: Node {val: 15, right: null, left: null}
// right: Node {val: 13, right: null, left: null}
// val: 10
