// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an array of arrays.  Each inner array will have an int.

// R - Returns
// We will be expected to return a string of "open" or "senior"

// E - Examples
//    [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] => ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//    =>

// P - Psuedocode
// 1.) Iterate through array.
// 2.) For each item in the array, iterate through the array
// 3.) if value at index 0 is > 55 && index 1 > 7, then 
// 4.) return "senior", else
// 5.) return "open"

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

// function openOrSenior(data){
//     playerArray =[]
//     data.forEach(element => {
//         if (element[0] >= 55 && element[1] > 7) {
//             playerArray.push("Senior")
//         } else {
//             playerArray.push("Open")
//         }
//     });
//     return playerArray
//   }

  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

//optimized code used the map method.  

//  It creates a new array (something we need to return)
//  with the results of calling a provided function on every element in the calling array. (in our case, a t/f test,)
//  This function also used a ternary operator, 
//    condition ? doThisIfTrue : doThisIfFalse
//    >54 && >7 ? console.log('senior') : console.log('open')
