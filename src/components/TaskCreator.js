import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  // console.log(props)
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    // localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-4 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-sm btn-success col-3">Add Task</button>
    </form>
  );
};
