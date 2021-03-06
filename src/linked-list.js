const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        if (this.length > 0) {
            return this._head.data;
        }
    }

    tail() {
        if (this.length > 0) {
            return this._tail.data;
        }   
    }

    at(index) {

        for (var i = 0; i < this.length; i++) {
            if (i === index) {
                return this._head.data[i];
            }
        }
    }

    insertAt(index, data) {
        this.insertBefore(data, this.children[index]);
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        for (var i = 0; i < this.length; i++) {
            if (i === index) {
                this.removeChild(i);
            }
        }
    }

    reverse() {
        // this.reverse();       
    }

    indexOf(data) {
        var curr = this._head;
        var ind = 0;
        while (curr) {
            if (curr.data === data) {
                return ind;
            } else {
                curr = curr.next;
                ++ind;
            }
        }
        
        return -1;
    }
}

module.exports = LinkedList;