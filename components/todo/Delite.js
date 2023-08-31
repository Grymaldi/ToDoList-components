import { setTasks, tasks } from "./const";

export default function Delite() {
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className={css.list}>
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
