/* 
You are given a list of tasks, some of which depend on
others. Write a function which takes a subset of those tasks and
returns an ordered list of all the tasks to run.

(def determine-order (tasks, chosen-tasks)
null)
*/

let tasks = [ 
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

// test case where tasks are not in order
tasks = [ 
  {
  task: "wear a mask",
  depends: []
  }, 
  {
  task: "make a sandwich",
  depends: [ "buy groceries" ]
  }, 
  {
  task: "eat a sandwich",
  depends: [ "make a sandwich" ]
  },
  {
  task: "buy groceries",
  depends: [ "go to the store" ]
  }, 
  {
  task: "go to the store",
  depends: [ "wear a mask" ]
  }
]

function determineOrder(tasks, subset) {
  let orderedTasks = []

  for (let subTask of subset) {
    let foundTask = tasks.find(taskObj => taskObj.task === subTask)
    getDependedTasks(foundTask, orderedTasks, tasks)
  }

  return [...new Set(orderedTasks)]
}

// helper function
function getDependedTasks(currentTask, orderedTasks, tasks) {
  orderedTasks.unshift(currentTask.task)
  if (currentTask.depends.length === 0) {
    return
  }

  let nextTask = tasks.find(taskObj => taskObj.task === currentTask.depends[0])
  return getDependedTasks(nextTask, orderedTasks, tasks)
}

determineOrder(tasks, ["make a sandwich"])
// -> [ 'wear a mask', 'go to the store', 'buy groceries', 'make a sandwich' ]

determineOrder(tasks, ["buy groceries", "make a sandwich"])
// -> [ 'wear a mask', 'go to the store', 'buy groceries', 'make a sandwich' ]

determineOrder(tasks, ["go to the store"])
// -> [ 'wear a mask', 'go to the store' ]