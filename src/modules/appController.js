import displayController from './displayController.js';
import formValueProvider from './formValueProvider.js';
import tasksHolder from './tasksHolder.js';

const appController = (() => {
  const submitNewProjectForm = document.getElementById('new-project-form');
  const submitNewTaskForm = document.getElementById('new-task-form');
  const dynamicTasksContainer = document.getElementById(
    'dynamic-tasks-container'
  );

  const TasksFactory = (title, description, priority, dueDate) => ({
    title,
    description,
    priority,
    dueDate,
  });

  const addNewTask = () => {
    const title = formValueProvider.getTaskFormValues().titleValue;
    const description = formValueProvider.getTaskFormValues().descriptionValue;
    const priority = formValueProvider.getTaskFormValues().priorityValue;
    const dueDate = formValueProvider.getTaskFormValues().dueDateValue;
    const newTask = TasksFactory(title, description, priority, dueDate);
    tasksHolder.myTasks.push(newTask);
  };

  const handleProjectForm = (e) => {
    e.preventDefault();
    displayController.displayNewProject();
    displayController.hideModals();
    displayController.clearForms();
  };

  const handleTaskForm = (e) => {
    e.preventDefault();
    addNewTask();
    displayController.displayTasks();
    displayController.hideModals();
    displayController.clearForms();
  };

  const deleteTask = (e) => {
    const indexPosition = e.target.id.replace('delete-', '');
    tasksHolder.myTasks.splice(indexPosition, 1);
    displayController.displayTasks();
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
    }
  });

  return {};
})();

export default appController;
