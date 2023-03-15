const displayController = (() => {
  const renderDefaultPage = () => {
    const dynamicContainer = document.getElementById('dynamic-container');
    dynamicContainer.innerHTML = `
      Test test one two`;
  };

  const displayProjectModal = () => {
    const projectModal = document.getElementById('new-project-modal');
    projectModal.style.display = 'flex';
    window.style.backgroundColor = 'rgba (0,0,0,0.4)';
    console.log('display project modal function has been executed');
  };

  return {
    renderDefaultPage,
    displayProjectModal,
  };
})();

export default displayController;
