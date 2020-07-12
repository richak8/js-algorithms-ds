class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; 
    }
    pop() {
       if(!this.head) return undefined;
       let current = this.head; 
       let newTail = current;
       while(current.next !== null) {
            newTail = current;
            current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       if(this.length === 0) {
           this.head = null;
           this.tail = null;
       }
       return this;
    }
    shift() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    unshift(val) {
       let newNode = new Node(val);
       if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
       } else {
        newNode.next = this.head;
        this.head = newNode;
       }
       this.length++;
       return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let currentIndex = 0;
        let current = this.head;
        while(currentIndex !== index) {
            current = current.next;
            currentIndex++;
        }
        return current;
    }
    set(index, val) {
      let foundNode = this.get(index);
      if(foundNode) {
        foundNode.value = val;
        return true;
      }
      return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let tempNode = prev.next;
        prev.next = newNode;
        newNode.next = tempNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let prevNode = this.get(index-1);
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--;
        return removeNode;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        const result = [];
        let current = this.head;
        while(current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}