import { useState } from "react";
import AddButton from "./AddButton";
import css from "./todoapp.module.css";

export default function Header() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hit the gym", completed: false },
    { id: 2, title: "Meet George", completed: true },
    { id: 3, title: "Read a book", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks(tasks.concat([{ id: Date.now(), title: input }]));
      setInput("");
    } else {
      alert("Введите задачу!");
    }
  };
  return (
    <>
      <div className={css.header}>
        <h2>My To Do List</h2>
        <input
          className={css.input}
          value={input}
          type="text"
          id="myInput"
          placeholder="Title..."
          onChange={(e) => setInput(e.target.value)}
        />
        <AddButton input={input} onChange={addTask} />
      </div>
    </>
  );
}
