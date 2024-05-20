// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

// return [4,5,7,2,3]

{let arr = [2,3,4,5,7];

function rotation (arr, rotation) {
    for(let i = 0; i < rotation; i++) {
        let ele = arr.pop();
        arr.unshift(ele);
    }
    return arr;
}

console.log(rotation(arr, 3));}


{// Write the code given If two strings are anagrams of one another, then return true.

let firstWord = "Deepak";
let secondWord = "Aman";

function isAnagrams(firstWord, secondWord) {
    let a = firstWord.toLowerCase();
    let b = secondWord.toLowerCase();

    a = a.split("").sort().join();
    b = b.split("").sort().join();

    return a === b;
}

console.log(isAnagrams(firstWord, secondWord));}


{// 10. Write the code to find the vowels

let str="Deepak"

function isVowel(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i of str.toLowerCase()) {
        if(vowels.includes(i)) {
            count++;
        }
    }
    return count;
}

console.log(isVowel(str));

// 11. In JavaScript, how do you turn an Object into an Array []?
let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));}


{
    // Given an input number A, find Ath fibonacci number.
const A = 3;

function fib(A) {
    if(A <= 1) return A;
    return fib(A-2) + fib(A-1);
}

console.log("Fib" + fib(A));
}


// Reverse String
{
    function reverseString(str) {
        // let resStr = "";
        // for(let i = str.length - 1; i >= 0; i--) {
        //         resStr += str[i];
        // }
        // return resStr;

        return str.split("").reverse().join("")
    }
}
const res = reverseString("Interview, Happy")
console.log("Reverse String => " + res);


// Longest word in a sentence

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
    for (let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;

}

const reqWord = longestWord("I love coding in Javascript");
console.log("Longest Word => " + reqWord);

//Palindrome

function palindrome(str) {
    // str.toLowerCase();
    // let i = 0;
    // let j = str.length - 1;
    // while(i < j) {
    //     if(str[i] != str[j]) {
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    // return true;


    let reversedString = str.split("").reverse().join("");
    return str === reversedString;
}

const isPalindrome = palindrome("racecar");
console.log("isPalindrome => " + isPalindrome);


// unique elements

function unique(numArr) {
    const unique = [];
    for(let i = 0; i < numArr.length; i++) {
        if(unique.indexOf(numArr[i]) === -1) {
            unique.push(numArr[i]);
        }
    }
    return unique;

    // return [...new Set(numArr)];
}

console.log("unique elements => " + unique([1, 2, 3, 4, 2, 5, 6, 3, 8]));


// Anagrams

const isAnagram = (str1, str2) => {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

console.log("isAnagram => " + isAnagram("listen", "silent"))


// number of vowels

function countVowels(str) {
    const vowels = ['a', 'e', 'o', 'i', 'u'];
    let counter = 0;
    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            counter++;
        }
    }
    return counter;
}

console.log("Number Of Vowels => " + countVowels("Hello, World!"))

// Prime Numbers

function isPrime(num) {
    for(let i = 2; i <= num / 2; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("is Prime => " + isPrime(7));

// Factorial

function factorial(num) {
    if(num === 0) return 1;
    return num * factorial(num-1);
}

console.log("Factorial => " + factorial(5));


// Remove white Spaces

function removeWhiteSpaces(str) {
    let res = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " "){
            res += str[i];
        }
    }
    return res;
    // return str.replace(/\s/g, "");
}

console.log("removeWhiteSpaces => " + removeWhiteSpaces("Interview  ,   Happy"));


{
    const numbers = [1, 2, 3];
    numbers[9] = numbers;
    console.log(numbers);
}


//sort array

function swap(arr, i, j) {
    let temp = 0;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

const sortedArray = sort([3, 16, 1, 8, 23]);
console.log("sorted Array => " + sortedArray);


// Find names

const users = [
    {
        id: 4,
        name: 'Arp',
        isActive: false,
        age: 23
    },
    {
        id: 4,
        name: 'mis',
        isActive: true,
        age: 21
    },
    {
        id: 4,
        name: 'arpana',
        isActive: false,
        age: 25
    },
    {
        id: 4,
        name: 'samarpan',
        isActive: false,
        age: 29
    }
];

const ageSum = users.reduce((acc, curr) => {
    acc += curr.age;
    return acc;
}, 0)

console.log("Sum of Age => " + ageSum);


const maxAge = users.reduce((acc, curr) => {
    if(curr.age > acc) {
        acc = curr.age;
    }
    return acc;
}, 0);

console.log("Maximum Age => " + maxAge);

const ageObj = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age]++;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(ageObj);

// level 1
const names = [];
// for(let i = 0; i < users.length; i++) {
//     names.push(users[i].name);
// } 
// console.log(names);


//level 2
// users.forEach((user) => {
//     names.push(user.name)
// })
// console.log(names);

// users.forEach((user) => {
//     if(user.isActive) {
//         names.push(user.name)
//     }
// })
// console.log(names);

// const arr = users.filter((user) => user.isActive).map((e) => {
//     names.push(e.name);
// });
// console.log(names);

// const sortArr = users.sort((a, b) => b.age-a.age)
// console.log(sortArr);

// const firstName = users.filter((x) => x.age < 29).map((e) => e.name);

const firstName = users.reduce((acc, curr) => {
    if(curr.age < 29) {
        acc[curr.age] = (curr.name);
    }
    return acc;
}, {})

console.log(firstName);

console.log({...users[0], name: 'Ayush'})