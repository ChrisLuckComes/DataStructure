import LinkedList from "./src/LinkedList/linkedList";

let linkedList = new LinkedList();

linkedList
  .insertAfter(1, "head")
  .insertAfter(2, 1)
  .insertAfter(3, 2);

linkedList.log();

setTimeout(() => {
  console.log("---");
  linkedList.back(2, 1);

  linkedList.log();
}, 1000);

console.log("---");

linkedList.reverse();
