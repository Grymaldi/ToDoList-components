import { setTasks, tasks } from "./const";

export default function Complite() {
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
      <div className={css.list}>
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
