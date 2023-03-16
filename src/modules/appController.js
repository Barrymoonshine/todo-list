import displayController from './displayController.js';
import formValueProvider from './formValueProvider.js';
import tasksHolder from './tasksHolder.js';

const appController = (() => {
  const submitNewProjectForm = document.getElementById('new-project-form');
  const submitNewTaskForm = document.getElementById('new-task-form');
  const dynamicTasksContainer = document.getElementById(
    'dynamic-tasks-container'
  );
  let editMode = false;
  let index = '';

  const TasksFactory = (title, description, priority, dueDate) => ({
    title,
    description,
    priority,
    dueDate,
  });

  const addTask = () => {
    const title = formValueProvider.getTaskFormValues().titleValue;
    const description = formValueProvider.getTaskFormValues().descriptionValue;
    const priority = formValueProvider.getTaskFormValues().priorityValue;
    const dueDate = formValueProvider.getTaskFormValues().dueDateValue;
    const newTask = TasksFactory(title, description, priority, dueDate);
    if (editMode === false) {
      tasksHolder.myTasks.push(newTask);
    } else if (editMode === true) {
      tasksHolder.myTasks.splice(index, 1, newTask);
      editMode = false;
      index = '';
    }
  };

  const handleProjectForm = (e) => {
    e.preventDefault();
    displayController.displayNewProject();
    displayController.hideModals();
    displayController.clearForms();
  };

  const handleTaskForm = (e) => {
    e.preventDefault();
    addTask();
    displayController.displayTasks();
    displayController.hideModals();
    displayController.clearForms();
  };

  // Create function to handle removing nonnumbers
  // const removeNonNumbers = (e) =. {
  //   const indexPosition = e.target.id.replace(/\D/g, '');
  //   return indexPosition
  // }

  const addTaskToForm = (indexPosition) => {
    const titleValue = document.getElementById('task-title');
    const descriptionValue = document.getElementById('description');
    const priorityValue = document.getElementById('priority');
    const dueDateValue = document.getElementById('due-date');
    titleValue.value = tasksHolder.myTasks[indexPosition].title;
    descriptionValue.value = tasksHolder.myTasks[indexPosition].description;
    priorityValue.value = tasksHolder.myTasks[indexPosition].priority;
    dueDateValue.value = tasksHolder.myTasks[indexPosition].dueDate;
  };

  const deleteTask = (e) => {
    const indexPosition = e.target.id.replace('delete-', '');
    tasksHolder.myTasks.splice(indexPosition, 1);
    displayController.displayTasks();
  };

  const editTask = (e) => {
    const indexPosition = e.target.id.replace('edit-', '');
    addTaskToForm(indexPosition);
    displayController.displayTaskModal();
    // Event listener for form being submitted?
    editMode = true;
    index = indexPosition;
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
    }
  });

  return {};
})();

export default appController;
