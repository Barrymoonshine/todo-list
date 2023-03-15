import displayController from './displayController.js';

const appController = (() => {
  const myTasks = [];
  const submitNewProjectButton = document.getElementById(
    'submit-project-button'
  );
  const submitNewTaskButton = document.getElementById('submit-task-button');

  const handleProjectForm = (e) => {
    e.preventDefault();
    displayController.addNewProject();
    displayController.hideModals();
    displayController.clearForms();
  };

  //   const handleTaskForm = (e) => {

  //   };

  submitNewProjectButton.addEventListener('click', (e) => {
    handleProjectForm(e);
  });

  //   submitNewTaskButton.addEventListener('click', (e) => {
  //     handleTaskForm(e);
  //   });

  return {};
})();

export default appController;
