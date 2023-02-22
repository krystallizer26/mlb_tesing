"use strict";
exports.__esModule = true;
exports.hello = void 0;
var world = "world";
function hello(who) {
    if (who === void 0) { who = world; }
    console.log("YASSSSS");
    return "Hello ".concat(who, "! ");
}
exports.hello = hello;
function merge(collection_1, collection_2) {
    var resultArray = [];
    var pos1 = 0;
    var pos2 = 0;
    while (pos1 <= collection_1.length && pos2 <= collection_2.length) {
        console.log("Comparing... ".concat(collection_1[pos1], " @").concat(pos1, " VS ").concat(collection_2[pos2], " @").concat(pos2));
        if (collection_1[pos1] === undefined)
            return resultArray.concat(collection_2.slice(pos2, collection_2.length));
        if (collection_2[pos2] === undefined)
            return resultArray.concat(collection_1.slice(pos1, collection_1.length));
        if (collection_1[pos1] < collection_2[pos2]) {
            console.log("Pushing: ".concat(collection_1[pos1], " from A1[").concat(pos1, "]"));
            resultArray.push(collection_1[pos1]);
            pos1++;
        }
        else {
            console.log("Pushing: ".concat(collection_2[pos2], " from A2[").concat(pos2, "]"));
            resultArray.push(collection_2[pos2]);
            pos2++;
        }
    }
    return resultArray;
}
var arr1 = [0, 2, 6, 8, 12, 56];
var arr2 = [4, 7, 12, 15, 29, 43];
var resultArray = merge(arr1, arr2);
console.log(resultArray);
