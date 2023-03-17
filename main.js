(()=>{"use strict";var e={257:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"* {\n  margin: 0px;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.page-container {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 10fr;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  border: 1px solid black;\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border: 1px solid green;\n}\n\n.sidebar ul li {\n  padding-top: 20px;\n}\n\n/* Hides the My Tasks project button*/\n#project-button-0 {\n  display: none;\n}\n\n.project-modal,\n.task-modal {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.project-modal-content,\n.task-modal-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: rgb(229, 226, 226);\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n  padding: 30px 50px 50px 50px;\n}\n\n.dynamic-content-container {\n  padding: 20px;\n  width: 100%;\n  height: 100%;\n  grid-column: 2/ 3;\n  grid-row: 2 / 3;\n  border: 1px solid blue;\n  display: flex;\n  flex-direction: column;\n}\n\n#dynamic-tasks-container {\n  padding: 20px;\n}\n\n#project-title {\n  font-size: 40px;\n  font-style: bold;\n  text-align: center;\n}\n\n.task-nav {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid yellow;\n}\n\n.task-content {\n  display: none;\n  border: 1px solid black;\n}\n\n.footer {\n  grid-column: 1 / 3;\n  grid-row: 3 / 4;\n  border: 1px solid purple;\n  text-align: center;\n}\n",""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var s=e[d],c=o.base?s[0]+o.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var y=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:y,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var s=o(e,r),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),d=n(565),s=n.n(d),c=n(216),l=n.n(c),u=n(589),p=n.n(u),m=n(257),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=l(),t()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals,n.p;const g=()=>{const e=document.getElementById("project-name").value;return""===e?"My Tasks":e},f=()=>({titleValue:document.getElementById("task-title").value,descriptionValue:document.getElementById("description").value,priorityValue:document.getElementById("priority").value,dueDateValue:document.getElementById("due-date").value,projectValue:document.getElementById("project-drop-down").value}),v={myTasks:[],myProjects:[["My Tasks"]]},h=(()=>{const e=document.getElementById("main-page-container"),t=document.getElementById("new-project-modal"),n=document.getElementById("close-project-form"),o=document.getElementById("new-task-modal"),r=document.getElementById("close-task-form"),i=document.getElementById("add-project-button"),a=(document.getElementById("task-button-container"),document.getElementById("add-task-button")),d=document.getElementById("project-title"),s=document.getElementById("dynamic-project-container"),c=(document.getElementById("dynamic-list-container"),document.getElementById("dynamic-tasks-container")),l=document.getElementById("project-drop-down"),u=document.getElementById("my-tasks-button"),p=()=>{t.style.display="none",o.style.display="none"},m=()=>{e.addEventListener("click",(e=>{e.target===t&&p()}))},y=e=>{d.innerHTML=String.raw`
    ${e}
    `},g=e=>{for(;c.firstChild;)c.removeChild(c.firstChild);v.myTasks.forEach(((t,n)=>{t.project===e&&(c.innerHTML+=String.raw`
        <div class="my-tasks">
        <div class="task-nav" id="task-nav-${n}">
          <input 
          type="checkbox" 
          id="task-complete-${n}"
          />
          <div class="task-title">Title: ${t.title}</div>
          <button id="edit-${n}">Edit</button>
          <button id="priority-${n}">${t.priority}</button>
          <button id="delete-${n}">Delete</button>
          <button id="expand-${n}">Expand</button>
        </div>  
        <div class="task-content" id="task-content-${n}">
          <p>Title: ${t.title}</p> 
          <p>Description: ${t.description}</p> 
          <p>Priority: ${t.priority}</p> 
          <p>Due date: ${t.dueDate}</p> 
        </div>
      `)}))};return u.addEventListener("click",(e=>{const t=e.target.textContent;y(t),g(t)})),i.addEventListener("click",(()=>{t.style.display="flex",e.style.backgroundColor="rgba (0,0,0,0.4)",n.addEventListener("click",(()=>{p()})),m()})),s.addEventListener("click",(e=>{const t=e.target.textContent;y(t),g(t)})),a.addEventListener("click",(()=>{o.style.display="flex",e.style.backgroundColor="rgba (0,0,0,0.4)",v.myProjects.forEach((e=>{l.innerHTML+=String.raw`
          <option value="${e}">${e}</option>
      `})),r.addEventListener("click",(()=>{p()})),m()})),{hideModals:p,displayProjects:()=>{for(;s.firstChild;)s.removeChild(s.firstChild);v.myProjects.forEach(((e,t)=>{s.innerHTML+=String.raw`
    <button id='project-button-${t}'>${e}</button>
  `}))},displayTaskModal:()=>{o.style.display="flex"},displayProjectName:y,clearForms:()=>{document.getElementById("project-name").value="";const e=document.getElementById("task-title"),t=document.getElementById("description"),n=document.getElementById("priority"),o=document.getElementById("due-date");e.value="",t.value="",n.value="",o.value="",l.innerHTML=""},displayTasks:g,toggleTaskDisplay:e=>{const t=document.getElementById(`task-content-${e}`),n=document.getElementById(`expand-${e}`);"Expand"===n.textContent?(t.style.display="flex",n.textContent="Minimise"):(t.style.display="none",n.textContent="Expand")}}})();(()=>{const e=document.getElementById("new-project-form"),t=document.getElementById("new-task-form"),n=document.getElementById("dynamic-tasks-container");let o=!1,r="";const i=e=>e.target.id.replace(/\D/g,""),a=e=>{v.myTasks.splice(i(e),1),h.displayTasks()};e.addEventListener("submit",(e=>{(e=>{e.preventDefault(),(()=>{const e=g();v.myProjects.push(e)})(),h.displayProjects(),h.hideModals(),h.clearForms()})(e)})),t.addEventListener("submit",(e=>{(e=>{const t=f().projectValue;e.preventDefault(),(()=>{const e={project:f().projectValue,title:f().titleValue,description:f().descriptionValue,priority:f().priorityValue,dueDate:f().dueDateValue};!1===o?v.myTasks.push(e):!0===o&&(v.myTasks.splice(r,1,e),o=!1,r="")})(),h.displayProjectName(t),h.displayTasks(t),h.hideModals(),h.clearForms()})(e)})),n.addEventListener("click",(e=>{const t=e.target.id;t.includes("delete")?a(e):t.includes("edit")?(e=>{(e=>{const t=document.getElementById("task-title"),n=document.getElementById("description"),o=document.getElementById("priority"),r=document.getElementById("due-date");t.value=v.myTasks[e].title,n.value=v.myTasks[e].description,o.value=v.myTasks[e].priority,r.value=v.myTasks[e].dueDate})(i(e)),h.displayTaskModal(),o=!0,r=i(e)})(e):t.includes("expand")?(e=>{h.toggleTaskDisplay(i(e))})(e):t.includes("priority")?(e=>{const t=v.myTasks[i(e)];"Low"===t.priority?t.priority="Medium":"Medium"===t.priority?t.priority="High":"High"===t.priority&&(t.priority="Low"),h.displayTasks()})(e):t.includes("task-complete")&&(e=>{setTimeout((()=>{a(e)}),1e3)})(e)}))})()})()})();