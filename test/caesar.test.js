// Write your tests here!
/*It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.

  It ignores capital letters. (For example, the results of A Message and a message should be the same.)

  When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

  It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding. 
  */

//const expect = require("chai").expect;
//const caesar = require("../src/caesar");

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value is = 0, < -25, > 25, or nil", () => {
    
    // this will hold for each test
    const expected = false;
           
    const actual1 = caesar("test", 0);
    expect(actual1).to.equal(expected);
     
    const actual2 = caesar("test", -26);
    expect(actual2).to.equal(expected);
    
    const actual3 = caesar("test", 26);
    expect(actual3).to.equal(expected);
    
    const actual4 = caesar("test");
    expect(actual4).to.equal(expected);
  });

  
  it("should ignore capital letters", () => {
      
      const actual1 = caesar("TEST", 3);
      const actual2 = caesar("test", 3);
      expect(actual1).to.equal(actual2);
    });


   it("should handle shifts that go past the end of the alphabet", () => {
      const expected = "c";
      const actual = caesar("z", 3);
      console.log(actual)
      expect(actual).to.equal(expected);
    });


   it("should maintain all nonalphabetic symbols in the message", () => {
      const expected = " 1234567890-=+/!@#$%^&*()[]{}";
          
      const actual1 = caesar(" 1234567890-=+/!@#$%^&*()[]{}", 5, true);
      expect(actual1).to.equal(expected);
      
      const actual2 = caesar(" 1234567890-=+/!@#$%^&*()[]{}", 5, false);
      expect(actual2).to.equal(expected);

    });
  });