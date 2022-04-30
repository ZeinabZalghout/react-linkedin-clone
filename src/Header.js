import React  from 'react'
import './Header.css';
import { logout } from "./features/counter/userSlice";
import {useDispatch } from "react-redux";
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorIcon from '@material-ui/icons/SupervisorAccount';
 import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
 import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
 import Mark from '@material-ui/icons/ChatBubbleOutline';
import { auth } from './Firebase';

function Header(){
  const dispatch = useDispatch();

const logoutApp =(e)=>{
  e.preventDefault();
    dispatch( logout( ))
  
    auth.signOut();

  }


  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/124/124011.png" />
        <div className="header__search">
          {/* search icon*/}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={SupervisorIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={Mark} title="Message" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notification" />
        <HeaderOption onClick={logoutApp} avatar={true}title="me" />
      </div>
    </div>
  );
}

export default Header