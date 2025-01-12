import { auth } from "../_lib/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import User from "./User";
import { SiKeeper } from "react-icons/si";

async function Header() {
  const session = await auth();
  return (
    <header className="header">
      <h1>
        <SiKeeper></SiKeeper>
        <span>Keeper</span>
      </h1>
      {session?.user?.name && <User session={session} />}
      <div>{session?.user?.name ? <SignOut /> : <SignIn />}</div>
    </header>
  );
}

export default Header;
