const DataHolder = (() => {
  const myTasks = [];

  const addNewTask = (newTask) => {
    myTasks[myTasks.length] = newTask;
  };

  const getTasks = () => myTasks;

  const deleteTask = (index) => {
    myTasks.splice(index, 1);
  };

  const editTask = (editTaskIndexPosition, newTask) => {
    myTasks.splice(editTaskIndexPosition, 1, newTask);
  };

  const myProjects = ['My Tasks'];

  const addNewProject = (newProject) => {
    myProjects[myProjects.length] = newProject;
  };

  const getProjects = () => myProjects;

  const date = new Date().toJSON();
  return {
    addNewTask,
    getTasks,
    deleteTask,
    editTask,
    addNewProject,
    getProjects,
    date,
  };
})();

export default DataHolder;
