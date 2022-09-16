Array.prototype.newForEach = function (callback, context) {
  for (let index = 0; index < this.length; index++) {
    // This is primarily to check if the item
    // exists in the array, 
    if (this.indexOf(this[index]) > -1) {
      callback.call(context, this[index], index, this)
    }
  }
}
// example
const words = ["adam", "ate", "an", "apple"]
const upperCaseList = []
words.newForEach((word, index, context) => {
  upperCaseList.push(word.toUpperCase())
})
console.log(upperCaseList)
