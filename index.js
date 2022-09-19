function asyncParallel(taskList, resultsCallback) {
  const results = [];
  let tasksCompleted = 0;
  taskList.forEach(asyncTask => {
    asyncTask(value => {
      results.push(value);
      tasksCompleted++;
      if (tasksCompleted >= taskList.length) {
        resultsCallback.call(null, results);
      }
    });
  });
}
const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask()
];
asyncParallel(taskList, result => {
  console.log('got the results', result);
});