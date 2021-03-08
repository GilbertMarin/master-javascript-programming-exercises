// Write your function here
function areValidCredentials(val1, val2){
    if(val1.length > 3 && val2.length >= 8){
        return true;
    }
    return false;

}


var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero