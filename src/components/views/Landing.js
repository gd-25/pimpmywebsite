import React, { useState, useEffect } from "react";
import './../../styles/index.css';

import GD from './../../assets/websites/GD.png'
import AGORA from './../../assets/websites/AGORA.png'
import SPC from './../../assets/websites/SPC.png'
import MH from './../../assets/websites/MH.png'
import PAON from './../../assets/websites/PAON.png'
import TEDx from './../../assets/websites/TEDx.png'
import RELIQUE from './../../assets/websites/RELIQUE.png'


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

   const [img1loaded, setImg1loaded] = useState(false);
   const [img2loaded, setImg2loaded] = useState(false);
   const [img3loaded, setImg3loaded] = useState(false);
   const [img4loaded, setImg4loaded] = useState(false);


   return (
      <div className={(!img1loaded || !img2loaded || !img3loaded || !img4loaded)
         ? "opacity-0 w-full overflow-x-hidden z-50"
         : "w-full overflow-x-hidden z-50"}>

         <Navbar />


         <div className="h-24 md:h-16" />

         <div className="px-8 md:pl-40 z-50">
            <h1 className="text-5xl md:text-6xl font-black z-50 leading-none">Feeling inspired?</h1>
            <div className="h-5" />
            <h2>Let's build a website <br className="md:hidden" /> people will remember.</h2>
         </div>

         <div className="h-6" />

         <div className="relative w-full hidden md:flex justify-start ">
            <div className="running-animal-superslow flex-none" style={{ WebkitAnimationPlayState: paused }}>
               <img src={winnerRunningSrc} className={(paused === "paused") ? "inline-block opacity-0 h-12 md:h-16 object-contain" : "inline-block h-12 md:h-16 object-contain"} style={{ WebkitAnimationPlayState: paused }} />

            </div>

            <div className="absolute top-0 running-animal-superslow flex-none" style={{ WebkitAnimationPlayState: paused }}>
               <img src={winnerStillSrc} className={(paused === "paused") ? "inline-block h-12 md:h-16 object-contain" : "inline-block opacity-0 h-12 md:h-16 object-contain"} />
            </div>
         </div>

         <div className="hidden md:block marquee">
            <div className="marquee-content" onMouseEnter={() => setPaused("paused")} onMouseLeave={() => setPaused("running")} >
               <span className="item-collection-1">
                  <ProjectPreview src={PAON} href="https://joinpaon.com" html
                     title="PAON"
                     line1="An online platform"
                     line2="landing page."
                     toDoWhenLoaded={() => setImg1loaded(true)} />

                  <ProjectPreview src={TEDx} href="https://tedxessecbusinessschool.fr" html
                     title="TEDxESSEC"
                     line1="A privileged digital"
                     line2="access to conferences."
                     toDoWhenLoaded={() => setImg2loaded(true)} />

                  <ProjectPreview src={GD} href="https://gasparddeshusses.com" mern
                     title="GASPARD DESHUSSES"
                     line1="An online art gallery"
                     line2="with an integrated eshop."
                     toDoWhenLoaded={() => setImg3loaded(true)} />

                  <ProjectPreview src={RELIQUE} href="https://relique.paris" mern
                     title="RELIQUE PARIS"
                     line1="A Parisian vintage"
                     line2="store eshop."
                     toDoWhenLoaded={() => setImg4loaded(true)} />

                  <ProjectPreview src={SPC} react tobepublished
                     title="SIX PAIRE CREATIVE"
                     line1="An interactive portfolio"
                     line2="for two French publicists." />

                  <ProjectPreview src={AGORA} href="https://agoraicp.fr" wp
                     title="AGORA ICP"
                     line1="A student-ran"
                     line2="news outlet."
                  />

                  <ProjectPreview src={MH} href="https://maisonhouni.com" woo
                     title="MAISON HOUNI"
                     line1="A clothing and"
                     line2="accessories brand eshop." />

                  <ProjectPreview src={PAON} href="https://joinpaon.com" html
                     title="PAON"
                     line1="An online platform"
                     line2="landing page." />

                  <ProjectPreview src={TEDx} href="https://tedxessecbusinessschool.fr" html
                     title="TEDxESSEC"
                     line1="A privileged digital"
                     line2="access to conferences." />

                  <ProjectPreview src={GD} href="https://gasparddeshusses.com" mern
                     title="GASPARD DESHUSSES"
                     line1="An online art gallery"
                     line2="with an integrated eshop." />

                  <ProjectPreview src={SPC} react tobepublished
                     title="SIX PAIRE CREATIVE"
                     line1="An interactive portfolio"
                     line2="for two French publicists." />

                  <ProjectPreview src={AGORA} href="https://agoraicp.fr" wp
                     title="AGORA ICP"
                     line1="A student-ran"
                     line2="news outlet."
                  />

                  <ProjectPreview src={MH} href="https://maisonhouni.com" woo
                     title="MAISON HOUNI"
                     line1="A clothing and"
                     line2="accessories brand eshop." />

                  <ProjectPreview src={PAON} href="https://joinpaon.com" html
                     title="PAON"
                     line1="An online platform"
                     line2="landing page." />

                  <ProjectPreview src={TEDx} href="https://tedxessecbusinessschool.fr" html
                     title="TEDxESSEC"
                     line1="A privileged digital"
                     line2="access to conferences." />

                  <ProjectPreview src={GD} href="https://gasparddeshusses.com" mern
                     title="GASPARD DESHUSSES"
                     line1="An online art gallery"
                     line2="with an integrated eshop." />

                  <ProjectPreview src={SPC} react tobepublished
                     title="SIX PAIRE CREATIVE"
                     line1="An interactive portfolio"
                     line2="for two French publicists." />

                  <ProjectPreview src={AGORA} href="https://agoraicp.fr" wp
                     title="AGORA ICP"
                     line1="A student-ran"
                     line2="news outlet."
                  />

                  <ProjectPreview src={MH} href="https://maisonhouni.com" woo
                     title="MAISON HOUNI"
                     line1="A clothing and"
                     line2="accessories brand eshop." />



               </span>


            </div>
            <div></div>
         </div>

         <div className="flex-col-center md:hidden">
            <div className="relative w-full flex justify-start ">
               <div className="running-animal-mobile running-animal-mobile-one flex-none" >
                  <img src={winnerRunningSrc} className="inline-block h-16 object-contain" />
               </div>
            </div>

            <a href="https://relique.paris" target="_blank">
                  <img src={RELIQUE} className="w-full object-top h-56 object-cover" />
            </a>

            <div className="relative pt-4 w-full flex justify-start " style={{ transform: "scaleX(-1)" }}>
               <div className="running-animal-mobile running-animal-mobile-two flex-none" >
                  <img src={winnerRunningSrc} className="inline-block h-16 object-contain" />
               </div>
            </div>

            <a href="https://gasparddeshusses.com" target="_blank">
                  <img src={GD} className="w-full h-56 object-cover border-b border-t border-gray-200" />
            </a>

            <div className="relative pt-4 w-full flex justify-start ">
               <div className="running-animal-mobile running-animal-mobile-three flex-none" >
                  <img src={winnerRunningSrc} className="inline-block h-16 object-contain" />
               </div>
            </div>

            <a href="https://agoraicp.fr" target="_blank">
                  <img src={AGORA} className="w-full h-56 object-top object-cover border-b border-t border-gray-200" />
            </a>

            <div className="relative pt-4 w-full flex justify-start " style={{ transform: "scaleX(-1)" }}>
               <div className="running-animal-mobile running-animal-mobile-four flex-none" >
                  <img src={winnerRunningSrc} className="inline-block h-16 object-contain" />
               </div>
            </div>

            <a href="https://maisonhouni.com" target="_blank">
                  <img src={MH} className="w-full h-56 object-top object-cover" />
            </a>

            <div className="relative pt-4 w-full flex justify-start ">
               <div className="running-animal-mobile running-animal-mobile-five flex-none" >
                  <img src={winnerRunningSrc} className="inline-block h-16 object-contain" />
               </div>
            </div>

            <a href="/" target="_blank">
                  <img src={SPC} className="w-full h-56 object-top object-cover" />
            </a>


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