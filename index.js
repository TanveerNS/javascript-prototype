Array.prototype.newFilter = function (callback, context) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback.call(context, this[index], index, this)) {
      result.push(this[index])
    }
  }
  return result
}
// example
const numbers = [1, 2, 3, 4]
const even = numbers.newFilter(item => item % 2 === 0)
console.log(even)