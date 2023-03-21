(()=>{"use strict";var e={904:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n  margin: 0px;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n}\n\n:root {\n  --primary-page-color: #a5f3fc;\n  --secondary-page-color: #f5f5f4;\n  --tertiary-page-color: rgb(255, 254, 254);\n  --quaternary-page-color: #9f1239;\n}\n\n#page-container {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 10fr;\n  font-family: 'Rubik', sans-serif;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: var(--primary-page-color);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n}\n\nh1 {\n  font-size: 30px;\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  background-color: var(--secondary-page-color);\n  width: 250px;\n}\n\n.sidebar ul {\n  padding: 20px 20px 0 20px;\n}\n\n.sidebar ul li {\n  margin-top: 20px;\n}\n\n.sidebar-buttons,\n#add-project-button,\n#add-task-button {\n  text-align: start;\n  font-size: 15px;\n  padding: 5px 10px 5px 10px;\n  width: 210px;\n  border-radius: 10px;\n}\n\n.sidebar-buttons:hover {\n  background-color: var(--tertiary-page-color);\n}\n\n.projects {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 10px 0 10px 0;\n  border-bottom: solid 3px black;\n  margin-bottom: 10px;\n}\n\n#dynamic-project-container {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-weight: bold;\n  font-size: 40px;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n\n.project-buttons {\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #fca5a5;\n}\n\n#add-project-button:hover,\n#add-task-button:hover {\n  background-color: #fca5a5;\n}\n\n.sidebar-icons {\n  width: 21px;\n  height: 21px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n\n/* Hides the My Tasks project button*/\n#project-button-0 {\n  display: none;\n}\n\n.project-modal,\n.task-modal {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.project-modal-content,\n.task-modal-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: var(--tertiary-page-color);\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n  border-radius: 5px;\n}\n\n.project-modal-content {\n  width: 450px;\n  height: 225px;\n}\n\n.project-modal-content ul {\n  margin: 0px;\n  padding: 0px 20px 0px 20px;\n}\n\n.new-project-header,\n.new-task-header {\n  padding: 15px 10px 15px 10px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: bold;\n  border-bottom: solid 1px black;\n  margin-bottom: 10px;\n}\n\n#close-project-form-button,\n#close-task-form-button {\n  font-size: 20px;\n  font-weight: bold;\n  color: #a1a1aa;\n}\n\n#close-project-form-button:hover,\n#close-task-form-button:hover {\n  color: var(--quaternary-page-color);\n}\n\nlabel,\ninput {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  margin-bottom: 10px;\n}\n\n#project-name {\n  width: 95%;\n  padding: 10px;\n  border-radius: 5px;\n  border: solid 1px black;\n}\n\ninput:focus,\n#description:focus,\n#priority:focus,\n#due-date:focus,\n#project-drop-down:focus {\n  outline: none !important;\n  border: solid 2px var(--primary-page-color);\n  box-shadow: 0 0 10px var(--primary-page-color);\n}\n\n#submit-project-button,\n#submit-task-button {\n  padding: 10px 20px 10px 20px;\n  background-color: #6ee7b7;\n  border-radius: 5px;\n  float: right;\n  margin-right: 10px;\n}\n\n.main-content-container {\n  padding: 20px;\n  height: auto;\n  grid-column: 2/ 3;\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n#add-task-button {\n  font-size: 17px;\n  width: 100px;\n}\n\n.task-modal-content ul {\n  padding: 0px 20px 0px 20px;\n}\n\n.task-form-inputs {\n  display: flex;\n  gap: 15px;\n}\n\n.left-side-task-form,\n.right-side-task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: 100%;\n}\n\n#task-title {\n  width: 210px;\n}\n\n#description {\n  height: 125px;\n  width: 210px;\n  resize: none;\n}\n\n#priority,\n#due-date,\n#project-drop-down {\n  width: 210px;\n}\n\n#dynamic-tasks-container {\n  padding: 20px;\n}\n\n#project-title {\n  font-size: 40px;\n  font-style: bold;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.task-modal-content {\n  width: 500px;\n  height: 350px;\n}\n\n.task-nav {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #fca5a5;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.task-nav-icons {\n  width: 20px;\n  height: 20px;\n}\n\n#dynamic-tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 10px 0px 10px 0px;\n}\n\n.task-content {\n  display: none;\n  justify-content: space-around;\n  border: 1px solid var(--primary-page-color);\n  margin-top: 5px;\n  border-radius: 5px;\n}\n\n.task-left-content,\n.task-right-content {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n}\n\n.footer {\n  grid-column: 1 / 3;\n  grid-row: 3 / 4;\n  text-align: center;\n  font-size: 15px;\n  padding-bottom: 10px;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var g=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),m=t(904),g={};function f(e){if(null===e||!0===e||!1===e)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function y(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function v(e){y(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===x(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function b(e,n){y(2,arguments);var t=v(e),r=f(n);if(isNaN(r))return new Date(NaN);if(!r)return t;var o=t.getDate(),a=new Date(t.getTime());return a.setMonth(t.getMonth()+r+1,0),o>=a.getDate()?a:(t.setFullYear(a.getFullYear(),a.getMonth(),o),t)}g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals,Math.pow(10,8);var h=6e4,k=36e5;function w(e,n){var t;y(1,arguments);var r=f(null!==(t=null==n?void 0:n.additionalDigits)&&void 0!==t?t:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,a=function(e){var n,t={},r=e.split(T.dateTimeDelimiter);if(r.length>2)return t;if(/:/.test(r[0])?n=r[0]:(t.date=r[0],n=r[1],T.timeZoneDelimiter.test(t.date)&&(t.date=e.split(T.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){var o=T.timezone.exec(n);o?(t.time=n.replace(o[1],""),t.timezone=o[1]):t.time=n}return t}(e);if(a.date){var i=function(e,n){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),r=e.match(t);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:e.slice((r[1]||r[2]).length)}}(a.date,r);o=function(e,n){if(null===n)return new Date(NaN);var t=e.match(j);if(!t)return new Date(NaN);var r=!!t[4],o=N(t[1]),a=N(t[2])-1,i=N(t[3]),s=N(t[4]),d=N(t[5])-1;if(r)return function(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}(0,s,d)?function(e,n,t){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*(n-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(n,s,d):new Date(NaN);var c=new Date(0);return function(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(C[n]||(M(e)?29:28))}(n,a,i)&&function(e,n){return n>=1&&n<=(M(e)?366:365)}(n,o)?(c.setUTCFullYear(n,a,Math.max(o,i)),c):new Date(NaN)}(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var s,d=o.getTime(),c=0;if(a.time&&(c=function(e){var n=e.match(E);if(!n)return NaN;var t=I(n[1]),r=I(n[2]),o=I(n[3]);return function(e,n,t){return 24===e?0===n&&0===t:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}(t,r,o)?t*k+r*h+1e3*o:NaN}(a.time),isNaN(c)))return new Date(NaN);if(!a.timezone){var l=new Date(d+c),p=new Date(0);return p.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),p.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),p}return s=function(e){if("Z"===e)return 0;var n=e.match(D);if(!n)return 0;var t="+"===n[1]?-1:1,r=parseInt(n[2]),o=n[3]&&parseInt(n[3])||0;return function(e,n){return n>=0&&n<=59}(0,o)?t*(r*k+o*h):NaN}(a.timezone),isNaN(s)?new Date(NaN):new Date(d+c+s)}var T={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},j=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,E=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,D=/^([+-])(\d{2})(?::?(\d{2}))?$/;function N(e){return e?parseInt(e):1}function I(e){return e&&parseFloat(e.replace(",","."))||0}var C=[31,null,31,30,31,30,31,31,30,31,30,31];function M(e){return e%400==0||e%4==0&&e%100!=0}function B(e,n){y(2,arguments);var t=v(e),r=v(n);return t.getTime()<r.getTime()}const $=()=>{const e=document.getElementById("project-name").value;return""===e?"My Tasks":e},S=()=>({titleValue:document.getElementById("task-title").value,descriptionValue:document.getElementById("description").value,priorityValue:document.getElementById("priority").value,dueDateValue:document.getElementById("due-date").value,projectValue:document.getElementById("project-drop-down").value}),L={myTasks:[],myProjects:[["My Tasks"]],date:(new Date).toJSON()},P=(()=>{const e=document.getElementById("page-container"),n=document.getElementById("new-project-modal"),t=document.getElementById("close-project-form-button"),r=document.getElementById("new-task-modal"),o=document.getElementById("close-task-form-button"),a=document.getElementById("add-project-button"),i=document.getElementById("add-task-button"),s=document.getElementById("project-title"),d=document.getElementById("dynamic-project-container"),c=document.getElementById("dynamic-tasks-container"),l=document.getElementById("project-drop-down"),p=document.getElementById("side-bar-nav"),u=()=>{n.style.display="none",r.style.display="none"},m=()=>{e.addEventListener("click",(e=>{e.target!==n&&e.target!==r||u()}))},g=e=>{s.innerHTML=String.raw`${e}`},x=()=>{document.getElementById("project-name").value="";const e=document.getElementById("task-title"),n=document.getElementById("description"),t=document.getElementById("priority"),r=document.getElementById("due-date");e.value="",n.value="",t.value="",r.value="",l.innerHTML=""},v=(e,n)=>{c.innerHTML+=String.raw`
    <div class="my-tasks">
    <div class="task-nav" id="task-nav-${n}">
      <input 
      type="checkbox" 
      id="task-complete-${n}"
      />
      <div class="task-title">Title: ${e.title}</div>
      <button><img id="edit-${n}" class="task-nav-icons" src="../src/assets/images/edit.png" alt="Edit"></button>
      <button id="priority-${n}">${e.priority}</button>
      <button><img id="delete-${n}" class="task-nav-icons" src="../src/assets/images/delete.png" alt="Delete"></button>
      <button><img id="expand-${n}" class="task-nav-icons" src="../src/assets/images/expand.png" alt="Expand"></button>
    </div>  
    <div class="task-content" id="task-content-${n}">
      <div class="task-left-content">
        <p>Title: ${e.title}</p> 
        <p>Description: ${e.description}</p> 
      </div>
      <div class="task-right-content">
        <p>Priority: ${e.priority}</p> 
        <p>Due date: ${e.dueDate}</p> 
      </div>  
    </div>
  `,((e,n)=>{const t=document.getElementById(`task-content-${n}`);document.getElementById(`expand-${n}`),!0===e.open?t.style.display="flex":!1===e.open&&(t.style.display="none")})(e,n)},h=()=>L.date.slice(0,10),k=e=>{var n;(()=>{for(;c.firstChild;)c.removeChild(c.firstChild)})(),"All Tasks"===e?L.myTasks.forEach(((e,n)=>{v(e,n)})):"High Priority"===e?L.myTasks.forEach(((e,n)=>{"High"===e.priority&&v(e,n)})):"Today"===e?(()=>{const e=h();L.myTasks.forEach(((n,t)=>{n.dueDate===e&&v(n,t)}))})():"This Month"===e?(()=>{const e=b(w(h()),1);L.myTasks.forEach(((n,t)=>{!0===B(w(n.dueDate),e)&&v(n,t)}))})():"This Year"===e?(()=>{const e=function(e,n){return y(2,arguments),b(e,12*f(n))}(w(h()),1);L.myTasks.forEach(((n,t)=>{!0===B(w(n.dueDate),e)&&v(n,t)}))})():(n=e,L.myTasks.forEach(((e,t)=>{e.project===n&&v(e,t)})))};return p.addEventListener("click",(e=>{const n=e.target.id,t=e.target.textContent;n.includes("button")&&(g(t),k(t))})),a.addEventListener("click",(()=>{n.style.display="flex",e.style.backgroundColor="rgba (0,0,0,0.4)",t.addEventListener("click",(()=>{u()})),m()})),d.addEventListener("click",(e=>{const n=e.target.textContent;g(n),k(n)})),i.addEventListener("click",(()=>{x(),m(),r.style.display="flex",e.style.backgroundColor="rgba (0,0,0,0.4)",L.myProjects.forEach((e=>{e===s.textContent?l.innerHTML+=String.raw`
          <option value="${e}" selected="selected">${e}</option>
      `:l.innerHTML+=String.raw`
          <option value="${e}">${e}</option>
      `})),o.addEventListener("click",(()=>{u()}))})),{hideModals:u,displayTaskModal:()=>{r.style.display="flex"},displayProjects:()=>{for(;d.firstChild;)d.removeChild(d.firstChild);L.myProjects.forEach(((e,n)=>{d.innerHTML+=String.raw`
    <button id='project-button-${n}' class="project-buttons">${e}</button>
  `}))},displayProjectName:g,clearForms:x,handleTasksDisplay:k,toggleTaskView:e=>{console.log("toggletaskview invoked");const n=L.myTasks[e],t=document.getElementById(`task-content-${e}`);document.getElementById(`expand-${e}`),!1===n.open?(t.style.display="flex",n.open=!0):(t.style.display="none",n.open=!1)},getCurrentProject:()=>s.textContent}})();(()=>{const e=document.getElementById("new-project-form"),n=document.getElementById("new-task-form"),t=document.getElementById("dynamic-tasks-container");let r=!1,o="";const a=e=>e.target.id.replace(/\D/g,""),i=e=>{L.myTasks.splice(a(e),1),P.handleTasksDisplay(P.getCurrentProject())};e.addEventListener("submit",(e=>{(e=>{e.preventDefault(),(()=>{const e=$();L.myProjects.push(e)})(),P.displayProjects(),P.hideModals(),P.clearForms()})(e)})),n.addEventListener("submit",(e=>{(e=>{e.preventDefault(),(()=>{const e={project:S().projectValue,title:S().titleValue,description:S().descriptionValue,priority:S().priorityValue,dueDate:S().dueDateValue,open:!1};!1===r?L.myTasks.push(e):!0===r&&(L.myTasks.splice(o,1,e),r=!1,o="")})(),P.displayProjectName(P.getCurrentProject()),P.handleTasksDisplay(P.getCurrentProject()),P.hideModals(),P.clearForms()})(e)})),t.addEventListener("click",(e=>{const n=e.target.id;console.log(`target element: ${n}`),n.includes("delete")?i(e):n.includes("edit")?(e=>{(e=>{const n=document.getElementById("task-title"),t=document.getElementById("description"),r=document.getElementById("priority"),o=document.getElementById("due-date");n.value=L.myTasks[e].title,t.value=L.myTasks[e].description,r.value=L.myTasks[e].priority,o.value=L.myTasks[e].dueDate})(a(e)),P.displayTaskModal(P.getCurrentProject()),r=!0,o=a(e)})(e):n.includes("expand")?(e=>{P.toggleTaskView(a(e))})(e):n.includes("priority")?(e=>{const n=L.myTasks[a(e)];"Low"===n.priority?n.priority="Medium":"Medium"===n.priority?n.priority="High":"High"===n.priority&&(n.priority="Low"),P.handleTasksDisplay(P.getCurrentProject())})(e):n.includes("task-complete")&&(e=>{setTimeout((()=>{i(e)}),1e3)})(e)}))})()})()})();