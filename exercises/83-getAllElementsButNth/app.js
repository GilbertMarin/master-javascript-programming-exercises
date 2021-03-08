// Write your function here
function getAllElementsButNth(array, nth){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(i!=nth){
            newArray.push(array[i]);
        }

    }

    return newArray;

}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']