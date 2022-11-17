// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// PREP Method

// P - Parameters
// We're going to be given a string.  The string may or may not have spaces in it.  The string may also have two or more spaces in a row, in which case we will need to preserve those as well.



// R - Returns
// We need to return the words with reversed order of letters.  This is different than reversing the entire string.



// E - Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// P
// Step one, use the split reverse join to reverse the entire string
// Step two, take that string and split reverse join again but use the spaces in the split and join to 

function reverseWords(str) {
    let backwardsString = str.split("").reverse().join("")
    console.log(backwardsString)
    console.log(backwardsString.split(" ").reverse().join(" "))
    return backwardsString.split(" ").reverse().join(" ")
  }