import Complite from "./Complite";
import Delite from "./Delite";
import { tasks } from "./const";
import css from "./todoapp.module.css";

export default function List() {
  return (
    <>
      <ul className={css.list}>
        {tasks &&
          tasks.map((task) => {
            return (
              <div className="taskWrapper" key={task.id}>
                <Complite />
                <Delite />
              </div>
            );
          })}
      </ul>
    </>
  );
}
