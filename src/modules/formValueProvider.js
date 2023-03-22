const formValueProvider = (() => {
  const getProjectFormName = () => {
    const projectName = document.getElementById('project-name').value;
    // If no project name has been provided by the user on the tasks form
    // This function returns the default project: My Tasks
    if (projectName === '') {
      return 'My Tasks';
    }
    return projectName;
  };

  const getTaskFormValues = () => {
    const titleValue = document.getElementById('task-title').value;
    const descriptionValue = document.getElementById('description').value;
    const priorityValue = document.getElementById('priority').value;
    const dueDateValue = document.getElementById('due-date').value;
    const projectValue = document.getElementById('project-drop-down').value;
    return {
      titleValue,
      descriptionValue,
      priorityValue,
      dueDateValue,
      projectValue,
    };
  };

  return {
    getProjectFormName,
    getTaskFormValues,
  };
})();

export default formValueProvider;
