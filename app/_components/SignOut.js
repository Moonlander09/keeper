import { signOutAction } from "../_lib/actions"
import { TbLogout2 } from "react-icons/tb";

function SignOut() {
    return (<form action={signOutAction}>

        <button className="sign-btn">
            <TbLogout2/>SignOut
        </button>
    </form>
    )
}

export default SignOut
