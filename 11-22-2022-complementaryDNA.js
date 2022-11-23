// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a string of capital letters.  Letters will be one of four, A, T, C, and G.  

// R - Returns
// We will be expected to return the compliment to those letters A -> T and C -> G and vice versa.  A string

// E - Examples
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// P - Psuedocode
// 1.) take the string and change to an array of letters
// 2.) use the map function to apply a conditional to every element in the array
// 3.) return that new string.
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //


function DNAStrand(dna){
    let arr = dna.split("")
    let returnArr = []
    for ( i = 0 ; i<arr.length; i++) {
        if (arr[i] == "A"){
            returnArr.push("T")
        } else if (arr[i] == "T"){
            returnArr.push("A")
        } else if (arr[i] == "C"){
            returnArr.push("G")
        } else if (arr[i] == "G"){
            returnArr.push("C")
        } 
    }
    console.log(returnArr)
    return returnArr.join("").toString()
}