import { signInAction } from "../_lib/actions"
import { TbLogin2 } from "react-icons/tb";

function SignIn() {
    return (
        <form action={signInAction}>
        <button className="sign-btn">
        <TbLogin2 />SignIn
        </button>
        </form>
    )
}

export default SignIn
