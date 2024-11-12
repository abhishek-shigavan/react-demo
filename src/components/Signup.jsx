import { useNavigate } from "react-router-dom"
import { loginApiCall } from "../utils/Api"

function Signup () {
    const navigate = useNavigate()
    const handleSignup = () => {
        loginApiCall()
    }
    return (
        <>
            <h1>Signup</h1>
            <button onClick={handleSignup}>Go to parent</button>
        </>
    )
}

export default Signup
