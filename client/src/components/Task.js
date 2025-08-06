import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTasks,
  addTask as addToStore,
} from "../store/taskSlice";
import { fetchTasks, addTask } from "../service";

const Task = () => {
  //   const [tasks, setTasks] = useState<ITask[]>([]);
  const [title, setTitle] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      dispatch(setTasks(data));
    };
    loadTasks();
  }, [dispatch]);

  const onClickAddTask = async () => {
    const newTask = await addTask(title);
    // setTasks([...tasks, newTask]);
    dispatch(addToStore(newTask));
    setTitle("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Task Manager</h2>
      <input
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={onClickAddTask}>Add</button>

      {tasks.map((task) => (
        <div key={task._id} style={{ display: "flex", gap: "1rem" }}>
          <p
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Task;
