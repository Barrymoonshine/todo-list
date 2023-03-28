const DataHolder = (() => {
  const myTasks = [];
  const addNewTask = (newTask) => {
    myTasks[myTasks.length] = newTask;
  };
  const getTasks = () => myTasks;

  const myProjects = ['My Tasks'];
  const date = new Date().toJSON();
  return {
    addNewTask,
    getTasks,
    myTasks,
    myProjects,
    date,
  };
})();

export default DataHolder;
