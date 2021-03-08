// Write your function here
function getIndexOf(val1, word){
    let cont = 0;

    for(let i = 0; i < word.length; i++){
        if(val1 == word[i]){
            cont ++;
        }
    }
     
    return cont;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
