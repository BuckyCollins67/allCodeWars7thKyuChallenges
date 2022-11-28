// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a number that may be multiple digits long.  It will be an interger.

// R - Returns
// We will be expected to return a concantated interger of all squares of every individual number in the given number

// E - Examples
// 9119 => 811181
// 12 => 14

// P - Psuedocode
// 1.) split every digit in the given number
// 2.) square every individual number
// 3.) join result
// 4.) return result

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function squareDigits(num) {
    let splitNum = num.split("")
    splitNum.forEach(ele => {
        let numHolder = ele * ele
        let finalResult = numHolder.join("")
    });
    
    return finalResult
}