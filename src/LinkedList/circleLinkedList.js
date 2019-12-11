import Node from "./node";
var CircleLinkedList = /** @class */ (function () {
    function CircleLinkedList() {
        this.head = new Node("head");
        this.head.next = this.head;
    }
    CircleLinkedList.prototype.find = function (item) {
        var current = this.head;
        while (current.element !== item && current.next.element != "head") {
            current = current.next;
        }
        return current;
    };
    CircleLinkedList.prototype.insert = function (newElement, target) {
        var current = this.find(target);
        current.next = new Node(newElement);
    };
    CircleLinkedList.prototype.log = function () {
        var current = this.head;
        while (current.next == null && current.next.element != "head") {
            console.log(current.next.element);
            current = current.next;
        }
    };
    return CircleLinkedList;
}());
export default CircleLinkedList;
