import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './../../styles/index.css';

export default function Navbar() {

   const [location, setLocation] = useState("");
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      if (menuOpen) {
         setMenuOpen(!menuOpen)
         document.querySelector(".nav-icon-before").style.transform = "scale(1)";
         document.querySelector(".nav-icon-middle").style.transform = "scale(1)";
         document.querySelector(".nav-icon-after").style.transform = "scale(1)";
      } else {
         setMenuOpen(!menuOpen)
         document.querySelector(".nav-icon-before").style.transform = "translateY(11px) rotate(135deg)";
         document.querySelector(".nav-icon-middle").style.transform = "scale(0)";
         document.querySelector(".nav-icon-after").style.transform = "translateY(-11px) rotate(-135deg)";
      }
   }

   return (
      <div className="fixed w-full h-24 flex justify-end items-center z-50 bg-white md:bg-transparent" >


         {(window.innerWidth > 768) && <div>
            <NavLink to="/home"
               className="mx-3 focus:outline-none"
               activeClassName="hidden">
               <button>home</button>
            </NavLink>

            <NavLink to="/about"
               className="ml-3 mr-10 focus:outline-none"
               activeClassName="active-button focus:outline-none">
               <button>about</button>
            </NavLink>

         </div>}

         {
            (window.innerWidth <= 768) && <div>
               <div className={(location === "/") ? "z-0 opacity-0 md:hidden" : "nav-icon md:hidden"} onClick={toggleMenu}>
                  <div className="nav-icon-before"></div>
                  <div className="nav-icon-middle"></div>
                  <div className="nav-icon-after"></div>
               </div>

               <div className={`menu fixed bg-white w-2/3 mt-24 z-50 ${menuOpen ? 'show' : ''}`}>
                  <NavLink to="/home"
                     className="mx-3 focus:outline-none"
                     activeClassName="hidden">
                     <button className="text-3xl font-bold py-2">home</button>
                  </NavLink>

                  <NavLink to="/about"
                     className="mx-3 focus:outline-none"
                     activeClassName="active-button focus:outline-none">
                     <button className="text-3xl font-bold py-2">about</button>
                  </NavLink>

                  <a href="/"
                     className="focus:outline-none flex-col-center">
                     <button className="text-xs font-bold mt-8 active-button">want to go</button>
                     <button className="text-xs font-bold active-button focus:outline-none">for another race?</button>
                  </a>
               </div></div>
         }





      </div >
   );
}
