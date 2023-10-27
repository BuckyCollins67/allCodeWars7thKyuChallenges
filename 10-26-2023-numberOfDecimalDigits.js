// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a valid interger greater than or equal to 0 (no negatives).

// R - Returns
// We will be expected to return an interger equal to the number of digits in the input.

// E - Examples
//  0  =>  1
//  67  =>  2

// P - Psuedocode
// 1.) Use a spread operator to convert the int to a new array.  NOPE WRONG
// 2.) use n.toString() then .split("") then length to determine number of digitis.  This only works because the interger is not negative.
// 3.) return the array.length
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function digits(n) {
    return (n.toString().split("").length())
}