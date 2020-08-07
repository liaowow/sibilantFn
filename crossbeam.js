/* 
You are given a list of tasks, some of which depend on
others. Write a function which takes a subset of those tasks and
returns an ordered list of all the tasks to run.

(def determine-order (tasks, chosen-tasks)
null)
*/

const tasks = [ 
  {
  task: "make a sandwich",
  depends: [ "buy groceries" ]
  }, 
  {
  task: "buy groceries",
  depends: [ "go to the store" ]
  }, 
  {
  task: "go to the store",
  depends: []
  } 
]

function determineOrder(tasks, subset) {
  let result = []
  for (let task of tasks) {
    if (task.depends.length === 1) {
      result.unshift(task.depends[0])
    }
  }
  for (let sub of subset) {
    result.push(sub)
  }

  return [...new Set(result)]
}

determineOrder(tasks, ["make a sandwich"])
// -> [ 'go to the store', 'buy groceries', 'make a sandwich' ]

determineOrder(tasks, ["buy groceries", "make a sandwich"])
// -> [ 'go to the store', 'buy groceries', 'make a sandwich' ]