"use client";
import {
  AiOutlineEdit,
} from "react-icons/ai";
import { MdTaskAlt } from "react-icons/md";
import Link from "next/link";
import DeleteAction from "./DeleteAction";


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
            <DeleteAction deleteId= {t.id}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
