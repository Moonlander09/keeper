import { auth } from "../_lib/auth"
import SignIn from "./SignIn"
import SignOut from "./SignOut"
import User from "./User"

async function Header() {
    const session = await auth()
    console.log(session)
    return (
        <header className="header">
            <h1>Keeper</h1>
            {session?.user?.name && <User session= {session}/>}
            <div>{session?.user?.name ? <SignOut/> : <SignIn/>}</div>
        </header>
    )
}

export default Header
