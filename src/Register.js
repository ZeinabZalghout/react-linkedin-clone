import React, { useState } from "react";
import './Register.css';
import{login} from "./features/counter/userSlice"
import { auth } from "./Firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import image from "./in2.png";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
   const navigate=useNavigate();
    const dispatch=useDispatch();

    //register//
  const Registerr =(e) => {
    e.preventDefault();
      if (!name){
          return alert ("you should fill the name")
      }
createUserWithEmailAndPassword(auth, email, password)
  .then((userAuth) => {

     dispatch(
       login({
         email: userAuth.user.email,
         uid: userAuth.user.uid,
         photoURL: profile,
         displayName: name,}),
    
     
    navigate("/login"))
 
   }).catch((error) =>alert(error));
      console.log(profile);
  };


  return (
    <div className="login">
      <img src={image} />
        <form>
                                                    <input
                                                      type="text"
                                                      placeholder="FullName (required)"
                                                      value={name}
                                                      onChange={(e) => setName(e.target.value)}
                                                    />
                <input
                type="text"
          placeholder="Profile pic url (optional)"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
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

        <button type="submit" onClick={Registerr}>
          Sign in
        </button>
      </form>
   
    </div>
  );
}

export default Register;

