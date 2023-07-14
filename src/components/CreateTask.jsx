import { useState } from 'react';

export const CreateTask = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask('');
  };

  return (
    <form
      className='flex flex-col gap-2 w-2/5 mx-auto mt-20 mb-10'
      onSubmit={onSubmit}
    >
      <input
        type='text'
        name='task'
        placeholder='Enter a new Task'
        autoFocus
        onChange={handleChange}
        className='bg-zinc-800 p-2 rounded-md'
        value={newTask}
      />
      <button className='bg-zinc-900 hover:bg-zinc-950 transition p-2 rounded-md text-white block w-full'>
        Save
      </button>
    </form>
  );
};
