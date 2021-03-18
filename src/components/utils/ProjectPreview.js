import React, { useState, useEffect } from "react";
import './../../styles/index.css';

import GD from './../../assets/websites/GD.png'
import AGORA from './../../assets/websites/AGORA.png'
import MH from './../../assets/websites/MH.png'
import PAON from './../../assets/websites/PAON.png'
import TEDx from './../../assets/websites/TEDx.png'
import EI from './../../assets/websites/EI.png'
import HM from './../../assets/websites/HM.png'

export default function ProjectPreview(prop) {
   const [hovering, setHovering] = useState(false);

   return (
      <div className="relative item1" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
         <img src={prop.src} className={hovering ? "cursor-pointer opacity-10" : "cursor-pointer"} />
         <div className={hovering ? "absolute top-0 w-full h-full flex-col-center" : "opacity-0 absolute top-0 w-full h-full flex-col-center"}>

            <div className="w-full text-center">
               <h1 className="text-4xl font-bold">{prop.title}</h1>
               <h2>{prop.line1}
                  {prop.line2 && <span><br />{prop.line2}</span>}
                  {prop.line3 && <span><br />{prop.line3}</span>}
                  {prop.line4 && <span><br />{prop.line4}</span>}
               </h2>
            </div>

            <div className="h-2 flex-none" />
            {prop.mern && <div className="flex-center text-sm">
               <p className="rounded-lg bg-green-300 text-center px-2 mx-1">mongodb</p>
               <p className="rounded-lg bg-blue-300 text-center px-2 mx-1">express</p>
               <p className="rounded-lg bg-pink-300 text-center px-2 mx-1">react</p>
               <p className="rounded-lg bg-yellow-300 text-center px-2 mx-1">node.js</p>
            </div>}

            {prop.woo && <div className="flex-center text-sm">
               <p className="rounded-lg bg-green-300 text-center px-2 mx-1">wordpress</p>
               <p className="rounded-lg bg-blue-300 text-center px-2 mx-1">woocommerce</p>
               <p className="rounded-lg bg-pink-300 text-center px-2 mx-1">stripe</p>
            </div>}

            {prop.wp && <div className="flex-center text-sm">
               <p className="rounded-lg bg-green-300 text-center px-2 mx-1">wordpress</p>
               <p className="rounded-lg bg-pink-300 text-center px-2 mx-1">theme customization</p>
            </div>}

            {prop.html && <div className="flex-center text-sm">
               <p className="rounded-lg bg-green-300 text-center px-2 mx-1">html</p>
               <p className="rounded-lg bg-blue-300 text-center px-2 mx-1">css</p>
               <p className="rounded-lg bg-pink-300 text-center px-2 mx-1">javascript</p>
            </div>}


            {prop.href && <div>
               <div className="h-3" />
               <button>
                  <a href={prop.href} target="_blank" className="">visit website</a>
               </button>
            </div>}

         </div>
      </div>
   );
}
