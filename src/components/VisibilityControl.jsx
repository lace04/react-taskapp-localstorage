export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTask,
}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      cleanTask();
    }
  };

  return (
    <div className='flex justify-between ml-2'>
      <div>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={(e) => {
            setShowCompleted(e.target.checked);
          }}
          className='mr-2'
        />
        <label>Show Tasks Done</label>
      </div>
      <button
        className='bg-zinc-700 hover:bg-zinc-900 transition px-3 py-1 border border-teal-100 rounded-md'
        onClick={handleDelete}
      >
        clear
      </button>
    </div>
  );
};
