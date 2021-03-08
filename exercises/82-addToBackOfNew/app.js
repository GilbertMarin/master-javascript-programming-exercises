// Write your function here
function addToBackOfNew(input, num){
    let newArray = [];
    for(let i = 0; i < input.length; i++){
        newArray.push(input[i]);
    }
    newArray.push(num);
    return newArray
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]