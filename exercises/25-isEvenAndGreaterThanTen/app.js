// Write your function here
function isEvenAndGreaterThanTen(num){
    if(num > 10 && num%2 == 0){
        return true;
    }
    return false;
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> falso