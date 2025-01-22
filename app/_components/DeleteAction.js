'use client';

import { AiOutlineDelete } from "react-icons/ai";
import { deleteTask } from "../_lib/actions";
import { useFormStatus } from "react-dom";

function DeleteAction({children,deleteId}) {

    return (
        <form action={()=>deleteTask(deleteId)}>
        <DeleteButton> 
            {children}
        </DeleteButton>
        </form>
    )
}

export default DeleteAction;

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button className={pending ?'btn-style disabled':'btn-style delete'} disabled={pending}>
      <AiOutlineDelete />
    </button>
  );
}
