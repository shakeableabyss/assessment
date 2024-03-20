// Write your tests here!
/*When encoding, it translates the letters i and j to 42.

  When decoding, it translates 42 to (i/j).

  It ignores capital letters. (For example, the results of A Message and a message should be the same.)

  It maintains spaces in the message, before and after encoding or decoding. 
  */

//const expect = require("chai").expect;
//const polybius = require("../src/polybius");

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode i and j to 42", () => {
    
    const expected = "42";
    
      const actual1 = polybius("i",true);

      expect(actual1).to.equal(expected);

      const actual2 = polybius("j",true);

      expect(actual2).to.equal(expected);

  });

  it("should decode 42 to i/j", () => {
        
    const expected = "i/j";
    const actual = polybius("42", false);

    expect(actual).to.equal(expected);

  });

  it("should ignore capital letters", () => {
    const actual1 = polybius("TEST", true);
    const actual2 = polybius("test", true);
    expect(actual1).to.equal(actual2);
  });

  it("should maintain spaces in the message", () => {
            
    const expected1 = " 11 11 ";
    const actual1 = polybius(" A A ", true);

    expect(actual1).to.equal(expected1);

    const expected2 = " a a ";
    const actual2 = polybius(" 11 11 ", false);

    expect(actual2).to.equal(expected2);

  });
});