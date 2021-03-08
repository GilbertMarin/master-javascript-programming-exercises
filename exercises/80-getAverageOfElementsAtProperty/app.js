// Write your function here
function getAverageOfElementsAtProperty(obj){
    let sum = 0;
    for(let i = 0; i < obj.key.length; i++){
        sum = sum + obj.key[i];
    }
    if(sum != 0){
        return sum/obj.key.length;
    }
    return 0;
    
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2