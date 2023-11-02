// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an array of intergers at least 4 items long.  Intergers will be positive.  No floats.

// R - Returns
// We will be expected to return an interger.  It should be the sum of the two smallest intergers in the array.

// E - Examples
//  [19, 5, 42, 2, 77]  =>  7
//  [5, 8, 12, 19, 22]  =>  13

// P - Psuedocode
// 1.) Iterate through the array to find the smallest value then store it in a variable, then delete it in the array.
// 2.) Do that again.
// 3.) Add up the stored values and return in.
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function sumTwoSmallestNumbers(numbers) {  
    let min1 = Math.min(...numbers)
    minLocation = numbers.indexOf(min1)
    numbers.splice(minLocation, 1)

    let min2 = Math.min(...numbers)

    return (min1+min2)
  }