"use client";
import {
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import { MdTaskAlt } from "react-icons/md";


function TaskList({ data }) {
  return (
    <div className="task-style">
      {data.map((t) => (
        <div key={t.id} className="task">
          <div className="content">
            <div>
              <MdTaskAlt />
            </div>
            <li>{t.task}</li>
          </div>
          <div className="btn">
            <ButtonEdit editId = {t.id}>
              <AiOutlineEdit />
            </ButtonEdit>
            <ButtonDelete deleteId= {t.id}>
              <AiOutlineDelete />
            </ButtonDelete>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
