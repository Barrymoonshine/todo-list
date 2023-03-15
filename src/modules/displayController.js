const displayController = (() => {
  const pageContainer = document.getElementById('main-page-container');
  const dynamicContainer = document.getElementById('dynamic-container');
  const projectModal = document.getElementById('new-project-modal');
  const closeProjectFormBtn = document.getElementById('close-project-form');

  const renderDefaultPage = () => {
    // To be updated or removed
    dynamicContainer.innerHTML = `
      Test test one two`;
  };

  const hideModal = () => {
    projectModal.style.display = 'none';
  };

  const displayProjectModal = () => {
    projectModal.style.display = 'flex';
    pageContainer.style.backgroundColor = 'rgba (0,0,0,0.4)';

    closeProjectFormBtn.addEventListener('click', () => {
      hideModal();
      console.log('close project form btn pressed');
    });

    pageContainer.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        hideModal();
        console.log('page container close modal pressed');
      }
    });
  };

  return {
    renderDefaultPage,
    displayProjectModal,
  };
})();

export default displayController;
