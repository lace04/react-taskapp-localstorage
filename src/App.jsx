import { useState, useEffect } from 'react';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { VisibilityControl } from './components/VisibilityControl';

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert(`"${taskName}" already exists`);
    }
  }

  const clearTask = (task) => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <CreateTask createNewTask={createNewTask} />
      <div className='bg-zinc-900 p-4 rounded-md w-2/5'>
        <TaskList tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={clearTask}
        />

        {showCompleted === true && (
          <TaskList
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
