const formValueProvider = (() => {
  const getProjectName = () => {
    const projectName = document.getElementById('project-name').value;
    return projectName;
  };

  const getTaskFormValues = () => {
    const titleValue = document.getElementById('task-title').value;
    const descriptionValue = document.getElementById('description').value;
    const priorityValue = document.getElementById('priority').value;
    const dueDateValue = document.getElementById('due-date').value;
    return {
      titleValue,
      descriptionValue,
      priorityValue,
      dueDateValue,
    };
  };

  return {
    getProjectName,
    getTaskFormValues,
  };
})();

export default formValueProvider;
