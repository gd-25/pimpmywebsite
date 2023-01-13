import React, { useState, useEffect } from "react";
import './../../styles/index.css';

import GD from './../../assets/websites/GD.png'
import MADINE from './../../assets/websites/MADINE.png'
import SPC from './../../assets/websites/SPC.png'
import MH from './../../assets/websites/MH.png'
import PAON from './../../assets/websites/PAON.png'
import UNIQUE from './../../assets/websites/UNIQUE.png'
import EI from './../../assets/websites/EI.png'
import HM from './../../assets/websites/HM.png'
import FORUM from './../../assets/websites/FORUM.png'
import RELIQUE from './../../assets/websites/RELIQUE.png'
import TEDx from './../../assets/websites/TEDx.png'
import AGORA from './../../assets/websites/AGORA.png'
import GREG from './../../assets/GREG.jpg'

import ProjectMini from './../utils/ProjectMini'
import Navbar from './../utils/Navbar'

export default function Overview() {
   const [winnerRunningSrc, setWinnerRunningSrc] = useState("");
   const [winnerStillSrc, setWinnerStillSrc] = useState("");

   const [direction, setDirection] = useState(1);
   const [directionMobile, setDirectionMobile] = useState(1);

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
      <div className="w-full overflow-x-hidden">

         <Navbar />

         <div className="w-full flex-col-center md:flex-center pt-32 ">
            <img src={GREG} className="w-72 h-72 object-cover mb-12 md:mb-0"></img>

            <div className="pl-12">
               <h1 className="w-80 md:w-144 text-4xl font-black">Hello there!</h1>
               <div className="h-2" />
               <p className="w-80 md:w-144 ">My name is Gregoire.</p>

               <div className="h-2" />

               <p className="w-80 md:w-144">I grew up in the French alps and I now live in Paris.</p>

               <div className="h-2" />

               <p className="w-80 md:w-144">I learned how to code all by myself over the past 5 years because I wanted to be able to build things the way I want.</p>

               <div className="h-2" />

               <p className="w-80 md:w-144">I can help you renew or build your website or mobile application. I am proficient in Express/Node.js, React/React Native and Wordpress/PHP.</p>

               <div className="h-2" />

               <p className="w-80 md:w-144">Feel free to reach out <button><a href="https://linkedin.com/in/gregoiredeshusses" target="_blank">on Linkedin</a></button>, <button><a href="https://instagram.com/pimpmywebsite" target="_blank">on Instagram</a></button> or <button><a href="mailto:gregoire@pimpmywebsite.fr">via email</a></button>.</p>
            </div>
         </div>

         <div className="h-12" />






         <div className="hidden md:grid grid-cols-2 md:grid-cols-3 px-8 md:px-40 pt-16">


            <ProjectMini src={UNIQUE} href="https://www.unique.eco" expo
               title="UNIQUE"
               line1="A mobile app"
               line2="to find thrift shops" />

            <ProjectMini src={GD} href="https://gasparddeshusses.com" mern
               title="GASPARDDESHUSSES"
               line1="An online art gallery"
               line2="with an integrated eshop." />

            <ProjectMini src={FORUM} href="https://apps.apple.com/fr/app/forum-arts-et-metiers/id6443579765" expo
               title="FORUM ARTS ET MÉTIERS"
               line1="A mobile app"
               line2="for a student forum" />

            <ProjectMini src={MADINE} href="https://madine-france.com" wp
               title="MADINE FRANCE"
               line1="A directory of"
               line2="Made in France brands" />

            <ProjectMini src={RELIQUE} href="/projects/relique" wp
               title="RELIQUE PARIS"
               line1="A Parisian vintage"
               line2="store eshop." />

            <ProjectMini src={SPC} href="/projects/six-paire-creative" react
               title="SIX PAIRE CREATIVE"
               line1="An interactive portfolio"
               line2="for two French publicists." />

            <ProjectMini src={MH} href="https://maisonhouni.com" woo
               title="MAISON HOUNI"
               line1="A clothing and"
               line2="accessories brand eshop." />

            <ProjectMini src={PAON} href="/projects/paon" html
               title="PAON"
               line1="An online platform"
               line2="landing page." />

            <ProjectMini src={TEDx} href="https://tedxessecbusinessschool.fr" html
               title="TEDxESSEC"
               line1="An online portal with"
               line2="access to conferences." />

            <ProjectMini src={EI} href="https://essecinitiatives.io" html
               title="ESSEC Initiatives"
               line1="A student consulting"
               line2="association website." />

            <ProjectMini src={AGORA} href="/projects/agora-icp" wp
               title="AGORA ICP"
               line1="A student-ran"
               line2="news outlet." />

            <ProjectMini src={HM} href="/projects/hannetons-magazine" html
               title="HANNETONS MAG"
               line1="A landing page"
               line2="for a magazine launch." />


         </div>

      </div>
   );
}

