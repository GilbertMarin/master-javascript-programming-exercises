// Write your function here
function findMinLengthOfThreeWords(a, b, c){
    if(a.length >b.length){
        if(b.length > c.length){
            return c.length;
        }
        return b.length;
    }
    else{
        if(a.length > c.length){
            return c.length;
        }
        return a.length;
    }
    
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1