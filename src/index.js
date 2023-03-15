import './global-style.css';
import listIcon from './assets/images/list.png';
import appController from './modules/appController.js';
import displayController from './modules/displayController.js';

const newProjectButton = document.getElementById('add-project');

newProjectButton.addEventListener('click', () => {
  displayController.displayProjectModal();
});
