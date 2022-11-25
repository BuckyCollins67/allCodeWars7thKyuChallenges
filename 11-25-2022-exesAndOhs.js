// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false 

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a str of characters 

// R - Returns
// We will be expected to return a boolean of true if number of xs and os are equal, regardless of capitalization

// E - Examples
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false 


// P - Psuedocode
// 1.) convert the input string into lowercase with .toLowerCase
// 2.) convert string to array with .split("")
// 3.) iterate through the array, adding to a count of xs and os.
// 4.) compare two counts and return true if equal, and false if unequal

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function XO(str) {
    let str2 = str.toLowerCase()
    console.log(`This is the input string:   ${str2}`)
    let arr = str2.split('')
    console.log(`This is the array:   ${arr}`)
    let xs = 0
    let os = 0
    arr.forEach(ltr => {
            if (ltr === "x") {
                xs++
                console.log('Increased x count by 1')
            } else if (ltr === "o") {
                os++
                console.log('Increased o count by 1')
            }
        })
    console.log(xs, os)
    if (xs == os) {
        return true
        
    } else {
        return false
    }
 
}