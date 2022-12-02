import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, toggleTasks }) {
  if (tasks.length === 0) {
    return (
      <>
        <h3>
          Looks like there's nothing here...
          <br />
          <br />
          <small className="text-muted">
            You're <em>killing it</em> today! Great job!
            <br /> Or perhaps you've yet to add any tasks? Try adding some tasks
            to complete.{" "}
          </small>
        </h3>
      </>
    );
  }

  return (
    <ul className="list-group list-group-flush">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} toggleTasks={toggleTasks} />;
      })}
    </ul>
  );
}
