import React, { useState } from "react";
import {  useDispatch} from "react-redux";
import{login} from "./features/counter/userSlice"
import { auth } from "./Firebase";
import { Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import image from "./in2.png";
 import "./login.css"
function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch=useDispatch();

  //login//
   const LoginToApp = (e)=> {
 e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)

    .then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl:profile,
        })
      );
    })
    .catch((error) => alert(error));


   };

  return (
    <div className="login">
      <img src={image} />
      <form>
       
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={LoginToApp}>
          Login in
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" >
  <Link  className="link" to="/Register">
          Sign in
  </Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
