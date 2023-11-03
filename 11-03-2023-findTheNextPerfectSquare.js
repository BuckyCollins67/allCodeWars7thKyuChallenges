// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an interger.  It may have a perfect square root, it may not.

// R - Returns
// We will be expected to return the next interger that has a perfect square root, or if it doesn't have a perfect square, return -1

// E - Examples
//  121  => 141
//   4 => 9

// P - Psuedocode
// 1.) Calculate the square root of the given int.  Test to see if it's a 'perfect' number.  Math.floor will be used.
// 2.) If it is a 'perfect' number, we'll add one and return the square of that number
// 3.) if not, we'll return -1
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function findNextSquare(sq){
    let root = (Math.sqrt(sq))  //Calculate the square root of the given int.  
    if (root = Math.floor(root)){  //Test to see if it's a 'perfect' number.  Math.floor will be used.
        return ((root + 1)**2 )  //If it is a 'perfect' number, we'll add one and return the square of that number
    } else {
        return (-1) //if not, we'll return -1
    }
}