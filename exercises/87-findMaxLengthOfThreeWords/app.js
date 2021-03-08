// Write your function here
// Write your function here
function findMaxLengthOfThreeWords(a, b, c){
    if(a.length < b.length){
        if(b.length < c.length){
            return c.length;
        }
        return b.length;
    }
    else{
        if(a.length < c.length){
            return c.length;
        }
        return a.length;
    }
    
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3