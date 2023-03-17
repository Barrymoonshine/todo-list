import formValueProvider from './formValueProvider.js';
import dataHolder from './dataHolder.js';

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
  const projectDropDown = document.getElementById('project-drop-down');
  const myTasksButton = document.getElementById('my-tasks-button');
  const allTasksButton = document.getElementById('all-tasks-button');

  const hideModals = () => {
    projectModal.style.display = 'none';
    taskModal.style.display = 'none';
  };

  const displayTaskModal = () => {
    taskModal.style.display = 'flex';
  };

  const displayProjects = () => {
    // Remove previous projects
    while (dynamicProjectContainer.firstChild) {
      dynamicProjectContainer.removeChild(dynamicProjectContainer.firstChild);
    }
    // Add back projects, including new project
    dataHolder.myProjects.forEach((item, index) => {
      dynamicProjectContainer.innerHTML += String.raw`
    <button id='project-button-${index}'>${item}</button>
  `;
    });
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
    const titleValue = document.getElementById('task-title');
    const descriptionValue = document.getElementById('description');
    const priorityValue = document.getElementById('priority');
    const dueDateValue = document.getElementById('due-date');
    titleValue.value = '';
    descriptionValue.value = '';
    priorityValue.value = '';
    dueDateValue.value = '';
    projectDropDown.innerHTML = '';
  };

  const displayProjectName = (targetProjectName) => {
    projectTitle.innerHTML = String.raw`${targetProjectName}`;
  };

  // const stylePriorityButton = () => {
  //   let { priority } = tasksHolder.myTasks[getIndexPosition(e)];
  //   if (priority === 'Low') {
  //     priority = 'Medium';
  //   } else if (priority === 'Medium') {
  //     priority = 'High';
  //   } else if (priority === 'High') {
  //     priority = 'Low';
  //   }
  // };

  const handleTasksDisplay = (targetProjectName) => {
    removeTasks();
    // If the user has selected a project or My Tasks to display
    if (targetProjectName !== 'All Tasks') {
      identifyTasks(targetProjectName);
    } else {
      displayAllTasks();
      console.log(
        `target project name, display all tasks?: ${targetProjectName}`
      );
    }
  };

  const removeTasks = () => {
    while (dynamicTasksContainer.firstChild) {
      dynamicTasksContainer.removeChild(dynamicTasksContainer.firstChild);
    }
  };

  const displayTask = (item, index) => {
    dynamicTasksContainer.innerHTML += String.raw`
    <div class="my-tasks">
    <div class="task-nav" id="task-nav-${index}">
      <input 
      type="checkbox" 
      id="task-complete-${index}"
      />
      <div class="task-title">Title: ${item.title}</div>
      <button id="edit-${index}">Edit</button>
      <button id="priority-${index}">${item.priority}</button>
      <button id="delete-${index}">Delete</button>
      <button id="expand-${index}">Expand</button>
    </div>  
    <div class="task-content" id="task-content-${index}">
      <p>Title: ${item.title}</p> 
      <p>Description: ${item.description}</p> 
      <p>Priority: ${item.priority}</p> 
      <p>Due date: ${item.dueDate}</p> 
    </div>
  `;
  };

  const identifyTasks = (targetProjectName) => {
    // Identifies the target projects tasks
    dataHolder.myTasks.forEach((item, index) => {
      if (item.project === targetProjectName) {
        displayTask(item, index);
      }
    });
  };

  const displayAllTasks = () => {
    dataHolder.myTasks.forEach((item, index) => {
      displayTask(item, index);
    });
  };

  const toggleTaskDisplay = (index) => {
    const targetContent = document.getElementById(`task-content-${index}`);
    const targetButton = document.getElementById(`expand-${index}`);
    if (targetButton.textContent === 'Expand') {
      targetContent.style.display = 'flex';
      targetButton.textContent = 'Minimise';
    } else {
      targetContent.style.display = 'none';
      targetButton.textContent = 'Expand';
    }
  };

  const displayProjectDropDown = () => {
    dataHolder.myProjects.forEach((item) => {
      projectDropDown.innerHTML += String.raw`
          <option value="${item}">${item}</option>
      `;
    });
  };

  const getCurrentProject = () => {
    const currentProject = projectTitle.textContent;
    return currentProject;
  };

  myTasksButton.addEventListener('click', (e) => {
    const targetProjectName = e.target.textContent;
    displayProjectName(targetProjectName);
    handleTasksDisplay(targetProjectName);
  });

  allTasksButton.addEventListener('click', (e) => {
    const target = e.target.textContent;
    displayProjectName(target);
    handleTasksDisplay(target);
  });

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
    displayProjectName(targetProjectName);
    handleTasksDisplay(targetProjectName);
  });

  newTaskButton.addEventListener('click', () => {
    taskModal.style.display = 'flex';
    pageContainer.style.backgroundColor = 'rgba (0,0,0,0.4)';
    displayProjectDropDown();
    closeTaskFormBtn.addEventListener('click', () => {
      hideModals();
    });
    clickWindowCloseModal();
  });

  return {
    hideModals,
    displayProjects,
    displayTaskModal,
    displayProjectName,
    clearForms,
    handleTasksDisplay,
    toggleTaskDisplay,
    getCurrentProject,
  };
})();

export default displayController;
