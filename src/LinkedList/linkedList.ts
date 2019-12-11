import Node from "./node";

import { clone } from "lodash";

export default class LinkedList {
  head: Node;
  constructor() {
    this.head = new Node("head");
  }
  find(item) {
    let current = this.head;
    while (current.element != item) {
      current = current.next;
    }
    return current;
  }
  insertAfter(newElement, target) {
    let newNode =
      newElement instanceof Node ? newElement : new Node(newElement);
    let current = target instanceof Node ? target : this.find(target);
    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;
    return this;
  }
  insertBefore(newElement, target) {
    let newNode =
      newElement instanceof Node ? newElement : new Node(newElement);
    let current = target instanceof Node ? target : this.find(target);
    newNode.next = current;
    newNode.prev = current.prev;
    current.prev.next = newNode;
    return this;
  }
  findPrevious(item) {
    let current = this.head;
    while (current.next != item && current.next.element != item) {
      current = current.next;
    }
    return current;
  }
  remove(item: any | Node) {
    // let prevNode = this.findPrevious(item); //双向链表不需要再查找前驱节点
    let current = item instanceof Node ? item : this.find(item);
    if (current.next != null) {
      current.next.prev = current.prev;
    }
    current.prev.next = current.next;
    current.next = null;
    current.prev = null;
  }
  findLast() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }
  reverse() {
    let last = this.findLast();
    while (last.prev != null) {
      console.log(last);
      last = last.prev;
    }
    console.log(last);
  }
  log() {
    let n = this.head;
    while (n.next != null) {
      console.log(n);
      n = n.next;
    }
    console.log(n);
  }
  advance(element, num: number) {
    let node = this.find(element);
    let temp = clone(node);
    while (num > 0 && temp.prev != null && temp.prev.element !== "head") {
      temp = temp.prev;
      --num;
    }
    this.remove(node);
    this.insertBefore(node, temp);
  }
  back(element, num) {
    let node = this.find(element);
    let temp = clone(node);
    while (num > 0 && temp.next != null) {
      temp = temp.next;
      --num;
    }
    this.remove(node);
    this.insertAfter(node, temp);
  }
}
