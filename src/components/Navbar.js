import React from 'react'
import { useState,useEffect} from "react";
import {Link ,useLocation} from "react-router-dom"; 
import ReorderIcon from "@mui/icons-material/Reorder";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

useEffect(()=>{
    setExpandNavbar(false);
}, [location])


  return (
    <div className='navbar' id={expandNavbar ? "open": "close"}>
      <div className='toggleButton'>
           <button onClick={()=> {setExpandNavbar((prev) => !prev);
          }}><ReorderIcon/></button>
      </div>
      <div className='links'>
        <Link to="/">Hakkımda</Link>
        <Link to="/hizmetler">Hizmetler</Link>
        <Link to="/deneyim">Deneyim</Link>
        <Link to="/iletişim">İletişim</Link>
        
      </div>
    </div>
  )
}

export default Navbar
