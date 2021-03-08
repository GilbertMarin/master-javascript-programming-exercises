// Write your function here

function countAllCharacters (str) {
    let newObj = {};
    for (let i=0; i<str.length; i++) {
        //newObj[str[i]] = (isNaN(newObj[str[i]]) ? 1 : newObj[str[i]] + 1);
        if (newObj[str[i]] == undefined) newObj[str[i]] = 1;
        else newObj[str[i]]++;
    }
    return newObj;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2} 