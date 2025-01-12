'use client'

import { updateTask } from "../_lib/actions"

function ButtonEdit({children,editId}) {
 
    return (
        <button onClick={()=>updateTask(editId)} className="btn-style edit">
              {children}
            </button>
    )
}

export default ButtonEdit
