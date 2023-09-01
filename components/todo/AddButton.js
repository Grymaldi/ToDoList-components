import { useState } from "react";

export default function AddButton() {
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
    <>
      <span className="addBtn" onClick={(e) => addTask(e)}>
        Add
      </span>
    </>
  );
}
