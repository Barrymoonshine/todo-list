const TasksProvider = (() => {
  const TasksFactory = (
    project,
    title,
    description,
    priority,
    dueDate,
    open
  ) => ({
    project,
    title,
    description,
    priority,
    dueDate,
    open,
  });
  return { TasksFactory };
})();

export default TasksProvider;
