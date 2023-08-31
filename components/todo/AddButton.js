import { input, setInput, setTasks, tasks } from "./const";

export default function AddButton() {
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
