import { useNavigate } from "react-router-dom"
import { loginApiCall } from "../utils/Api"
import { TextField } from "@mui/material"
import { useState } from "react"

function Signup () {
    // const navigate = useNavigate()
    let emailVal=""
    const [showError,setShowError]=useState(false)
    const handleSignup = () => {
        // loginApiCall
        if(!emailVal.length){
            setShowError(true)
        }
        console.log(emailVal)
        console.log(showError)
    }
    return (
        <>
            <h1>Signup</h1>
                  <TextField onChange={e => emailVal = e.target.value} id="outlined-basic" label="Outlined" variant="outlined" />
   {showError && <span>email is required</span>}
            <button onClick={()=>handleSignup()}>Go to parent</button>
        </>
    )
}

export default Signup
