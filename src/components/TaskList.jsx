import { TaskCard } from './TaskCard';

export const TaskList = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskListRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskCard task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <div className='mb-10'>
      <div className='text-3xl font-semibold text-center'>Tasks</div>
      {tasks.length === 0 ? (
        <div className='text-center text-5xl font-semibold m-10'>
          No tasks yet
        </div>
      ) : (
        <div>{taskListRows(showCompleted)}</div>
      )}
    </div>
  );
};
