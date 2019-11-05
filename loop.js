"use strict"
function sumArray(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.pop() + sumArray(array);
}
console.log(sumArray([1, 2, 3]))