import React, { useState, useEffect } from "react";
import './../../styles/index.css';

import Navbar from '../utils/Navbar'
import { useParams } from "react-router-dom";

import agora1 from "../../assets/screenshots/agora-icp/image1.png";
import agora2 from "../../assets/screenshots/agora-icp/image2.png";
import agora3 from "../../assets/screenshots/agora-icp/image3.png";
import hannetons1 from "../../assets/screenshots/hannetons-magazine/image1.png";
import paon1 from "../../assets/screenshots/paon/image1.png";
import paon2 from "../../assets/screenshots/paon/image2.png";
import paon3 from "../../assets/screenshots/paon/image3.png";
import paon4 from "../../assets/screenshots/paon/image4.png";
import relique1 from "../../assets/screenshots/relique/image1.gif";
import relique2 from "../../assets/screenshots/relique/image2.png";
import relique3 from "../../assets/screenshots/relique/image3.png";
import six0 from "../../assets/screenshots/six-paire-creative/image0.png";
import six1 from "../../assets/screenshots/six-paire-creative/image1.png";
import six2 from "../../assets/screenshots/six-paire-creative/image2.png";
import six3 from "../../assets/screenshots/six-paire-creative/image3.png";
import six4 from "../../assets/screenshots/six-paire-creative/image4.png";
import sixvideo0 from "../../assets/screenshots/six-paire-creative/video0.mp4";
import sixvideo1 from "../../assets/screenshots/six-paire-creative/video1.mp4";
import sixvideo2 from "../../assets/screenshots/six-paire-creative/video2.mp4";
import sixvideo3 from "../../assets/screenshots/six-paire-creative/video3.mp4";


export default function OfflineProject() {

   const params = useParams();

   const SCREENSHOTS = {
      "agora-icp": {
         image1: agora1,
         image2: agora2,
         image3: agora3,
      },
      "hannetons-magazine": {
         image1: hannetons1
      },
      "paon": {
         image1: paon1,
         image2: paon2,
         image3: paon3,
         image4: paon4
      },
      "relique": {
         image2: relique2,
         image3: relique3,
         image1: relique1,
      },
      "six-paire-creative": {
         image0: six0,
         image1: six1,
         image2: six2,
         image3: six3,
         image4: six4
      }
   }

   const SCREEN_RECORDS = {
      "six-paire-creative": {
         video0: sixvideo0,
         video1: sixvideo1,
         video2: sixvideo2,
         video3: sixvideo3,
      }
   }

   if (!params.name) {
      return null;
   }

   return (
      <>
         <Navbar />

         <div className="w-full flex-col-center">
            <p className="pt-32 pb-20">This website has now been shut, but find below a few screenshots of what it looked like.</p>

            {Object.keys(SCREENSHOTS[params.name]).map(key => {
               return <img src={SCREENSHOTS[params.name][key]} className="w-5/6 mb-12"></img>
            })}

            {params.name === "six-paire-creative"
               ? Object.keys(SCREEN_RECORDS[params.name]).map(key => {
                  return <video src={SCREEN_RECORDS[params.name][key]} autoPlay={true} muted={true} playsInline loop className="w-5/6 mb-12" />
               })
               : null
            }
         </div>
      </>
   );
}

