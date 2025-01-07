"use client";

import { updateTask } from "../_lib/actions";
import { useForm } from "./FormContext";

function InputField() {
  const { input, setInput, setDataField } = useForm();

  function handleSubmit() {
    const inputData = {
      id: Math.random().toString(),
      task: input,
    };
    
    setDataField((prev)=>{
      return [...prev,inputData]
    });
    setInput("");
  }
  return (
    <form className="form" onSubmit={handleSubmit} action={updateTask}>
      <label>Enter your Task:</label>
      <textarea
        type="text"
        name="task"
        placeholder="type here..."
        rows={2}
        cols={30}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={200}
        required
      />
      <button className="btn-submit" >
        Add
      </button>
    </form>
  );
}

export default InputField;
