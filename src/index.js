import testScript from './test.js';
import './global-style.css';
import listIcon from './assets/images/list.png';

testScript();

const header = document.getElementById('title');

header.innerHTML = `
<img class="list-icon" src="../src/assets/images/list.png" alt="List icon">`;
