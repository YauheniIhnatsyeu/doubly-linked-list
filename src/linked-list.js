const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null; // это первый добавленный
        this._tail = null; // последний добавленный
    }

    append(data) {
        if (this.length == 0) {
            var node = new Node(data);
            node.next = node;
            node.prev = node;
            this._head = node;
            this._tail = node;
            this.length++;
            //return this;
        } else {
            var node = new Node(data, this._tail, this._head);
            this.length++;
        }
        this._tail.next = node;
        this._head.prev = node;
        this._tail = node;
        return this;
    }

    head() {
        return this._head === null ? null : this._head.data;
    }

    tail() {
        return this._tail === null ? null : this._tail.data;
    }

    at(index) {
        var i = 0;
        var temp = this._head;
        if (index === 0) return this._head.data;
        if (index == this.length - 1) return this._tail.data;
        while (i++ != index) {
            temp = temp.next;
        }
        return temp.data;
    }

    insertAt(index, data) {
        if (this.length == 0) this.append(data);
        var i = 0;
        var temp = this._head;
        while (i++ != index) {
            temp = temp.next;
        }

        var node = new Node(data, temp.prev, temp);
        temp.prev.next = node;
        this.length++;
        temp.prev = node;
        if (index == 0) {
            this._head = node;
        } else if (index == this.length - 1) {
            this._tail = node;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        var i = 0;
        var temp = this._head;
        while (i++ != index) {
            temp = temp.next;
        }
        this.length--;
        var prev = temp.prev;
        var next = temp.next;
        next.prev = temp.prev;
        prev.next = temp.next;
        return this; //32 34 47
    }

    reverse() {
        var temp = this._head;
        var i = 0;
        do {
            temp.next = [temp.prev, temp.prev = temp.next][0];
            temp = temp.prev;
        } while (++i < this.length);
        this._head = [this._tail, this._tail = this._head][0];
        return this; //47 34 32

    }

    indexOf(data) {
        var temp = this._head;
        var i = 0;
        do {
            if (temp.data == data) return i;
            temp = temp.next;
        } while (i++ < this.length);
        return -1;
    }
}

module.exports = LinkedList;