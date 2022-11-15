// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//PREP Method

// P - Parameters
// We will be given two strings.  One will be input into the function as 'str' and the other as 'ending'
// No mention of null, numbers, booleans, or anything else.  Assumption is that inputs will always be a string of characters.

// R - Returns
// We are expecte to return true or false.
// For this to be true, we need to ensure that the characters in the 'ending' string, match the characters at the end of the 'str' string.

// E - Examples
// Given string abc, and bc, this should return true
// Given string abc, and d, this should return false

// P - Psuedocode
// 1.) Count number of characters in str, and number of characters in ending.
// 2.) Find the difference between those two numbers.
// 3.) Using the difference, subract that number of chars off of str and store the newly modified str
// 4.) Compare the newly modified str and ending, if they match, return true, if not, return false.

function solution(str, ending){
    // Count the number of chars in str, and number of chars in ending
    let strLength = str.length
    let endingLength = ending.length

    let differenceOfChars = strLength - endingLength // Find difference of number

    let compareStr = str.slice(differenceOfChars)// Subract that number of chars off of str and store the newly modified str

    //Compare the newly modified str and ending, if they match, return true, if not, return false.
    if (compareStr == ending){
      return true
    } else {
      return false
    }
  
  }