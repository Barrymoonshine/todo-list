import formValueProvider from './formValueProvider.js';

const displayController = (() => {
  const pageContainer = document.getElementById('main-page-container');
  const projectModal = document.getElementById('new-project-modal');
  const closeProjectFormBtn = document.getElementById('close-project-form');
  const taskModal = document.getElementById('new-task-modal');
  const closeTaskFormBtn = document.getElementById('close-task-form');
  const newProjectButton = document.getElementById('add-project-button');
  const taskButtonContainer = document.getElementById('task-button-container');
  const newTaskButton = document.getElementById('add-task-button');
  const projectTitle = document.getElementById('project-title');
  const dynamicProjectContainer = document.getElementById(
    'dynamic-project-container'
  );
  const dynamicListContainer = document.getElementById(
    'dynamic-list-container'
  );
  let counter = 0;

  const incrementByOne = () => {
    counter += 1;
  };

  const hideModals = () => {
    projectModal.style.display = 'none';
    taskModal.style.display = 'none';
  };

  const addNewProject = () => {
    incrementByOne();
    dynamicProjectContainer.innerHTML += String.raw`
    <button id='project-button-${counter}'>
    ${formValueProvider.getProjectName()} 
    </button>
  `;
  };

  const clickWindowCloseModal = () => {
    pageContainer.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        hideModals();
      }
    });
  };

  const clearForms = () => {
    const projectName = document.getElementById('project-name');
    projectName.value = '';
  };

  const displayProject = (targetProjectName) => {
    taskButtonContainer.style.display = 'flex';
    projectTitle.innerHTML = String.raw`
    ${targetProjectName}
    `;
  };

  newProjectButton.addEventListener('click', () => {
    projectModal.style.display = 'flex';
    pageContainer.style.backgroundColor = 'rgba (0,0,0,0.4)';
    closeProjectFormBtn.addEventListener('click', () => {
      hideModals();
    });
    clickWindowCloseModal();
  });

  dynamicProjectContainer.addEventListener('click', (e) => {
    const targetProjectName = e.target.textContent;
    displayProject(targetProjectName);
  });

  newTaskButton.addEventListener('click', () => {
    taskModal.style.display = 'flex';
    pageContainer.style.backgroundColor = 'rgba (0,0,0,0.4)';
    closeTaskFormBtn.addEventListener('click', () => {
      hideModals();
    });
    clickWindowCloseModal();
  });

  return {
    hideModals,
    addNewProject,
    clearForms,
  };
})();

export default displayController;
