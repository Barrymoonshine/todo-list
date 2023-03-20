const dataHolder = (() => {
  const myTasks = [];
  const myProjects = [['My Tasks']];
  const date = new Date().toJSON();
  return { myTasks, myProjects, date };
})();

export default dataHolder;
