import React, { useState, useEffect } from "react";
import './../../styles/index.css';

import GD from './../../assets/websites/GD.png'
import AGORA from './../../assets/websites/AGORA.png'
import MH from './../../assets/websites/MH.png'
import PAON from './../../assets/websites/PAON.png'
import TEDx from './../../assets/websites/TEDx.png'
import EI from './../../assets/websites/EI.png'
import HM from './../../assets/websites/HM.png'

import ProjectPreview from './../utils/ProjectPreview'
import Navbar from './../utils/Navbar'

export default function Landing() {

   const [winnerRunningSrc, setWinnerRunningSrc] = useState("");
   const [winnerStillSrc, setWinnerStillSrc] = useState("");

   const [paused, setPaused] = useState("running")

   const [secondAnimal, setSecondAnimal] = useState(false);
   const [thirdAnimal, setThirdAnimal] = useState(false);
   const [fourthAnimal, setFourthAnimal] = useState(false);

   useEffect(() => {
      const alreadyPlayedWinnerId = localStorage.getItem("winnerId");
      const alreadyPlayedWinnerStillSrc = localStorage.getItem("winnerStillSrc");
      const alreadyPlayedWinnerRunningSrc = localStorage.getItem("winnerRunningSrc");

      if (alreadyPlayedWinnerId) {
         setWinnerRunningSrc(alreadyPlayedWinnerRunningSrc);
         setWinnerStillSrc(alreadyPlayedWinnerStillSrc);
      }
   }, [])

  


   return (
      <div className="w-full overflow-x-hidden z-50">

         <Navbar />


         <div className="h-16" />

         <div className="ml-40 z-50">
            <h1 className="text-6xl font-black z-50">Feeling inspired?</h1>
            <div className="h-5" />
            <h2>Let's build a website people will remember.</h2>
         </div>

         <div className="h-6" />

         <div className="relative w-full flex justify-start ">
            <div className="running-animal-superslow flex-none" style={{ WebkitAnimationPlayState: paused }}>
               <img src={winnerRunningSrc} className={(paused === "paused") ? "inline-block opacity-0 h-20 object-contain" : "inline-block h-20 object-contain"} style={{ WebkitAnimationPlayState: paused }} />
               
            </div>

            <div className="absolute top-0 running-animal-superslow flex-none" style={{ WebkitAnimationPlayState: paused }}>
               <img src={winnerStillSrc} className={(paused === "paused") ? "inline-block h-20 object-contain" : "inline-block opacity-0 h-20 object-contain"} />
               

            </div>



         </div>


         <div className="marquee">
            <div className="marquee-content" onMouseEnter={() => setPaused("paused")} onMouseLeave={() => setPaused("running")}>
               <span className="item-collection-1">
                  <ProjectPreview src={PAON} href="https://joinpaon.com" html
                     title="PAON"
                     line1="An online platform"
                     line2="landing page." />

                  <ProjectPreview src={TEDx} href="https://tedxessecbusinessschool.fr" html
                     title="TEDxESSEC"
                     line1="A TEDx event website" />

                  <ProjectPreview src={GD} href="https://gasparddeshusses.com" mern
                     title="GASPARD DESHUSSES"
                     line1="An art gallery website"
                     line2="with an integrated eshop." />

                  <ProjectPreview src={AGORA} href="https://agoraicp.fr" wp
                     title="AGORA ICP"
                     line1="A student-ran"
                     line2="media website." />

                  <ProjectPreview src={MH} href="https://maisonhouni.com" woo
                     title="MAISON HOUNI"
                     line1="An online boutique"
                     line2="eshop and showroom." />

                  <ProjectPreview src={PAON} href="https://joinpaon.com" html
                     title="PAON"
                     line1="An online platform"
                     line2="landing page." />

                  <ProjectPreview src={TEDx} href="https://tedxessecbusinessschool.fr" html
                     title="TEDxESSEC"
                     line1="A TEDx event website" />

                  <ProjectPreview src={GD} href="https://gasparddeshusses.com" mern
                     title="GASPARD DESHUSSES"
                     line1="An art gallery website"
                     line2="with an integrated eshop." />

                  <ProjectPreview src={AGORA} href="https://agoraicp.fr" wp
                     title="AGORA ICP"
                     line1="A student-ran"
                     line2="media website." />

                  <ProjectPreview src={MH} href="https://maisonhouni.com" woo
                     title="MAISON HOUNI"
                     line1="An online boutique"
                     line2="eshop and showroom." />

                  <ProjectPreview src={PAON} href="https://joinpaon.com" html
                     title="PAON"
                     line1="An online platform"
                     line2="landing page." />

                  <ProjectPreview src={TEDx} href="https://tedxessecbusinessschool.fr" html
                     title="TEDxESSEC"
                     line1="A TEDx event website" />

                  <ProjectPreview src={GD} href="https://gasparddeshusses.com" mern
                     title="GASPARD DESHUSSES"
                     line1="An art gallery website"
                     line2="with an integrated eshop." />

                  <ProjectPreview src={AGORA} href="https://agoraicp.fr" wp
                     title="AGORA ICP"
                     line1="A student-ran"
                     line2="media website." />

                  <ProjectPreview src={MH} href="https://maisonhouni.com" woo
                     title="MAISON HOUNI"
                     line1="An online boutique"
                     line2="eshop and showroom." />
               </span>


            </div>
            <div></div>
         </div>


      </div>
   );
}


/*

 useEffect(() => {
      setTimeout(() => setSecondAnimal(true), 12000)
      setTimeout(() => setThirdAnimal(true), 24000)
      setTimeout(() => setFourthAnimal(true), 36000)

   }, [])


{secondAnimal && <img src={winnerRunningSrc} className={(paused === "paused") ? "inline-block opacity-0 h-20 object-contain" : "inline-block h-20 object-contain"} style={{ WebkitAnimationPlayState: paused }}  />}
               {thirdAnimal && <img src={winnerRunningSrc} className={(paused === "paused") ? "inline-block opacity-0 h-20 object-contain" : "inline-block h-20 object-contain"} style={{ WebkitAnimationPlayState: paused }}  />}
               {fourthAnimal && <img src={winnerRunningSrc} className={(paused === "paused") ? "inline-block opacity-0 h-20 object-contain" : "inline-block h-20 object-contain"} style={{ WebkitAnimationPlayState: paused }}  />}

{secondAnimal && <img src={winnerStillSrc} className={(paused === "paused") ? "inline-block h-20 object-contain" : "inline-block opacity-0 h-20 object-contain"} />}
               {thirdAnimal && <img src={winnerStillSrc} className={(paused === "paused") ? "inline-block h-20 object-contain" : "inline-block opacity-0 h-20 object-contain"} />}
               {fourthAnimal && <img src={winnerStillSrc} className={(paused === "paused") ? "inline-block h-20 object-contain" : "inline-block opacity-0 h-20 object-contain"} />}



<span className="item-collection-2">

               <ProjectPreview src={PAON} href="https://joinpaon.com" html
                  title="PAON"
                  line1="An online platform"
                  line2="landing page." />

                  <ProjectPreview src={TEDx} href="https://tedxessecbusinessschool.fr" html
                  title="TEDxESSEC"
                  line1="A TEDx event website"  />

                  <ProjectPreview src={GD} href="https://gasparddeshusses.com" mern
                  title="GASPARD DESHUSSES"
                  line1="An art gallery website"
                  line2="with an integrated eshop." />

                  <ProjectPreview src={AGORA} href="https://agoraicp.fr" wp
                  title="AGORA ICP"
                  line1="A student-ran"
                  line2="media website." />

                  <ProjectPreview src={MH} href="https://maisonhouni.com" woo
                  title="MAISON HOUNI"
                  line1="An online boutique"
                  line2="eshop and showroom." />

                  <ProjectPreview src={EI} href="https://essecinitiatives.io" html
                   title="ESSEC INITIATIVES"
                   line1="A consulting student"
                   line2="association website." />

                  <ProjectPreview src={HM}
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