// Write a JavaScript program to find the maximum of two numbers.

let numb1 = 150;
let numb2 = 250;
let maximum = max(numb1 , numb2);
function max(numb1, numb2){
    if (numb1 > numb2) {
        
    return numb1;
    }
    else {
        return numb2;
    }
}
console.log(maximum);