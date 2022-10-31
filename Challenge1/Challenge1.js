'use strict'


//Find the length of the longest substring without repeating characters

let getLength = function (str) {
    let finalLength = 0;
  
    for (let i = 0; i < str.length; i++) {
      let currentString = new Set();
  
      for (let j = i; j < str.length; j++) {
        if (currentString.has(str[j])) {
          break;
        } else {
          currentString.add(str[j]);
        }
      }
  
      finalLength = Math.max(finalLength, currentString.size);
    }
  
    return finalLength;
  };
  
  const str = "abbbcabcdefef";
  
  console.log(getLength(str));