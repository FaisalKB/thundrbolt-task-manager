import React, { useState, useRef, useEffect } from "react";
import TaskList from "../Components/TaskList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "taskApp.tasks";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function toggleTasks(id) {
    const newTasks = [...tasks];
    const selectedTask = newTasks.find((task) => task.id === id);
    selectedTask.complete = !selectedTask.complete;
    setTasks(newTasks);
  }

  function handeAddTask(e) {
    const task = taskNameRef.current.value;
    if (task === "") return;
    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuidv4(), name: task, complete: false }];
    });
    taskNameRef.current.value = null;
  }

  function handleClearTasks() {
    const newTasks = tasks.filter((task) => !task.complete);
    setTasks(newTasks);
  }

  return (
    <>
      <div class="container">
      <div class="row">
        <div class="input-group mb-3">
          <input
            ref={taskNameRef}
            type="text"
            class="form-control"
            placeholder="What do you need to get done?"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handeAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
       

        </div>

        <div class="row">


        <div class="col">
        <h4 class="display-4">My Tasks</h4>
        <br/>
        <TaskList tasks={tasks} toggleTasks={toggleTasks} />
            </div>


            <div class="col">
            <h4 class="display-4">Tasks Remaining: {tasks.filter((task) => !task.complete).length}</h4>
        <br/>
        <p class="lead">
  Tasks marked as complete will remain in your task list until you clear them. Click the button below to clear your list of all completed tasks.
</p>

<div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-danger btn-lg" onClick={handleClearTasks}>Clear Completed Tasks</button></div>



  
        </div>



      </div>
      </div>
    </>
  );
}
