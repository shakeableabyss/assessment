// Write your tests here!
/*It returns false if the given alphabet isn't exactly 26 characters long.

  It correctly translates the given phrase, based on the alphabet given to the function.

  It returns false if there are any duplicate characters in the given alphabet.

  It maintains spaces in the message, before and after encoding or decoding.

  It ignores capital letters. (For example, the results of A Message and a message should be the same.) 
  */

//const expect = require("chai").expect;
//const substitution = require("../src/substitution");

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {

    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
            
        const expected = false;
        const actual = substitution("test","bcdefghijklmnopqrstuvwxyz");
    
        expect(actual).to.equal(expected);
    
      });


      it("correctly translates the given phrase, based on the alphabet given", () => {
        
        const expected = "jrufscpw";
        const actual = substitution("thinkful","xoyqmcgrukswaflnthdjpzibev");
    
        expect(actual).to.equal(expected);

    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        
        const expected = false;
        const actual = substitution("test","zbcdefghijklmnopqrstuvwxyz");
    
        expect(actual).to.equal(expected);
        
        });
    
    it("should maintain spaces in the message, before and after encoding or decoding", () => {
            
        const expected = " a a ";
        const actual = substitution(" a a ","abcdefghijklmnopqrstuvwxyz");
    
        expect(actual).to.equal(expected);
        
        });

    it("should ignore capital letters", () => {
           
        const expected = "abcdefghijklmnopqrstuvwxyz";
        const actual = substitution("ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz");

        expect(actual).to.equal(expected);
    });

});
