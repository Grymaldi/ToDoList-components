import { useState } from "react";

export default function Delite() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hit the gym", completed: false },
    { id: 2, title: "Meet George", completed: true },
    { id: 3, title: "Read a book", completed: false },
  ]);
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div>
        {tasks &&
          tasks.map((task) => {
            return (
              <span className="close" onClick={() => removeTask(task.id)}>
                &times;
              </span>
            );
          })}
      </div>
    </>
  );
}
