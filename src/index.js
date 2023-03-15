import './global-style.css';
import listIcon from './assets/images/list.png';
import displayController from './modules/displayController.js';

displayController.renderDefaultPage();

const newProjectButton = document.getElementById('add-project');

newProjectButton.addEventListener('click', () => {
  displayController.displayProjectModal();
  console.log('new project button pressed');
});

const header = document.getElementById('page-header');

header.innerHTML = `
<img class="list-icon" src="../src/assets/images/list.png" alt="List icon"> To Do List`;
