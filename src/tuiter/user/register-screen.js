import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const handleRegister = async () => {
  try {
    if(username.length === 0 || password.length === 0)
    {
      alert("Username and password cannot be empty!");
      return;
    }
    const response = await dispatch(registerThunk({ username, password }));
    if(response.error)
    {
      alert("This username is taken! Please use different username.");
    } else {
      navigate("/tuiter/profile");
    }
  } catch (e) {
    alert(e);
  }
 };

 return (
    <div>
    <h1>Register Screen</h1>
    <div className="mt-2">
        <label>Username</label>
        <input className="form-control" type="text" value={username}
        onChange={(event) => setUsername(event.target.value)} required/>
    </div>
    <div className="mt-2">
        <label>Password</label>
        <input className="form-control" type="password" value={password}
        onChange={(event) => setPassword(event.target.value)} required/>
    </div>
    <button className="btn btn-primary mt-2"
            onClick={handleRegister}>
        Register
    </button>
    </div>
 );
}

export default RegisterScreen;