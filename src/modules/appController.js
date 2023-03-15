import displayController from './displayController.js';

const appController = (() => {
  const submitNewProjectBtn = document.getElementById('submit-project-button');

  submitNewProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    displayController.addNewProject();
    displayController.hideModals();
    displayController.clearForms();
  });

  return {};
})();

export default appController;
