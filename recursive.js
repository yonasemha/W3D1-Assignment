"use strict"
function min(array) {
    let minimum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
    }
    return minimum;
}
let arr1 = [6, 5, 3, 1, 2, 4]
console.log(min(arr1));