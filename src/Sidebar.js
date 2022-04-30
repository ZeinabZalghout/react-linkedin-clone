import React from 'react'
import './Sidebar.css';
import { useSelector, useDispatch } from "react-redux";
import { selectuser } from "./features/counter/userSlice";
import {Avatar} from '@material-ui/core';
import img1 from "./b2.jpg";
function Sidebar() {
      const user = useSelector(selectuser);

    const recentItem =(topic)=>(
< div className="sidebar__recentitem">
    <span className='sidebar__hash'>#</span>
    <p>{topic}  </p></div>
    );
  return (
    <div className="sidebar">

     <div className="sidebar__top">
        <img src={img1}/>
      
         <Avatar className="sidebar__avatar" src={user.photoUrl?user.photoUrl:user.email.substring(0,user.email.lastIndexOf("@")) }></Avatar>
         <h2>{user.displayName?user.displayName:user.email.substring(0,user.email.lastIndexOf("@")) }</h2>
         <h4>{user.email}</h4>
     </div>

     <div className="sidebar__stats">
          <div className="sidebar__stat">
             <p>Who viewed you</p>
             <p className="sidebar__statNumber">2,534</p>
        </div>

    <div className="sidebar__stat">
             <p>Viewed Post</p>
             <p className="sidebar__statNumber">2,444</p>
     </div>  
     </div>   
        
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('react.js') }
            {recentItem('software engineering ') }
            {recentItem(' web developer') }
            {recentItem('programming') }
                {recentItem('java') }
            </div>
        </div>
  )
}

export default Sidebar