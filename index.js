Array.prototype.newReduce = function (callback, startingValue) {
  // as starting value is an optional param
  // make a check
  let accumulator = startingValue || undefined;
  for (let index = 0; index < this.length; index++) {
    if (accumulator) {
      accumulator = callback.call(accumulator, accumulator, this[index], index, this)
    } else {
      accumulator = this[index]
    }
  }
  return accumulator;
}
const nums = [1, 2, 3, 4, 5]
const double = nums.newReduce((accum, current) => {
  accum.push(current * 2)
  return accum
}, []);
console.log(double)
const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").newReduce((accum, current) => {
  const splitString = current.split("=")
  accum[splitString[0]] = splitString[1];
  return accum;
}, {})
console.log(queryObject);