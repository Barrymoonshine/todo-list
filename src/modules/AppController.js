import DisplayController from './DisplayController.js';
import FormValueProvider from './FormValueProvider.js';
import DataHolder from './DataHolder.js';
import LocalStorageController from './modules/LocalStorageController.js';

const AppController = (() => {
  const submitNewProjectForm = document.getElementById('new-project-form');
  const submitNewTaskForm = document.getElementById('new-task-form');
  const dynamicTasksContainer = document.getElementById(
    'dynamic-tasks-container'
  );
  let editModeActive = false;
  let editTaskIndexPosition = '';

  const TasksFactory = (
    project,
    title,
    description,
    priority,
    dueDate,
    open
  ) => ({
    project,
    title,
    description,
    priority,
    dueDate,
    open,
  });

  const createTask = () => {
    const project = FormValueProvider.getTaskFormValues().projectValue;
    const title = FormValueProvider.getTaskFormValues().titleValue;
    const description = FormValueProvider.getTaskFormValues().descriptionValue;
    const priority = FormValueProvider.getTaskFormValues().priorityValue;
    const dueDate = FormValueProvider.getTaskFormValues().dueDateValue;
    const open = false;
    const newTask = TasksFactory(
      project,
      title,
      description,
      priority,
      dueDate,
      open
    );
    return newTask;
  };

  const applyTaskMode = (newTask) => {
    if (editModeActive === false) {
      DataHolder.addNewTask(newTask);
    } else if (editModeActive === true) {
      DataHolder.editTask(editTaskIndexPosition, newTask);
      editModeActive = false;
      editTaskIndexPosition = '';
    }
  };

  const addProject = (newProject) => {
    DataHolder.addNewProject(newProject);
  };

  const handleProjectForm = (e) => {
    e.preventDefault();
    const newProject = FormValueProvider.getProjectFormName();
    if (DataHolder.getProjects().includes(newProject)) {
      DisplayController.displaySameProjectNameWarning();
    } else {
      addProject(newProject);
      LocalStorageController.saveProjectsToLocalStorage();
      DisplayController.displayProjects();
      DisplayController.hideModals();
      DisplayController.clearForms();
    }
  };

  const handleTaskForm = (e) => {
    e.preventDefault();
    const newTask = createTask();
    applyTaskMode(newTask);
    LocalStorageController.refreshTasksLocalStorage();
    DisplayController.displayProjectName(DisplayController.getCurrentProject());
    DisplayController.handleTasksDisplay(DisplayController.getCurrentProject());
    DisplayController.hideModals();
    DisplayController.clearForms();
  };

  const getIndexPosition = (e) => {
    const indexPosition = e.target.id.replace(/\D/g, '');
    return indexPosition;
  };

  const addTaskToForm = (indexPosition) => {
    const titleValue = document.getElementById('task-title');
    const descriptionValue = document.getElementById('description');
    const priorityValue = document.getElementById('priority');
    const dueDateValue = document.getElementById('due-date');
    const currentProject = DataHolder.getTasks()[indexPosition].project;
    titleValue.value = DataHolder.getTasks()[indexPosition].title;
    descriptionValue.value = DataHolder.getTasks()[indexPosition].description;
    priorityValue.value = DataHolder.getTasks()[indexPosition].priority;
    dueDateValue.value = DataHolder.getTasks()[indexPosition].dueDate;
    DisplayController.displayProjectDropDown(currentProject);
  };

  const deleteTask = (e) => {
    DataHolder.deleteTask(getIndexPosition(e));
    DisplayController.handleTasksDisplay(DisplayController.getCurrentProject());
    LocalStorageController.refreshTasksLocalStorage();
  };

  const editTask = (e) => {
    addTaskToForm(getIndexPosition(e));
    DisplayController.displayTaskModal(DisplayController.getCurrentProject());
    editModeActive = true;
    editTaskIndexPosition = getIndexPosition(e);
  };

  const toggleTaskDetails = (e) => {
    DisplayController.toggleTaskView(getIndexPosition(e));
  };

  const togglePriority = (e) => {
    const targetTask = DataHolder.myTasks[getIndexPosition(e)];
    if (targetTask.priority === 'Low') {
      targetTask.priority = 'Medium';
    } else if (targetTask.priority === 'Medium') {
      targetTask.priority = 'High';
    } else if (targetTask.priority === 'High') {
      targetTask.priority = 'Low';
    }
    DisplayController.handleTasksDisplay(DisplayController.getCurrentProject());
    LocalStorageController.refreshTasksLocalStorage();
  };

  const completeTask = (e) => {
    setTimeout(() => {
      deleteTask(e);
    }, 1000);
  };

  submitNewProjectForm.addEventListener('submit', (e) => {
    handleProjectForm(e);
  });

  submitNewTaskForm.addEventListener('submit', (e) => {
    handleTaskForm(e);
  });

  dynamicTasksContainer.addEventListener('click', (e) => {
    const targetElement = e.target.id;
    if (targetElement.includes('delete')) {
      deleteTask(e);
    } else if (targetElement.includes('edit')) {
      editTask(e);
    } else if (targetElement.includes('expand')) {
      toggleTaskDetails(e);
    } else if (targetElement.includes('priority')) {
      togglePriority(e);
    } else if (targetElement.includes('task-complete')) {
      completeTask(e);
    }
  });
})();

export default AppController;
