const formValueProvider = (() => {
  const getProjectName = () => {
    const projectName = document.getElementById('project-name').value;
    return projectName;
  };

  return {
    getProjectName,
  };
})();

export default formValueProvider;
