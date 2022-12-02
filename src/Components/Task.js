import React from "react";

export default function Task({ task, toggleTasks }) {
  function handleTaskClick() {
    toggleTasks(task.id);
  }

  return (
    <>
      <li className="list-group-item">
        <label>
          <p className="lead">
            <strong>Task:</strong> {task.name}
          </p>

          <div className="btn-group-toggle" data-toggle="buttons">
            <label
              className={
                task.complete === false
                  ? "btn btn-outline-warning"
                  : "btn btn-outline-success"
              }
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={handleTaskClick}
              />{" "}
              <strong>
                {task.complete === false
                  ? "In Progress. Click to complete!"
                  : "Completed! Good Job!"}
              </strong>
            </label>
          </div>
        </label>
      </li>
    </>
  );
}
