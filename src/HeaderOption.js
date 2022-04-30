import React from 'react'
import './HeaderOption.css';
import { selectuser } from "./features/counter/userSlice";
import { useSelector, useDispatch } from "react-redux";
import {Avatar} from '@material-ui/core';
function HeaderOption({Icon,title,onClick,avatar}) {
  const user = useSelector(selectuser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="Icon__Option" />}
      {avatar && <Avatar className="headeroptionicon1">{user?.email[0]}</Avatar>}

      <h3 className="headeroption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption
