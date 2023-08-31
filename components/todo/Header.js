import AddButton from "./AddButton";
import Input from "./Input";
import css from "./todoapp.module.css";

export default function Header() {
  return (
    <>
      <div className={css.header}>
        <h2>My To Do List</h2>
        <Input />
        <AddButton />
      </div>
    </>
  );
}
