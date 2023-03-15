import displayController from './displayController.js';

const appController = (() => {
  const submitNewProjectBtn = document.getElementById('submit-project-button');

  const handleNewProjectForm = (e) => {
    e.preventDefault();
    const projectName = document.getElementById('project-name');
    displayController.addNewProject(projectName);
    displayController.hideModal();
  };

  return {
    handleNewProjectForm,
  };
})();

export default appController;
