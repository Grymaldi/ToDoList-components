import Complite from "./Complite";
import css from "./todoapp.module.css";

export default function List() {
  return (
    <>
      <ul className={css.list}>
        <div className="taskWrapper">
          <Complite />
        </div>
      </ul>
    </>
  );
}
