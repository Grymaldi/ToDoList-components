import { useState } from "react";

export default function Complite() {
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

  return (
    <>
      <div>
        {tasks &&
          tasks.map((task) => {
            return (
              <li
                onClick={() => todoCompleted(task.id)}
                style={{
                  textDecoration: task.completed ? "line-through" : null,
                }}
              >
                {task.title}
              </li>
            );
          })}
      </div>
    </>
  );
}
