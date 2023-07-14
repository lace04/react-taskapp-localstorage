export const TaskCard = ({ task, toggleTask }) => {
  return (
    <div className='bg-zinc-800 flex justify-between mt-3 p-2 rounded-md'>
      <div className='break-words w-10/12'>{task.name}</div>
      <input
        type='checkbox'
        name='done'
        checked={task.done}
        onChange={() => toggleTask(task)}
        className='text-blue-300'
      />
    </div>
  );
};
