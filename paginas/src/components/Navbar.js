import React from "react";
import {Link} from "react-router-dom";
import { useRef } from 'react';
function Navbar(){
    return(
    <nav>
    <ul>
        <li>
           <Link to='/'>Inicio</Link>
        </li>
        <li>
        <Link to='/login'>Login</Link>
         </li>
         <li>
         <Link to='/Register'>Register</Link>
        </li>
        <li>
        <Link to='/Perfil'>Perfil</Link>
        </li>
      </ul>
</nav>
);}
export default Navbar;