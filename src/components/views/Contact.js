import React, { useState, useEffect } from "react";
import './../../styles/index.css';
import axios from 'axios';

import GD from './../../assets/websites/GD.png'
import AGORA from './../../assets/websites/AGORA.png'
import MH from './../../assets/websites/MH.png'
import PAON from './../../assets/websites/PAON.png'
import TEDx from './../../assets/websites/TEDx.png'
import EI from './../../assets/websites/EI.png'
import HM from './../../assets/websites/HM.png'

import ProjectPreview from './../utils/ProjectPreview'
import Navbar from './../utils/Navbar'

export default function Contact() {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [confirmation, setConfirmation] = useState(false);
   const [formDisabled, setFormDisabled] = useState(false);


   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         setFormDisabled(true);
         const newMessage = { name, email, subject, message };
         await axios.post("https://gregoiredeshusses.herokuapp.com/message/send", newMessage);
         setConfirmation(true);
         document.querySelector("#submitButton").blur();
      } catch (error) {
         console.log(error.message);
      }
   }

   return (
      <>
         <Navbar />

         <div className="w-full md:h-screen flex-center">
            {confirmation ? <div className="px-8 md:px-0 flex-none w-full sm:w-104 md:w-160 z-50">
               <p className="text-3xl md:text-5xl font-black">💌 Thanks!</p>

               <div className="h-4" />

               <p className="md:text-xl font-black">We will get back to you as soon as possible.</p>

               <div className="h-6" />

               <div className="w-full grid grid-cols-8">
                  <div className="col-span-2 md:col-span-1 pt-0.5 h-8 leading-tight">From:</div><div className="col-span-6 md:col-span-7 h-8 pt-0.5 pl-2 break-normal leading-tight">{name}</div>

                  <div className="col-span-8 h-2" />

                  <div className="col-span-2 md:col-span-1 pt-0.5 h-8 leading-tight">Email:</div><div className="col-span-6 md:col-span-7 h-8 pt-0.5 pl-2 break-normal leading-tight">{email}</div>

                  <div className="col-span-8 h-2" />

                  <div className="col-span-2 md:col-span-1 pt-0.5 h-8 leading-tight">Subject:</div><div className="col-span-6 md:col-span-7 h-8 pt-0.5 pl-2 lowercase break-normal leading-tight">{subject}</div>

                  <div className="col-span-8 h-2" />

                  <div className="col-span-2 md:col-span-1 pr-6 leading-tight pt-1">Message:</div><div className="col-span-6 md:col-span-7 w-full h-40 focus px-2 align-text-top break-normal leading-tight pt-1">{message}</div>
               </div>

            </div> : <form className="w-160 md:border md:border-gray-300 py-4 px-6 z-50" onSubmit={handleSubmit} >

                  <div className="flex flex-row mb-4 text-3xl self-start">
                     <p className="font-bold">CONTACT</p>
                  </div>

                  <div className="flex flex-col">
                     <label className="text-sm font-bold">Name</label>
                     <input onChange={(e) => setName(e.target.value)} className="h-8 focus pl-2" value={name}></input>
                  </div>

                  <div className="h-2"></div>

                  <div className="flex flex-col">
                     <label className="text-sm font-bold">Email address <span className="font-black text-red-600">*</span></label>
                     <input onChange={(e) => setEmail(e.target.value)} type="email" required className="h-8 focus pl-2" value={email}></input>
                  </div>

                  <div className="h-2"></div>

                  <div className="flex flex-col justify-start">
                     <label className="text-sm font-bold">Subject</label>
                     <input onChange={(e) => setSubject(e.target.value)} className="h-8 focus pl-2 lowercase" value={subject}></input>
                  </div>

                  <div className="h-2"></div>

                  <div className="flex flex-col justify-start">
                     <label className="text-sm font-bold">Message <span className="font-black text-red-600">*</span></label>
                     <textarea onChange={(e) => setMessage(e.target.value)} required className="w-full h-40 focus px-2 align-text-top break-normal leading-tight pt-1" value={message}></textarea>
                  </div>

                  <div className="h-6"></div>

                  <div className="w-full flex-center">
                     <button id="submitButton" type="submit" disabled={formDisabled} className="text-xl font-bold py-2">
                        {formDisabled ? <span>SENDING...</span> : <span>SEND MESSAGE</span>}
                     </button>
                  </div>

               </form>}
         </div>
         <div className="h-20 md:h-0"></div>

      </>
   );
}

