// Write your function here
function isOddLength(word){
    if(parseInt(word.length)%2!=0){
        return true
    }
    return false;
}


var output = isOddLength('special');
console.log(output); // --> verdadero