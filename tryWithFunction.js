// "use strict";
// /* global Stack */
// class SymbolBalancer {
//     constructor(text) {
//         this.text = text;
//         this.stack = new Stack();
//     }

    function isBalanced(text) {
        // TODO impelement code here
        let array = text.split("");
        let stack = [];
        //for loop the array
        for (let i = 0; i < array.length; i++) {
            //check if meet the open delimeters and push to stack
            if (array[i] === "{" || array[i] == "(" || array[i] === "[") {
                stack.push(array[i]);
                // check if meet the closed delimeters
            } else if (array[i] == ")" || array[i] == "}" || array[i] == "]") {
                //if they paired the open and closed remove(pop) from stack
                if (stack[stack.length - 1] == "{" && array[i] == "}" ||
                    stack[stack.length - 1] == "[" && array[i] == "]" ||
                    stack[stack.length - 1] == "(" && array[i] == ")") {
                    stack.pop();
                } else {
                    return false;
                }

            }
        }
        // if the stack is empty that means balanced
        return (stack.length == 0) ? true : false;
    }

let text = `
function sum(array) {
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}
function min(array) {
    if (array.length > 1) {
        let other = min(array.splice(1));
        if (other < array[0]) {
            return other;
        }   
    } 
    return array[0];
}
}
`;
console.log(isBalanced(text))