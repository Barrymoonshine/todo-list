const displayController = (() => {
  const pageContainer = document.getElementById('main-page-container');
  const projectModal = document.getElementById('new-project-modal');
  const closeProjectFormBtn = document.getElementById('close-project-form');
  const newProjectButton = document.getElementById('add-project');
  const dynamicProjectContainer = document.getElementById(
    'dynamic-project-container'
  );
  const dynamicListContainer = document.getElementById(
    'dynamic-list-container'
  );
  let counter = 0;

  const getProjectName = () => {
    const projectName = document.getElementById('project-name').value;
    return projectName;
  };

  const incrementByOne = () => {
    counter += 1;
  };

  const hideModals = () => {
    projectModal.style.display = 'none';
  };

  const addNewProject = () => {
    incrementByOne();
    dynamicProjectContainer.innerHTML += String.raw`
    <button id='project-button-${counter}'>
    ${getProjectName()} 
    </button>
  `;
  };

  const clearForms = () => {
    const projectName = document.getElementById('project-name');
    projectName.value = '';
  };

  const displayProject = (targetProjectName) => {
    dynamicListContainer.innerHTML = String.raw`
    <div class='list-title'>${targetProjectName}</div>
    <button id='add-task-button'>+ Task</button>
    `;
  };

  newProjectButton.addEventListener('click', () => {
    projectModal.style.display = 'flex';
    pageContainer.style.backgroundColor = 'rgba (0,0,0,0.4)';

    closeProjectFormBtn.addEventListener('click', () => {
      hideModals();
    });

    pageContainer.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        hideModals();
      }
    });
  });

  dynamicProjectContainer.addEventListener('click', (e) => {
    const targetProjectName = e.target.textContent;
    console.log(targetProjectName);
    displayProject(targetProjectName);
  });

  return {
    hideModals,
    addNewProject,
    clearForms,
  };
})();

export default displayController;
