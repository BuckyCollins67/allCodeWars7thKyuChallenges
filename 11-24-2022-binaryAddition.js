// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given two intergers.

// R - Returns
// We will be expected to return a string of the binary of the sum of the two numbers

// E - Examples
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// P - Psuedocode
// 1.) Add the two intergers together
// 2.) take the sum and convert it to binary
// 3.) return the string of that binary
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function addBinary(a,b) {
    let sumTotal= a+b
    let binaryValue = (sumTotal >>> 0).toString(2)
    return binaryValue
}