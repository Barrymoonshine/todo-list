import DisplayController from './DisplayController.js';
import DataHolder from './DataHolder.js';
import TasksProvider from './TasksProvider.js';

const LocalStorageController = (() => {
  const addStoredTasks = (storedTasks) => {
    storedTasks.forEach((item) => {
      const newTask = TasksProvider.TasksFactory(
        item.project,
        item.title,
        item.description,
        item.priority,
        item.dueDate,
        item.open
      );
      DataHolder.addNewTask(newTask);
    });
  };

  const addStoredProjects = (storedProjects) => {
    // Adds all the stored projects other than the default project to avoid duplication
    storedProjects.forEach((item) => {
      if (item !== 'My Tasks') {
        DataHolder.addNewProject(item);
      }
    });
  };

  const handleLocalStorage = (storedTasks, storedProjects) => {
    if (storedTasks === null && storedProjects === null) {
      // No local storage present, do nothing
    } else if (storedTasks === null && storedProjects !== null) {
      addStoredProjects(storedProjects);
    } else if (storedTasks !== null && storedProjects === null) {
      addStoredTasks(storedTasks);
    } else {
      addStoredProjects(storedProjects);
      addStoredTasks(storedTasks);
    }
  };

  const checkForLocalStorage = () => {
    const storedTasks = JSON.parse(localStorage.getItem('myTasks'));
    const storedProjects = JSON.parse(localStorage.getItem('myProjects'));
    handleLocalStorage(storedTasks, storedProjects);
    DisplayController.displayPageOnLoad();
  };

  const saveProjectsToLocalStorage = () => {
    localStorage.setItem(
      'myProjects',
      JSON.stringify(DataHolder.getProjects())
    );
  };

  const clearTasksFromLocalStorage = () => {
    localStorage.removeItem('myTasks');
  };

  const refreshTasksLocalStorage = () => {
    clearTasksFromLocalStorage();
    localStorage.setItem('myTasks', JSON.stringify(DataHolder.getTasks()));
  };

  return {
    checkForLocalStorage,
    saveProjectsToLocalStorage,
    refreshTasksLocalStorage,
  };
})();

export default LocalStorageController;
