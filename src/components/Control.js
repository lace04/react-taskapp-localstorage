export const Control = ({ isChecked, setShowCompleted, cleanTask }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTask();
    }
  };

  return (
    <div className="d-flex justify-content-between mt-5 p-4 bg-primary">
      <div className="form-check form-switch">
        <input
          className="form-check-input bg-light"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Show Tasks Done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-warning btn-sm col-4">
        Clear
      </button>
    </div>
  );
};
