function getLengthOfTwoWords(word1, word2) {
  // your code here
    let suma = 0;
    suma = parseInt(word1.length) + parseInt(word2.length);

    return suma;

}


var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9