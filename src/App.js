import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Widgets from "./Widgets";
import Sidebar from "./Sidebar";
import Login from './Login'
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Register from './Register' 
import { useSelector, useDispatch } from "react-redux";
import {Feed} from './Feed'
import{selectuser} from "./features/counter/userSlice"
import { auth } from './Firebase';
import { logout, login } from "./features/counter/userSlice";
function App() {
const dispatch = useDispatch();
  const user = useSelector(selectuser);
  // const navigate=useNavigate();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
     login({
             email: userAuth.email,
             uid: userAuth.uid,
             displayName: userAuth.displayName,
             photoUrl: userAuth.photoURL,
           })
      
      }
      else{
        dispatch(logout())
        // navigate('/login'))

      }
    })
  })
  return (
    <div className="app">
      {/*Header */}
      <Header />

    { <Router>
        
        <Routes>
        
           {["/", "/login"].map((path, index) => 
        <Route path={path} key={index} 
     element=
                   
        {!user?( <Login/> ) : (
        <div className="app-body">
        <Sidebar />
          <Feed />
          <Widgets/>
        </div>)}/>)}

      
 
        <Route    path="/Register" element={!user ? (<Register/>
             ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets/>
         </div>)
}
          />
      
        </Routes>
    </Router> }


             
    </div>
  );
}

export default App;
