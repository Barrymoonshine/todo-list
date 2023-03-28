const DataHolder = (() => {
  const myTasks = [];

  const addNewTask = (newTask) => {
    myTasks[myTasks.length] = newTask;
  };

  const getTasks = () => myTasks;

  const myProjects = ['My Tasks'];

  const addNewProject = (newProject) => {
    myProjects[myProjects.length] = newProject;
  };

  const getProjects = () => myProjects;

  const date = new Date().toJSON();
  return {
    addNewTask,
    getTasks,
    addNewProject,
    getProjects,
    myProjects,
    date,
  };
})();

export default DataHolder;
