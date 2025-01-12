'use client';

import { deleteTask } from "../_lib/actions";

function ButtonDelete({children,deleteId}) {

    return (
        <button  onClick={()=>deleteTask(deleteId)}className="btn-style delete"> 
            {children}
        </button>
    )
}

export default ButtonDelete
