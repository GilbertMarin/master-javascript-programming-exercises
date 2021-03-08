// Write your function here

function removeElement (array, discarted) {
    let newArray = [];
    for (let i=0; i<array.length; i++) {
        if (array[i] != discarted) {
           newArray.push(array[i]); 
        }
    }
    return newArray;
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]