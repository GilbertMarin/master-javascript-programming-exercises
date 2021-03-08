// Write your function here
function isEvenLength(word){
    if(parseInt(word.length%2==0)){
        return true;
    }
    return false;
}

var output = isEvenLength('wow');
console.log(output); // --> falso