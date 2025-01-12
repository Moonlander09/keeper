import Header from "./_components/Header";
import InputField from "./_components/InputField";
import { getTaskUser } from "./_lib/services";
import TaskList from "./_components/TaskList";
import { auth } from "./_lib/auth";


export default async function Home() {
  const session = await auth();
  const data = session ? await getTaskUser(session.user.guest) : null;

  return (
    <main>
      
      <Header />
      {session ? (
        <div className="container">
          <InputField />
        </div>
      ) : (
        <div className="heading">
          <h2>Welcome to Keeper Notes</h2>
          <p>
            Your Ultimate Digital Notebook Capture, organize, and access your
            notes anytime, anywhere. Your ideas, always at your fingertips.
          </p>
        </div>
      )}
      <div>
        {session ? (
          <TaskList data={data} session={session} />
        ) : (
          <p className="para">
            You need to Log In to your account to start adding your tasks or
            view your saved ones.
          </p>
        )}
      </div>
    </main>
  );
}
