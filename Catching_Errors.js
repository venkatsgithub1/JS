let reverseString=(s)=> {
  try {
          console.log(s.split("").reverse().join(""));
      } catch(e) {
          console.log(e.message);
          console.log(s);
      }
}

reverseString(1234);

// Gives us 
// s.split is not a function
// 1234
