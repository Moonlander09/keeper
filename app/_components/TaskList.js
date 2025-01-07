"use client";
import {
  AiOutlineArrowRight,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useForm } from "./FormContext";

function TaskList({ data }) {
  const { dataField, setDataField } = useForm();

  function handleDelete(id) {
    setDataField((prev) => prev.filter((el) => el.id !== id));
  }
  return (
    <div className="task-style">
      {dataField.map((t) => (
        <div key={t.id} className="task">
          <div className="content">
            <div><AiOutlineArrowRight /></div>
            <li>{t.task}</li>
          </div>
          <div className="btn">
            <button className="btn-style edit">
              <AiOutlineEdit />
            </button>
            <button
              className="btn-style delete"
              onClick={() => handleDelete(t.id)}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
