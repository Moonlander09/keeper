"use client";

import { useFormStatus } from "react-dom";
import { createTask } from "../_lib/actions";

function InputField() {

  return (
    <form className="form" action={createTask}>
      <label>Enter your Task:</label>
      <textarea
        type="text"
        name="task"
        placeholder="type here..."
        rows={2}
        cols={30}
        maxLength={200}
        required
      />
      <AddButton />
    </form>
  );
}

export default InputField;

function AddButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn-submit" disabled={pending}>
      {pending ? "Adding..." : "Add"}
    </button>
  );
}
