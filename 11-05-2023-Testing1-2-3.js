// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an array of stings.

// R - Returns
// We will be expected to return an array of strings.

// E - Examples
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// P - Psuedocode
// 1.) for loop, for every item in the given array
// 2.) append a new array with the iteration number, a colon, and the string
// 3.) return that new array.
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

var number = function(array){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`${i+1}: ${array[i]}`);
        
    }
    return newArray
  }