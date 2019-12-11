"use strict";
exports.__esModule = true;
var linkedList_1 = require("./src/LinkedList/linkedList");
var linkedList = new linkedList_1["default"]();
linkedList
    .insertAfter(1, "head")
    .insertAfter(2, 1)
    .insertAfter(3, 2);
linkedList.log();
setTimeout(function () {
    console.log("---");
    linkedList.back(2, 1);
    linkedList.log();
}, 1000);
console.log("---");
linkedList.reverse();
