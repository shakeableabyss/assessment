// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    // check the inputs first for bad values
    if (checkInputs(input, shift) === false){
      return false;
    }

    // convert all capital letters to lowercase
    input = input.toLowerCase();

    // determine if encoding or decoding and switch between positive and negative if decoding
    if (encode === false) {
      // this will switch from positive to negative or vice versa
      shift = 0 - shift;
    }

    // actually do the work now
    const result = performShift(input, shift);

    return result;

  }

  function checkInputs(input, shift){
    // performs tests to make sure all the values are OK
    // returns false if any value is wrong
    // else returns true
 
    if ((shift === 0) || (shift < -25) || (shift > 25) || (!shift) || (!input)){
      return false;
    } else {
    return true;
    }
  }

  function performShift (input, shift){
    // actually does the shifting

    // loop through each character in the string
    for (let i = 0; i < input.length; i++){
      
      // decode character to a number
      let number = input.charCodeAt(i);

      // check to make sure it is a letter, skip if not
      if ((number < 97) || number > 122){
      
        // do nothing
        "skip";
      
      } else {

        // shift
        number = number + shift;

        // check to handle wrapping around 
        if (number < 97) {
          const extraShift = 97 - number;
          number = 123 - extraShift;
        } else if (number > 122) {
          const extraShift = number - 122;
          number = 96 + extraShift;
        }

        // turn the number back to a character
        const letter = String.fromCharCode(number);

        // concatenate the preceding part of the string, the new letter, then the rest of the string
        input = input.slice(0, i) + letter + input.slice(i + 1);

      }
    }
    
    return input;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
