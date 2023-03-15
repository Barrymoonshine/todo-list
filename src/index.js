import './global-style.css';
import listIcon from './assets/images/list.png';
import {
  renderDefaultPage,
  displayProjectModal,
} from './modules/displayController.js';

renderDefaultPage();

const newProjectButton = document.getElementById('add-project');

newProjectButton.addEventListener('click', () => {
  displayProjectModal();
  console.log('new project button pressed');
});

const header = document.getElementById('page-header');

header.innerHTML = `
<img class="list-icon" src="../src/assets/images/list.png" alt="List icon"> To Do List`;
