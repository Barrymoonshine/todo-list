import displayController from './displayController.js';

const appController = (() => {
  const handleNewProjectForm = (e) => {
    e.preventDefault();
    displayController.displayNewProject();
    displayController.hideModal();
  };

  return {
    appController,
  };
})();

export default appController;
