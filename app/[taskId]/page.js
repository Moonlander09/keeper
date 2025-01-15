import CancelButton from "../_components/CancelButton";
import UpdateButton from "../_components/UpdateButton";
import { updateTask } from "../_lib/actions";
import { getTaskUserById } from "../_lib/services";

async function page({ params }) {
  const id = await params;
  const taskById = await getTaskUserById(id.taskId);


  return (
    <div className="form-style">
      <form className="form" action={updateTask}>
        <label>Enter your Task:</label>
        <textarea
          type="text"
          name="task"
          defaultValue={taskById.task}
          placeholder="type here..."
          rows={2}
          cols={30}
          maxLength={200}
          required
        />
        <input type="hidden" name="id" value={taskById.id} />
        <div className="form-button">
        <UpdateButton />
        <CancelButton/>
        </div>
      </form>
    </div>
  );
}

export default page;
