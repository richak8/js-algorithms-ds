class Node{
	constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}


class BstTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(current.val === value) { return undefined; }
                if(current.val < value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;  
                } else if(current.val > value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
            }
        }
	}

	find(value) {
        if(this.root === null) return false;
        let current = this.root, found = false;
		while(current && !found) {
            if(current.val < value) {
                current = current.right; 
            } else if(current.val > value) {
                current = current.left;
            } else {
                return true;
            }
        }
		return false;
    }
    BFS() {
        const data = [], queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}
