import formValueProvider from './formValueProvider.js';
import tasksHolder from './tasksHolder.js';

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
  const dynamicTasksContainer = document.getElementById(
    'dynamic-tasks-container'
  );
  let counter = 0;

  const incrementByOne = () => {
    counter += 1;
  };

  const hideModals = () => {
    projectModal.style.display = 'none';
    taskModal.style.display = 'none';
  };

  const displayNewProject = () => {
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

  const displayTasks = () => {
    // Remove previous tasks
    while (dynamicTasksContainer.firstChild) {
      dynamicTasksContainer.removeChild(dynamicTasksContainer.firstChild);
    }
    // Add back tasks, including new task
    tasksHolder.myTasks.forEach((item, index) => {
      dynamicTasksContainer.innerHTML += String.raw`
        <div class='my-tasks' id='${index}'>
        <div>
          <p>Title: ${item.title}</p> 
          <p>Description: ${item.description}</p> 
          <p>Priority: ${item.priority}</p> 
          <p>Due date: ${item.dueDate}</p> 
        </div>
      `;
    });
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
    displayNewProject,
    clearForms,
    displayTasks,
  };
})();

export default displayController;
