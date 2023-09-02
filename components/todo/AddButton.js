export default function AddButton({addTask}) {
  return (
    <>
      <span className="addBtn" onClick={addTask}>
        Add
      </span>
    </>
  );
}
