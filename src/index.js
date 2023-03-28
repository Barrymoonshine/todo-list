import './styles/global-style.css';
import './styles/normalize.css';
import AppController from './modules/AppController.js';
import LocalStorageController from './modules/LocalStorageController.js';
import DisplayController from './modules/DisplayController.js';
import FormValueProvider from './modules/FormValueProvider.js';
import DataHolder from './modules/DataHolder.js';

LocalStorageController.checkForLocalStorage();
