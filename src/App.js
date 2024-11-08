import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { loginApiCall } from './utils/Api';
import RoutingModule from './RoutingModule';


function App() {
  const[showErrMsg, setShowErrMsg] = useState(false)
  let emailVal = ""
  const handleLogin = (param1) => {
    if(!emailVal.length) {
      setShowErrMsg(true)   
      return
    }
    loginApiCall()
    console.log(showErrMsg);
    
  }

  return (
    <>
     {/* <TextField onChange={e => emailVal = e.target.value} id="outlined-basic" label="Outlined" variant="outlined" />
     {showErrMsg && <span>Email is required</span>}
    <button onClick={() => handleLogin("sadasfds")}>Login</button> */}
    <RoutingModule/>
    </>
  );
}

export default App;
