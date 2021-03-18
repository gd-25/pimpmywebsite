import React, { useState, useEffect } from "react";
import './../../styles/index.css';

import GD from './../../assets/websites/GD.png'
import AGORA from './../../assets/websites/AGORA.png'
import SPC from './../../assets/websites/SPC.png'
import MH from './../../assets/websites/MH.png'
import PAON from './../../assets/websites/PAON.png'
import TEDx from './../../assets/websites/TEDx.png'
import EI from './../../assets/websites/EI.png'
import HM from './../../assets/websites/HM.png'
import COS from './../../assets/websites/COS.png'
import SEA from './../../assets/images/SEA.jpg'

import ProjectMini from './../utils/ProjectMini'
import Navbar from './../utils/Navbar'

export default function Overview() {
   const [winnerRunningSrc, setWinnerRunningSrc] = useState("");
   const [winnerStillSrc, setWinnerStillSrc] = useState("");

   const [direction, setDirection] = useState(-1)

   useEffect(() => {
      const alreadyPlayedWinnerId = localStorage.getItem("winnerId");
      const alreadyPlayedWinnerStillSrc = localStorage.getItem("winnerStillSrc");
      const alreadyPlayedWinnerRunningSrc = localStorage.getItem("winnerRunningSrc");

      if (alreadyPlayedWinnerId) {
         setWinnerRunningSrc(alreadyPlayedWinnerRunningSrc);
         setWinnerStillSrc(alreadyPlayedWinnerStillSrc);
      }
   }, [])

   useEffect(() => {
      setTimeout(() => setDirection(direction * -1), 12000);
   }, [direction])

   return (
      <div className="w-full">

         <Navbar />

         <div className="ml-40 pt-32">
            <h1 className="text-5xl font-black">Hello there!</h1>
            <div className="h-2" />
            <p className="w-200">My name is Gregoire, I'm 23 and I am a web developer. I grew up in the French alps and I am currently studying business at ESSEC in Paris.</p>

            <div className="h-2" />

            <p className="w-200">For me, coding is like building virtual houses, and I love building things.</p>

            <div className="h-2" />

            <p className="w-200">I am proficient in React/Node.js and Wordpress and would love to help you renew or build your website.</p>

            <div className="h-2" />

            <p className="w-200">Feel free to reach out using the contact form above!</p>
         </div>



         <div className="w-full flex h-64 -mt-40">
            <div className="w-11/12 border-b border-black h-64"></div>

            <div className="relative flex justify-center items-end">
               <div className="absolute top-0 w-56 h-56 border-l-2 border-t-2 border-black z-20" style={{ transform: "scale(1, 0.5) rotate(45deg)", marginTop: "-2.05rem" }}></div>
               <div className="absolute top-0 mt-20 mr-24 w-20 h-14 border border-black"></div>
               <div className="absolute top-0 mt-20 ml-24 w-14 h-14 border border-black"></div>

               <div className="absolute top-0 mt-44 mr-24 w-20 h-14 border border-black"></div>
               <div className="absolute top-0 mt-44 ml-24 w-10 h-20 border border-black"></div>

               <div className="w-64 h-48 border-l border-r border-black bg-white z-10"></div>
            </div>

            <div className="w-1/12 border-b border-black h-64 bg-white z-10"></div>
         </div>

         <div className="relative w-full flex justify-start -mt-12">
            <div className="overview-running-animal flex-none" style={{ transform: `scaleX(${direction})` }}>
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
               <img src={winnerRunningSrc} className="inline-block h-12 object-contain" />
            </div>

         </div>

         <div className="grid grid-cols-3 px-40 pt-16">

            <ProjectMini src={GD} href="https://gasparddeshusses.com" mern
               title="GASPARDDESHUSSES"
               line1="An online art gallery"
               line2="with an integrated eshop." />

            <ProjectMini src={AGORA} href="https://agoraicp.fr" wp
               title="AGORA ICP"
               line1="A student-ran"
               line2="news outlet." />

            <ProjectMini src={SPC} react tobepublished
               title="SIX PAIRE CREATIVE"
               line1="An interactive portfolio"
               line2="for two French publicists." />

            <ProjectMini src={MH} href="https://maisonhouni.com" woo
               title="MAISON HOUNI"
               line1="A clothing and"
               line2="accessories brand eshop." />

            <ProjectMini src={PAON} href="https://joinpaon.com" html
               title="PAON"
               line1="An online platform"
               line2="landing page." />

            <ProjectMini src={TEDx} href="https://tedxessecbusinessschool.fr" html
               title="TEDxESSEC"
               line1="A privileged digital"
               line2="access to conferences." />

            <ProjectMini src={EI} href="https://essecinitiatives.io" html
               title="ESSEC Initiatives"
               line1="A student consulting"
               line2="association website." />

            <ProjectMini src={COS} href="https://lacageosport.com" woo
               title="LA CAGE Ô SPORT"
               line1="A local sports shop"
               line2="online boutique." />

            <ProjectMini src={HM} html
               title="HANNETONS MAG"
               line1="A magazine launch"
               line2="landing page." />


         </div>

      </div>
   );
}


/*
<img src={SEA} className="rounded-full w-64 h-64 object-cover" />
<span className="item-collection-2">

               <ProjectMini src={PAON} href="https://joinpaon.com" html
                  title="PAON"
                  line1="An online platform"
                  line2="landing page." />

                  <ProjectMini src={TEDx} href="https://tedxessecbusinessschool.fr" html
                  title="TEDxESSEC"
                  line1="A TEDx event website"  />

                  <ProjectMini src={GD} href="https://gasparddeshusses.com" mern
                  title="GASPARD DESHUSSES"
                  line1="An art gallery website"
                  line2="with an integrated eshop." />

                  <ProjectMini src={AGORA} href="https://agoraicp.fr" wp
                  title="AGORA ICP"
                  line1="A student-ran"
                  line2="media website." />

                  <ProjectMini src={MH} href="https://maisonhouni.com" woo
                  title="MAISON HOUNI"
                  line1="An online boutique"
                  line2="eshop and showroom." />

                  <ProjectMini src={EI} href="https://essecinitiatives.io" html
                   title="ESSEC INITIATIVES"
                   line1="A consulting student"
                   line2="association website." />

                  <ProjectMini src={HM}
                  title="HANNETONS MAGAZINE"
                  line1="A magazine launch"
                  line2="landing page." />

               </span>




<div className="flex flex-nowrap overflow-x-hidden"  style={{ width: "200%", animation: "moveSlideshow 20s linear infinite" }}>
            <img src={GD} className="w-80 object-contain border-2 border-transparent hover:border-black"  />
            <img src={MH} className="w-80 object-contain border-2 border-transparent hover:border-black" />
            <img src={TEDx} className="w-80 object-contain  border-2 border-transparent hover:border-black" />
            <img src={AGORA} className="w-80 object-contain border-2 border-transparent hover:border-yellow-500" />
            <img src={GD} className="w-80 object-contain border-2 border-transparent hover:border-black" />
            <img src={MH} className="w-80 object-contain border-2 border-transparent hover:border-black" />
            <img src={TEDx} className="w-80 object-contain  border-2 border-transparent hover:border-black" />
            <img src={AGORA} className="w-80 object-contain border-2 border-transparent hover:border-yellow-500" />
            <img src={GD} className="w-80 object-contain border-2 border-transparent hover:border-black" />
            <img src={MH} className="w-80 object-contain border-2 border-transparent hover:border-black" />
            <img src={TEDx} className="w-80 object-contain  border-2 border-transparent hover:border-black" />
            <img src={AGORA} className="w-80 object-contain border-2 border-transparent hover:border-yellow-500" />

         </div>


 <div className="ml-88">
            <h1 className="text-7xl font-black">On change tout?</h1>
            <div className="h-5" />
            <h2>Votre site internet à la carte, en deux semaines. Top chronos.</h2>
         </div>
          */