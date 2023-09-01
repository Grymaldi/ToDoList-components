import { useState } from "react";
import Complite from "./Complite";
import Delite from "./Delite";
import css from "./todoapp.module.css";

export default function List() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hit the gym", completed: false },
    { id: 2, title: "Meet George", completed: true },
    { id: 3, title: "Read a book", completed: false },
  ]);
  return (
    <>
      <ul className={css.list}>
        {tasks &&
          tasks.map((task) => {
            return (
              <div className="taskWrapper" key={task.id}>
                <Complite tasks={tasks} />
                <Delite tasks={tasks}/>
              </div>
            );
          })}
      </ul>
    </>
  );
}
