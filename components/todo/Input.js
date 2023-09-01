import { useState } from "react";
import css from "./todoapp.module.css";

export default function Input() {
  const [input, setInput] = useState("");

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
