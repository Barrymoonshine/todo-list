import { addMonths, isBefore, parseISO, addYears } from 'date-fns';
import formValueProvider from './formValueProvider.js';
import dataHolder from './dataHolder.js';

const displayController = (() => {
  const pageContainer = document.getElementById('page-container');
  const projectModal = document.getElementById('new-project-modal');
  const closeProjectFormBtn = document.getElementById(
    'close-project-form-button'
  );
  const taskModal = document.getElementById('new-task-modal');
  const closeTaskFormBtn = document.getElementById('close-task-form-button');
  const newProjectButton = document.getElementById('add-project-button');
  const newTaskButton = document.getElementById('add-task-button');
  const dynamicTasksTitle = document.getElementById('dynamic-tasks-title');
  const dynamicProjectContainer = document.getElementById(
    'dynamic-project-container'
  );
  const dynamicTasksContainer = document.getElementById(
    'dynamic-tasks-container'
  );
  const projectDropDown = document.getElementById('project-drop-down');
  const sideBarNav = document.getElementById('side-bar-nav');
  const projectNameInput = document.getElementById('project-name');
  const projectWarningMessage = document.getElementById(
    'project-warning-message'
  );

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
    // Add back all projects, including new project
    dataHolder.myProjects.forEach((item, index) => {
      dynamicProjectContainer.innerHTML += String.raw`
    <button id='project-button-${index}' class="project-buttons">${item}</button>
  `;
    });
  };

  const clickWindowCloseModal = () => {
    pageContainer.addEventListener('click', (e) => {
      if (e.target === projectModal || e.target === taskModal) {
        hideModals();
      }
    });
  };

  const displayProjectName = (target) => {
    dynamicTasksTitle.innerHTML = String.raw`${target}`;
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

  const stylePriorityButton = (item, index) => {
    const priorityButton = document.getElementById(`priority-${index}`);
    if (item.priority === 'Low') {
      priorityButton.style.backgroundColor = '#6ee7b7';
    } else if (item.priority === 'Medium') {
      priorityButton.style.backgroundColor = '#fdba74';
    } else if (item.priority === 'High') {
      priorityButton.style.backgroundColor = '#fca5a5';
    }
  };

  const removeTasks = () => {
    while (dynamicTasksContainer.firstChild) {
      dynamicTasksContainer.removeChild(dynamicTasksContainer.firstChild);
    }
  };

  const displayOpenTask = (item, index) => {
    const task = document.getElementById(`task-content-${index}`);
    const targetButton = document.getElementById(`expand-${index}`);
    if (item.open === true) {
      task.style.display = 'flex';
    } else if (item.open === false) {
      task.style.display = 'none';
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
      <button><img id="edit-${index}" class="task-nav-icons" src="../src/assets/images/edit.png" alt="Edit"></button>
      <button class="priority-buttons" id="priority-${index}">${item.priority}</button>
      <button><img id="delete-${index}" class="task-nav-icons" src="../src/assets/images/delete.png" alt="Delete"></button>
      <button><img id="expand-${index}" class="task-nav-icons" src="../src/assets/images/expand.png" alt="Expand"></button>
    </div>  
    <div class="task-content" id="task-content-${index}">
      <div class="task-left-content">
        <p>Title: ${item.title}</p> 
        <p>Description: ${item.description}</p> 
      </div>
      <div class="task-right-content">
        <p>Priority: ${item.priority}</p> 
        <p>Due date: ${item.dueDate}</p> 
      </div>  
    </div>
  `;
    displayOpenTask(item, index);
    stylePriorityButton(item, index);
  };

  const identifyProjectTasks = (targetProjectName) => {
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

  const identifyHighPriorityTasks = () => {
    dataHolder.myTasks.forEach((item, index) => {
      if (item.priority === 'High') {
        displayTask(item, index);
      }
    });
  };

  const getCurrentDate = () => {
    const currentDate = dataHolder.date.slice(0, 10);
    return currentDate;
  };

  const identifyTasksDueToday = () => {
    const currentDate = getCurrentDate();
    dataHolder.myTasks.forEach((item, index) => {
      if (item.dueDate === currentDate) {
        displayTask(item, index);
      }
    });
  };

  const identifyTasksDueThisMonth = () => {
    const currentDate = getCurrentDate();
    const nextMonth = addMonths(parseISO(currentDate), 1);
    dataHolder.myTasks.forEach((item, index) => {
      if (isBefore(parseISO(item.dueDate), nextMonth) === true) {
        displayTask(item, index);
      }
    });
  };

  const identifyTasksDueThisYear = () => {
    const currentDate = getCurrentDate();
    const nextYear = addYears(parseISO(currentDate), 1);
    dataHolder.myTasks.forEach((item, index) => {
      if (isBefore(parseISO(item.dueDate), nextYear) === true) {
        displayTask(item, index);
      }
    });
  };

  const handleTasksDisplay = (target) => {
    // Identifies whether the user has targeted a sidebar nav button to display tasks
    // or a project
    removeTasks();
    if (target === 'All Tasks') {
      displayAllTasks();
    } else if (target === 'High Priority') {
      identifyHighPriorityTasks();
    } else if (target === 'Today') {
      identifyTasksDueToday();
    } else if (target === 'This Month') {
      identifyTasksDueThisMonth();
    } else if (target === 'This Year') {
      identifyTasksDueThisYear();
    } else {
      identifyProjectTasks(target);
    }
  };

  const toggleTaskView = (index) => {
    const task = dataHolder.myTasks[index];
    const targetContent = document.getElementById(`task-content-${index}`);
    const targetButton = document.getElementById(`expand-${index}`);
    if (task.open === false) {
      targetContent.style.display = 'flex';
      task.open = true;
    } else {
      targetContent.style.display = 'none';
      task.open = false;
    }
  };

  const displayProjectDropDown = (currentProject) => {
    dataHolder.myProjects.forEach((item) => {
      if (item === dynamicTasksTitle.textContent || item === currentProject) {
        projectDropDown.innerHTML += String.raw`
          <option value="${item}" selected="selected">${item}</option>
      `;
      } else {
        projectDropDown.innerHTML += String.raw`
          <option value="${item}">${item}</option>
      `;
      }
    });
  };

  const getCurrentProject = () => {
    const currentProject = dynamicTasksTitle.textContent;
    return currentProject;
  };

  const displayPageOnLoad = () => {
    displayProjects();
    displayProjectName('My Tasks');
    handleTasksDisplay('My Tasks');
  };

  const displaySameProjectNameWarning = () => {
    projectNameInput.style.border = 'solid 2px  #9f1239';
    projectWarningMessage.style.visibility = 'visible';
  };

  const hideProjectWarning = () => {
    projectNameInput.style.border = 'solid 1px  black';
    projectWarningMessage.style.visibility = 'hidden';
  };

  projectNameInput.addEventListener('click', () => {
    hideProjectWarning();
  });

  sideBarNav.addEventListener('click', (e) => {
    const element = e.target.id;
    const target = e.target.textContent;
    if (element.includes('button')) {
      displayProjectName(target);
      handleTasksDisplay(target);
    } else {
      // Do nothing as the user hasn't pressed a button
    }
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
    clearForms();
    clickWindowCloseModal();
    taskModal.style.display = 'flex';
    pageContainer.style.backgroundColor = 'rgba (0,0,0,0.4)';
    displayProjectDropDown();
    closeTaskFormBtn.addEventListener('click', () => {
      hideModals();
    });
  });

  return {
    hideModals,
    displayTaskModal,
    displayProjects,
    displayProjectName,
    clearForms,
    handleTasksDisplay,
    toggleTaskView,
    displayProjectDropDown,
    getCurrentProject,
    displayPageOnLoad,
    displaySameProjectNameWarning,
  };
})();

export default displayController;
