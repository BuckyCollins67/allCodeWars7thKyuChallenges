// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// P - Parameters
// We will be given a string of letters.  All will be lowercase.

// R - Returns
// We will be expected to return the number of vowels in the string

// E - Examples
// Given string "abracadabra" => 5
// Given string abc, => 1

// P - Psuedocode
// 1.) take the string length
// 2.) iterate through the string
// 3.) for every a,e,i,o, or u, we add one to our conter
// 4.) return the counter




function getCount(str) {
    let val = 0
    for (let x = 0; x < str.length; x++){
        if ( str[x] == "a" || str[x] == "e" || str[x] == "i" || str[x] == "o" || str[x] == "u"){
            val++
        }
    }
    return val
  }