import { useState } from "react";
import css from "./todoapp.module.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hit the gym", completed: false },
    { id: 2, title: "Meet George", completed: true },
    { id: 3, title: "Read a book", completed: false },
  ]);

  function todoCompleted(id) {
    setTasks(
      tasks.filter((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Компоненты
  function Header() {
    const [input, setInput] = useState("");

    function addTask() {
      if (input.trim() !== "") {
        setTasks(tasks.concat([{ id: Date.now(), title: input }]));
        setInput("");
      } else {
        alert("Введите задачу!");
      }
    }

    return (
      <div className={css.header}>
        <h2>My To Do List</h2>
        <input
          value={input}
          type="text"
          id="myInput"
          placeholder="Title..."
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="addBtn" onClick={(e) => addTask(e)}>
          Add
        </span>
      </div>
    );
  }

  function List() {
    return (
      <ul className={css.list}>
        {tasks &&
          tasks.map((task) => {
            return (
              <div className="taskWrapper" key={task.id}>
                <li
                  onClick={() => todoCompleted(task.id)}
                  style={{
                    textDecoration: task.completed ? "line-through" : null,
                  }}
                >
                  {task.title}
                </li>
                <span className="close" onClick={() => removeTask(task.id)}>
                  &times;
                </span>
              </div>
            );
          })}
      </ul>
    );
  }

  return (
    <>
      <Header />
      <List />
    </>
  );
}
