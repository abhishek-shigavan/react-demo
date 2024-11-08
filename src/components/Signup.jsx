import { useNavigate } from "react-router-dom"

function Signup () {
    const navigate = useNavigate()
    return (
        <>
            <h1>Signup</h1>
            <button onClick={() => navigate("/")}>Go to parent</button>
        </>
    )
}

export default Signup
