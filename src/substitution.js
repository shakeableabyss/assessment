// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    // performs tests to make sure all the values are OK
    // returns false if any value is wrong
    if (!alphabet) {
      return false;
    } else if (alphabet.length !== 26) {
      return false;
    } else if (!input) {
      return false;
    } 

    // convert all capital letters to lowercase
    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();

    // check for repeat characters in the alphabet string
    if (repeatCharacters(alphabet) === true){
        return false;
    }

    // Form the actual cipher array
    const [cipher, decode] = formCipher(alphabet);
   
    let result = "";

    // if encode is true  loop through the input string and encode it
    for (let i = 0; i < input.length; i++){
      
      const thisChar = input[i];

      if(encode === true){
        if(cipher[thisChar]){
          result = result + cipher[thisChar];
        } else {
          result = result + thisChar;
        }
      } else {
        if(decode[thisChar]){
          result = result + decode[thisChar];
        } else {
          result = result + thisChar;
        }
      }
    }
  
    return result;
    
  }

  function formCipher(alphabet){
    
    // initialize with space character as that is a special case 
    // about trying to read undefined
    let cipher = {" ": " "};
    let decode = {" ": " "};

    // create arrays that will serve as encoder/decoder
    // in so doing, also confirm that there are no duplicate letters in the given alphabet
    for (let i = 0; i < 26 ; i++){
      letter = String.fromCharCode(i + 97);
      
      // add it to the cipher and decoder arrays
      cipher[letter] = alphabet[i];
      decode[alphabet[i]] = letter;
    }

    return [cipher, decode];

  }

  function repeatCharacters (alphabet){
    // check for duplicate characters
    for (let i = 0; i < 26 ; i++){
        for (let j = i + 1; j < 26 ; j++){
            if( alphabet[i] === alphabet[j] ) {
                return true;
            }
        }
    }

    // return false if no duplicates were found
    return false;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
