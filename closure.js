function multiplier(factor) {
  return function (number) {
    return number*factor;
  }
}

/*
multiplier (2) returns a function which in turn takes a number.
------------
Simpler way:
------------
var returnComponent=multiplier (2);
console.log(returnComponent(5));
--------
Meaning:
--------
2*5=10
*/
console.log(multiplier(2)(5));
