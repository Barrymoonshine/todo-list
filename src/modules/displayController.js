import { addMonths, isBefore, parseISO, addYears } from 'date-fns';
import formValueProvider from './formValueProvider.js';
import dataHolder from './dataHolder.js';

const displayController = (() => {
  const pageContainer = document.getElementById('page-container');
  const projectModal = document.getElementById('new-project-modal');
  const closeProjectFormBtn = document.getElementById('close-project-form');
  const taskModal = document.getElementById('new-task-modal');
  const closeTaskFormBtn = document.getElementById('close-task-form');
  const newProjectButton = document.getElementById('add-project-button');
  const newTaskButton = document.getElementById('add-task-button');
  const projectTitle = document.getElementById('project-title');
  const dynamicProjectContainer = document.getElementById(
    'dynamic-project-container'
  );
  const dynamicTasksContainer = document.getElementById(
    'dynamic-tasks-container'
  );
  const projectDropDown = document.getElementById('project-drop-down');
  const sideBarNav = document.getElementById('side-bar-nav');

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

  const displayProjectName = (targetProjectName) => {
    projectTitle.innerHTML = String.raw`${targetProjectName}`;
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
    removeTasks();
    // If the user has selected a project or My Tasks to display
    if (target === 'All Tasks') {
      displayAllTasks();
    } else if (target === 'High Priority') {
      identifyHighPriorityTasks(target);
    } else if (target === 'Today') {
      identifyTasksDueToday(target);
    } else if (target === 'This Month') {
      identifyTasksDueThisMonth(target);
    } else if (target === 'This Year') {
      identifyTasksDueThisYear(target);
    } else {
      identifyProjectTasks(target);
    }
  };

  const toggleTaskView = (index) => {
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

  sideBarNav.addEventListener('click', (e) => {
    const targetProjectName = e.target.textContent;
    displayProjectName(targetProjectName);
    handleTasksDisplay(targetProjectName);
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
    displayTaskModal,
    displayProjects,
    displayProjectName,
    clearForms,
    handleTasksDisplay,
    toggleTaskView,
    getCurrentProject,
  };
})();

export default displayController;
