import { input, setInput } from "./const";
import css from "./todoapp.module.css";

export default function Input() {
  return (
    <>
      <input
        className={css.input}
        value={input}
        type="text"
        id="myInput"
        placeholder="Title..."
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
