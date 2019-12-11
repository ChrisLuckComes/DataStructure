"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var lodash_1 = require("lodash");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = new node_1["default"]("head");
    }
    LinkedList.prototype.find = function (item) {
        var current = this.head;
        while (current.element != item) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.insertAfter = function (newElement, target) {
        var newNode = newElement instanceof node_1["default"] ? newElement : new node_1["default"](newElement);
        var current = target instanceof node_1["default"] ? target : this.find(target);
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
        return this;
    };
    LinkedList.prototype.insertBefore = function (newElement, target) {
        var newNode = newElement instanceof node_1["default"] ? newElement : new node_1["default"](newElement);
        var current = target instanceof node_1["default"] ? target : this.find(target);
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        return this;
    };
    LinkedList.prototype.findPrevious = function (item) {
        var current = this.head;
        while (current.next != item && current.next.element != item) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.remove = function (item) {
        // let prevNode = this.findPrevious(item); //双向链表不需要再查找前驱节点
        var current = item instanceof node_1["default"] ? item : this.find(item);
        if (current.next != null) {
            current.next.prev = current.prev;
        }
        current.prev.next = current.next;
        current.next = null;
        current.prev = null;
    };
    LinkedList.prototype.findLast = function () {
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.reverse = function () {
        var last = this.findLast();
        while (last.prev != null) {
            console.log(last);
            last = last.prev;
        }
        console.log(last);
    };
    LinkedList.prototype.log = function () {
        var n = this.head;
        while (n.next != null) {
            console.log(n);
            n = n.next;
        }
        console.log(n);
    };
    LinkedList.prototype.advance = function (element, num) {
        var node = this.find(element);
        var temp = lodash_1.clone(node);
        while (num > 0 && temp.prev != null && temp.prev.element !== "head") {
            temp = temp.prev;
            --num;
        }
        this.remove(node);
        this.insertBefore(node, temp);
    };
    LinkedList.prototype.back = function (element, num) {
        var node = this.find(element);
        var temp = lodash_1.clone(node);
        while (num > 0 && temp.next != null) {
            temp = temp.next;
            --num;
        }
        this.remove(node);
        this.insertAfter(node, temp);
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
