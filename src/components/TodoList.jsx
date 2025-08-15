import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (
      newTask.trim() &&
      !tasks.some(
        (task) => task.text.toLowerCase() === newTask.trim().toLowerCase()
      )
    ) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim() }]);
      setNewTask("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h3 className="h5 mb-0">
          <i className="fas fa-tasks me-2"></i> Todo List
        </h3>
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTask}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
          />
          <button className="btn btn-primary" onClick={addTask}>
            <i className="fas fa-plus"></i> Add
          </button>
        </div>
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task.text}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeTask(task.id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
