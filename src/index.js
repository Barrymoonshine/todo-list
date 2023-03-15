import './global-style.css';
import listIcon from './assets/images/list.png';
import renderDefaultPage from './modules/displayController.js';

renderDefaultPage();

const header = document.getElementById('page-header');

header.innerHTML = `
<img class="list-icon" src="../src/assets/images/list.png" alt="List icon"> To Do List`;
