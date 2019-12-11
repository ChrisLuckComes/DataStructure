import Node from "./node";

export default class CircleLinkedList {
  head: Node;
  constructor() {
    this.head = new Node("head");
    this.head.next = this.head;
  }
  find(item) {
    let current = this.head;
    while (current.element !== item && current.next.element != "head") {
      current = current.next;
    }
    return current;
  }
  insert(newElement, target) {
    let current = this.find(target);
    current.next = new Node(newElement);
  }
  log() {
    let current = this.head;
    while (current.next == null && current.next.element != "head") {
      console.log(current.next.element);
      current = current.next;
    }
  }
}
