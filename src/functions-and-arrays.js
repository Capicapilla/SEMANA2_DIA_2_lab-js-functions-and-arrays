// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maxOfTwoNumbers(5,0));


// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
if (words.length === 0){
    return null;
}

let longestWords = words [0];

for (let i = 1; i < words.length; i++) {
if (words[i].length > longestWords.length) {
    longestWords = words [i];
}
}
return longestWords;

}

console.log(words().charAt(0));

  


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
if (numbers.length === 0) {
    return 0;
}
if (numbers.length === 1) {
    return numbers [0];
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum+= numbers [i];
}
return sum;

}

console.log(sumNumbers(numbers));
console.log(sumNumbers([]));
console.log(sumNumbers([5]));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (numbersArray.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    const average = sum / numbersArray.length;
    return average;
}
console.log(averageNumbers(numbers2));
console.log(averageNumbers ([]));
console.log(averageNumbers([8]));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, findElements) {
if (wordsArray.length === 0) {
    return null;
}
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === findElements) {
        return true;
    }
}
return false

}

console.log(doesWordExist (words2, "machine"));