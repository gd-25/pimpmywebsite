import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './../../styles/index.css';

export default function Navbar() {

   const [location, setLocation] = useState("");


   return (
      <div className="fixed w-full h-24 flex justify-end items-center z-40" >
         

         <NavLink to="/home"
            className="mx-3 focus:outline-none"
            activeClassName="hidden">
            <button>home</button>
         </NavLink>

         <NavLink to="/overview"
            className="mx-3 focus:outline-none"
            activeClassName="active-button focus:outline-none">
            <button>overview</button>
         </NavLink>

         <NavLink to="/contact"
            className="ml-3 mr-10 focus:outline-none"
            activeClassName="active-button focus:outline-none">
            <button>contact</button>
         </NavLink>
      </div>
   );
}
