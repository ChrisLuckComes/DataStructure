export default class Node {
  element: any;
  next: Node | null;
  prev: Node | null;
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}
