// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given two intergers.  Intergers can be negative and positive.

// R - Returns
// We will be expected to return the sum of those numbers and every number inbetween.  If the numbers are the same, just return that number.

// E - Examples
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// P - Psuedocode
// 1.) check to see if the numbers are equal, and if they are, return that number.
// 2.) else, find the lowest number and find the highest number.
// 3.) calculate how many numbers are inbetween these two numbers.
// 4.) iterate that many times, adding up the numbers as you go along.

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function getSum(a, b){
    //set blank array
    let arr = []

    // case for if both numbers are equal
    if (a == b) {
        console.log(`CASE 0: Both numbers were the same.`)
        return a;
   } else if (a <= b){  //case for if the first number is less than the second number
    for (let i = a; i <= b; i +=1){
        arr.push(i)
        // console.log(`CASE 1: We were given ${a} and ${b}.  The array looks like this ${arr}`)
        //this gives us an array of the numbers and every number inbetween in order and sets it as "arr"
    }
 } else {
        for (let i = b; i <= a; i +=1){  //case for if second number is less than first number
            arr.push(i)
            // console.log(`CASE 2: We were given ${b} and ${a}. The array looks like this ${arr}`)  
        //this gives us an array of the numbers and every number inbetween in order and sets it as "arr"
        }

    }
    console.log(`the final array looks like this ${arr}`)
    return (arr.reduce((a,b) => a + b, 0))  //this adds up every item in the array.
}
