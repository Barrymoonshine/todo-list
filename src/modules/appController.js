import displayController from './displayController.js';
import formValueProvider from './formValueProvider.js';
import dataHolder from './dataHolder.js';

const appController = (() => {
  const submitNewProjectForm = document.getElementById('new-project-form');
  const submitNewTaskForm = document.getElementById('new-task-form');
  const dynamicTasksContainer = document.getElementById(
    'dynamic-tasks-container'
  );
  let editMode = false;
  let index = '';

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

  const addTask = () => {
    const project = formValueProvider.getTaskFormValues().projectValue;
    const title = formValueProvider.getTaskFormValues().titleValue;
    const description = formValueProvider.getTaskFormValues().descriptionValue;
    const priority = formValueProvider.getTaskFormValues().priorityValue;
    const dueDate = formValueProvider.getTaskFormValues().dueDateValue;
    const open = false;
    const newTask = TasksFactory(
      project,
      title,
      description,
      priority,
      dueDate,
      open
    );
    if (editMode === false) {
      dataHolder.myTasks.push(newTask);
    } else if (editMode === true) {
      dataHolder.myTasks.splice(index, 1, newTask);
      editMode = false;
      index = '';
    }
  };

  const addProject = () => {
    const projectName = formValueProvider.getProjectName();
    dataHolder.myProjects.push(projectName);
  };

  const handleProjectForm = (e) => {
    e.preventDefault();
    addProject();
    displayController.displayProjects();
    displayController.hideModals();
    displayController.clearForms();
  };

  const handleTaskForm = (e) => {
    e.preventDefault();
    addTask();
    displayController.displayProjectName(displayController.getCurrentProject());
    displayController.handleTasksDisplay(displayController.getCurrentProject());
    displayController.hideModals();
    displayController.clearForms();
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
    titleValue.value = dataHolder.myTasks[indexPosition].title;
    descriptionValue.value = dataHolder.myTasks[indexPosition].description;
    priorityValue.value = dataHolder.myTasks[indexPosition].priority;
    dueDateValue.value = dataHolder.myTasks[indexPosition].dueDate;
  };

  const deleteTask = (e) => {
    dataHolder.myTasks.splice(getIndexPosition(e), 1);
    displayController.handleTasksDisplay(displayController.getCurrentProject());
  };

  const editTask = (e) => {
    addTaskToForm(getIndexPosition(e));
    displayController.displayTaskModal(displayController.getCurrentProject());
    editMode = true;
    index = getIndexPosition(e);
  };

  const toggleTaskDetails = (e) => {
    displayController.toggleTaskView(getIndexPosition(e));
  };

  const togglePriority = (e) => {
    const targetTask = dataHolder.myTasks[getIndexPosition(e)];
    if (targetTask.priority === 'Low') {
      targetTask.priority = 'Medium';
    } else if (targetTask.priority === 'Medium') {
      targetTask.priority = 'High';
    } else if (targetTask.priority === 'High') {
      targetTask.priority = 'Low';
    }
    // displayController.stylePriorityButton();
    displayController.handleTasksDisplay(displayController.getCurrentProject());
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
    console.log(`target element: ${targetElement}`);
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

  return {};
})();

export default appController;
