import Header from "./_components/Header";
import InputField from "./_components/InputField";
import { getTask, getUser } from "./_lib/services";
import TaskList from './_components/TaskList'

export default async function Home() {

  const data = await getTask();

  return (
    <main>
      <Header/>
      <div className="container">
      <InputField/>
      </div>
      <div>
      <TaskList data = {data}/>
      </div>
    </main>
  );
}
