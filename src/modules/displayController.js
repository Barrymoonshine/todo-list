const displayController = (() => {
  const pageContainer = document.getElementById('main-page-container');
  const dynamicContainer = document.getElementById('dynamic-container');
  const projectModal = document.getElementById('new-project-modal');
  const closeProjectFormBtn = document.getElementById('close-project-form');
  const newProjectButton = document.getElementById('add-project');
  const dynamicProjectContainer = document.getElementById(
    'dynamic-project-container'
  );

  const getProjectName = () => {
    const projectName = document.getElementById('project-name').value;
    return projectName;
  };

  const hideModals = () => {
    projectModal.style.display = 'none';
  };

  const addNewProject = () => {
    dynamicProjectContainer.innerHTML += String.raw`
    <button>${getProjectName()} </button>
  `;
  };

  const clearForms = () => {
    const projectName = document.getElementById('project-name');
    projectName.value = '';
  };

  newProjectButton.addEventListener('click', () => {
    projectModal.style.display = 'flex';
    pageContainer.style.backgroundColor = 'rgba (0,0,0,0.4)';

    closeProjectFormBtn.addEventListener('click', () => {
      hideModals();
      console.log('close project form btn pressed');
    });

    pageContainer.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        hideModals();
        console.log('page container close modal pressed');
      }
    });
  });

  const renderDefaultPage = () => {
    // To be updated or removed
    dynamicContainer.innerHTML = `
      Test test one two`;
  };

  return {
    renderDefaultPage,
    hideModals,
    addNewProject,
    clearForms,
  };
})();

export default displayController;
