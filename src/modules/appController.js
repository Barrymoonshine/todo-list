import displayController from './displayController.js';
import formValueProvider from './formValueProvider.js';
import tasksHolder from './tasksHolder.js';

const appController = (() => {
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

  const submitNewProjectButton = document.getElementById(
    'submit-project-button'
  );
  const submitNewTaskButton = document.getElementById('submit-task-button');

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

  submitNewProjectButton.addEventListener('click', (e) => {
    handleProjectForm(e);
  });

  submitNewTaskButton.addEventListener('click', (e) => {
    handleTaskForm(e);
  });

  return {};
})();

export default appController;
