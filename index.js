function asyncSeries(taskList, callback) {
  var arr = [];
  let tasksCompleted = 0;
  taskList.reduce((accum, current) => {
    return accum.then(someVal => {
      return new Promise((resolve, reject) => {
        current((value) => {
          arr.push(value)
          tasksCompleted++
          if (tasksCompleted === taskList.length) {
            callback.call(null, arr)
          } else {
            resolve(value)
          }
        })
      })
    })
  }, Promise.resolve())
}
const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
]
asyncSeries(taskList, (result) => {
  console.log("got the results", result)
})
