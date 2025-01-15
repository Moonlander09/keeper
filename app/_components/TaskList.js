"use client";
import {
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import ButtonDelete from "./ButtonDelete";
import { MdTaskAlt } from "react-icons/md";
import Link from "next/link";


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
            <Link href={`/${t.id}`} className="btn-style edit">
              <AiOutlineEdit />
            </Link>
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
