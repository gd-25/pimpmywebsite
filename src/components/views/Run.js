import React, { useState, useEffect } from "react";
import './../../styles/index.css';

import BUFFALO from './../../assets/animals/running/BUFFALO.gif'
import COW from './../../assets/animals/running/COW.gif'
import DONKEY from './../../assets/animals/running/DONKEY.gif'
import LAMA from './../../assets/animals/running/LAMA.gif'
import LION from './../../assets/animals/running/LION.gif'
import MONKEY from './../../assets/animals/running/MONKEY.gif'
import PIKACHU from './../../assets/animals/running/PIKACHU.gif'
import SHEEP from './../../assets/animals/running/SHEEP.gif'
import TIGER from './../../assets/animals/running/TIGER.gif'

import BUFFALOSTILL from './../../assets/animals/still/BUFFALO.gif'
import COWSTILL from './../../assets/animals/still/COW.gif'
import DONKEYSTILL from './../../assets/animals/still/DONKEY.gif'
import LAMASTILL from './../../assets/animals/still/LAMA.gif'
import LIONSTILL from './../../assets/animals/still/LION.gif'
import MONKEYSTILL from './../../assets/animals/still/MONKEY.gif'
import PIKACHUSTILL from './../../assets/animals/still/PIKACHU.gif'
import SHEEPSTILL from './../../assets/animals/still/SHEEP.gif'
import TIGERSTILL from './../../assets/animals/still/TIGER.gif'

import BUFFALOFACE from './../../assets/animals/face/BUFFALO.gif'
import COWFACE from './../../assets/animals/face/COW.gif'
import DONKEYFACE from './../../assets/animals/face/DONKEY.gif'
import LAMAFACE from './../../assets/animals/face/LAMA.gif'
import LIONFACE from './../../assets/animals/face/LION.gif'
import MONKEYFACE from './../../assets/animals/face/MONKEY.gif'
import PIKACHUFACE from './../../assets/animals/face/PIKACHU.gif'
import SHEEPFACE from './../../assets/animals/face/SHEEP.gif'
import TIGERFACE from './../../assets/animals/face/TIGER.gif'

import HEARTS from './../../assets/logos/hearts.svg'

export default function Run() {

   const [introPassed, setIntroPassed] = useState(false);
   const [running, setRunning] = useState(false);
   const [winner, setWinner] = useState(false);
   const [winnerName, setWinnerName] = useState("");

   const [buffaloClass, setBuffaloClass] = useState("running-animal-slow h-full object-contain relative z-40");
   const [cowClass, setCowClass] = useState("running-animal-mid h-full object-contain relative z-40");
   const [donkeyClass, setDonkeyClass] = useState("running-animal-mid h-full object-contain relative z-40");
   const [lamaClass, setLamaClass] = useState("running-animal-fast h-full object-contain relative z-40");
   const [lionClass, setLionClass] = useState("running-animal-mid h-full object-contain relative z-40");
   const [monkeyClass, setMonkeyClass] = useState("running-animal-mid h-full object-contain relative z-40");
   const [pikachuClass, setPikachuClass] = useState("running-animal-mid h-full object-contain relative z-40");
   const [sheepClass, setSheepClass] = useState("running-animal-slow h-full object-contain relative z-40");
   const [tigerClass, setTigerClass] = useState("running-animal-mid h-full object-contain relative z-40");

   const [img1loaded, setImg1loaded] = useState(false);
   const [img2loaded, setImg2loaded] = useState(false);
   const [img3loaded, setImg3loaded] = useState(false);
   const [img4loaded, setImg4loaded] = useState(false);
   const [img5loaded, setImg5loaded] = useState(false);
   const [img6loaded, setImg6loaded] = useState(false);
   const [img7loaded, setImg7loaded] = useState(false);
   const [img8loaded, setImg8loaded] = useState(false);
   const [img9loaded, setImg9loaded] = useState(false);


   const choosingWinner = (e, setWinnerClass) => {
      setWinnerClass("running-animal-fastest h-full object-contain relative z-40");
      setIntroPassed(true);
      localStorage.setItem("winnerId", e.target.id)
      localStorage.setItem("winnerRunningSrc", e.target.getAttribute("runningsrc"))
      localStorage.setItem("winnerStillSrc", e.target.getAttribute("stillsrc"))
      setWinnerName(e.target.getAttribute("runningsrc"))
      window.scrollTo(0, 0);
   }

   const launchRace = () => {
      setRunning(true);
      setTimeout(() => setWinner(true), 2800)
   }




   return (
      <>
         {introPassed
            ? <div className="w-full h-screen flex flex-col justify-between items-start">


               {winner
                  ? <div className="w-full md:h-screen flex-col-center pt-8 md:pt-0">
                     <h1 className="text-4xl font-black">YOU WON!</h1>
                     <div className="h-3 flex-none" />
                     <div className="w-80 md:w-120 text-center">
                        <p>The reason you won is because you made a right decision when choosing your avatar.</p>
                        <div className="h-3 flex-none" />
                        <p>Now is the time to make another good decision about your future website.</p>
                     </div>
                     <div className="h-3 flex-none" />
                     <button className="mx-2">
                        <a href="/home" className="md:hidden text-3xl font-bold active-button my-8">Let's go!</a>
                        <a href="/home" className="hidden md:block">Let's go!</a>
                     </button>
                     <div className="h-3" />
                     <img src={winnerName} className="h-40 md:h-56 object-contain" />
                  </div>
                  : <div className="h-screen flex-col-center w-full">

                     {(window.innerWidth < 768) ? <div className={(img1loaded && img2loaded && img3loaded && img4loaded) ? "h-screen flex-col-center w-full" : "opacity-0 h-screen flex-col-center w-full"}>


                        <div className="relative border-b border-black w-full h-12 pl-5">
                           <img src={DONKEYSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                           <img src={DONKEY} className={running ? donkeyClass : "opacity-0"} onLoad={() => setImg1loaded(true)} />
                           <p className="absolute top-0 left-0 h-full border-l border-black ml-24 -10"></p>


                           <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                        </div>
                        <div className="relative border-b border-black w-full h-12 pl-8">
                           <img src={LAMASTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                           <img src={LAMA} className={running ? lamaClass : "opacity-0"} onLoad={() => setImg2loaded(true)} />
                           <p className="absolute top-0 left-0 h-full border-l border-black ml-24 z-10"></p>


                           <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                        </div>
                        <div className="relative border-b border-black w-full h-12">
                           <img src={LIONSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                           <img src={LION} className={running ? lionClass : "opacity-0"} onLoad={() => setImg3loaded(true)} />
                           <p className="absolute top-0 left-0 h-full border-l border-black ml-24 z-10"></p>


                           <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                        </div>

                        <div className="relative border-b border-black w-full h-12 pl-4">
                           <img src={PIKACHUSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                           <img src={PIKACHU} className={running ? pikachuClass : "opacity-0"} onLoad={() => setImg4loaded(true)} />
                           <p className="absolute top-0 left-0 h-full border-l border-black ml-24 z-10"></p>


                           <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>

                        </div>
                        <div className="relative border-b border-black w-full h-12 pl-5">
                           <img src={COWSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                           <img src={COW} className={running ? cowClass : "opacity-0"} onLoad={() => setImg5loaded(true)} />
                           <p className="absolute top-0 left-0 h-full border-l border-black ml-24 z-10"></p>

                           <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                        </div>
                        <div className="relative border-b border-black w-full h-12">
                           <img src={MONKEYSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                           <img src={MONKEY} className={running ? monkeyClass : "opacity-0"} onLoad={() => setImg6loaded(true)} />
                           <p className="absolute top-0 left-0 h-full border-l border-black ml-24 z-10"></p>

                           <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>

                        </div>


                     </div>
                        : <div className={(img1loaded && img2loaded && img3loaded && img4loaded && img5loaded && img6loaded && img7loaded && img8loaded && img9loaded) ? "h-screen flex-col-center w-full" : "opacity-0 h-screen flex-col-center w-full"}>
                           <div className="relative border-b border-black w-full h-1/9 pl-5">
                              <img src={BUFFALOSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={BUFFALO} className={running ? buffaloClass : "opacity-0"} onLoad={() => setImg1loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                           </div>
                           <div className="relative border-b border-black w-full h-1/9 pl-5">
                              <img src={COWSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={COW} className={running ? cowClass : "opacity-0"} onLoad={() => setImg2loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                           </div>
                           <div className="relative border-b border-black w-full h-1/9 pl-5">
                              <img src={DONKEYSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={DONKEY} className={running ? donkeyClass : "opacity-0"} onLoad={() => setImg3loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                           </div>
                           <div className="relative border-b border-black w-full h-1/9 pl-14">
                              <img src={LAMASTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={LAMA} className={running ? lamaClass : "opacity-0"} onLoad={() => setImg4loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                           </div>
                           <div className="relative border-b border-black w-full h-1/9">
                              <img src={LIONSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={LION} className={running ? lionClass : "opacity-0"} onLoad={() => setImg5loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>
                           </div>
                           <div className="relative border-b border-black w-full h-1/9">
                              <img src={MONKEYSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={MONKEY} className={running ? monkeyClass : "opacity-0"} onLoad={() => setImg6loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>

                           </div>
                           <div className="relative border-b border-black w-full h-1/9 pl-4">
                              <img src={PIKACHUSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={PIKACHU} className={running ? pikachuClass : "opacity-0"} onLoad={() => setImg7loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>

                           </div>
                           <div className="relative border-b border-black w-full h-1/9 pl-4">
                              <img src={SHEEPSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={SHEEP} className={running ? sheepClass : "opacity-0"} onLoad={() => setImg8loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>

                           </div>
                           <div className="relative border-b border-black w-full h-1/9">
                              <img src={TIGERSTILL} className={running ? "hidden" : "h-full object-contain relative z-40"} />
                              <img src={TIGER} className={running ? tigerClass : "opacity-0"} onLoad={() => setImg9loaded(true)} />
                              <p className="absolute top-0 left-0 h-full border-l border-black ml-36 z-10"></p>
                              <p className="absolute inset-center  h-full border-l border-black z-10"></p>
                              <p className="absolute top-0 right-0 h-full border-l border-black mr-20 z-10"></p>

                           </div>
                        </div>}


                  </div>}



               {(!running && !winner && window.innerWidth > 768) && <div className="absolute inset-center flex-col-center bg-white p-8 z-50">
                  {(!img1loaded || !img2loaded || !img3loaded || !img4loaded || !img5loaded || !img6loaded || !img7loaded || !img8loaded || !img9loaded)
                     ? <div className="flex-col-center">
                        <div className="text-5xl font-bold focus:outline-none">LOADING...</div>
                        <img src={HEARTS} className="h-10 object-contain" />
                        <div className="h-2" />
                        <p className="w-104 text-center">Depending on your internet connexion, this may take a few seconds.</p>
                     </div>
                     : <button className="text-9xl font-bold focus:outline-none" onClick={launchRace}>PLAY</button>}
               </div>}


               {(!running && !winner && window.innerWidth <= 768) && <div className="absolute top-0 w-full flex-col-center p-8 z-50">
                  {(!img1loaded || !img2loaded || !img3loaded || !img4loaded || !img5loaded || !img6loaded)
                     ? <div className="flex-col-center">
                        <div className="text-xl font-bold focus:outline-none pt-4">LOADING</div>
                        <img src={HEARTS} className="h-10 object-contain" />
                        <div className="h-2" />
                        <p className="w-80 text-center">Depending on your internet connexion, this may take a few seconds.</p>
                     </div>
                     : <button className="text-9xl font-bold focus:outline-none active-button" onClick={launchRace}>PLAY</button>}
               </div>}

            </div>
            : <div className="w-full md:h-screen flex-col-center py-12 md:py-20">
               <div className="w-80 md:w-120 text-center">
                  <p>Welcome!</p>
                  <div className="h-2 flex-none" />
                  <p>Please pick one of the creatures below, who will be your partner for this journey.</p>
                  <div className="h-2 flex-none" />

                  <p className="text-xs">If you're not in a playful mood, you can <button><a href="/home">access the landing page directly</a></button>.</p>

               </div>

               <div className="h-10 flex-none" />

               <div className="hidden md:grid grid-cols-3">
                  <img src={LIONFACE} id="Lion" stillsrc={LIONSTILL} runningsrc={LION} onClick={(e) => choosingWinner(e, setLionClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={BUFFALOFACE} id="Buffalo" stillsrc={BUFFALOSTILL} runningsrc={BUFFALO} onClick={(e) => choosingWinner(e, setBuffaloClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={SHEEPFACE} id="Sheep" stillsrc={SHEEPSTILL} runningsrc={SHEEP} onClick={(e) => choosingWinner(e, setSheepClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={DONKEYFACE} id="Donkey" stillsrc={DONKEYSTILL} runningsrc={DONKEY} onClick={(e) => choosingWinner(e, setDonkeyClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={PIKACHUFACE} id="Pikachu" stillsrc={PIKACHUSTILL} runningsrc={PIKACHU} onClick={(e) => choosingWinner(e, setPikachuClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={TIGERFACE} id="Tiger" stillsrc={TIGERSTILL} runningsrc={TIGER} onClick={(e) => choosingWinner(e, setTigerClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={MONKEYFACE} id="Monkey" stillsrc={MONKEYSTILL} runningsrc={MONKEY} onClick={(e) => choosingWinner(e, setMonkeyClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={COWFACE} id="Cow" stillsrc={COWSTILL} runningsrc={COW} onClick={(e) => choosingWinner(e, setCowClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={LAMAFACE} id="Lama" stillsrc={LAMASTILL} runningsrc={LAMA} onClick={(e) => choosingWinner(e, setLamaClass)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
               </div>

               <div className="w-72 flex flex-wrap justify-center md:hidden">
                  <img src={LIONFACE} id="Lion" stillsrc={LIONSTILL} runningsrc={LION} onClick={(e) => choosingWinner(e, setLionClass)} className="w-32 h-32 object-contain mx-2 my-2 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={PIKACHUFACE} id="Pikachu" stillsrc={PIKACHUSTILL} runningsrc={PIKACHU} onClick={(e) => choosingWinner(e, setPikachuClass)} className="w-32 h-32 object-contain mx-2 my-2 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={DONKEYFACE} id="Donkey" stillsrc={DONKEYSTILL} runningsrc={DONKEY} onClick={(e) => choosingWinner(e, setDonkeyClass)} className="w-32 h-32 object-contain mx-2 my-2 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={LAMAFACE} id="Lama" stillsrc={LAMASTILL} runningsrc={LAMA} onClick={(e) => choosingWinner(e, setLamaClass)} className="w-32 h-32 object-contain mx-2 my-2 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={MONKEYFACE} id="Monkey" stillsrc={MONKEYSTILL} runningsrc={MONKEY} onClick={(e) => choosingWinner(e, setMonkeyClass)} className="w-32 h-32 object-contain mx-2 my-2 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={COWFACE} id="Cow" stillsrc={COWSTILL} runningsrc={COW} onClick={(e) => choosingWinner(e, setCowClass)} className="w-32 h-32 object-contain mx-2 my-2 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
               </div>


            </div>}

      </>
   );
}


/*

----- MODE WIN ONCE -------
const choosingWinner = (e, setWinnerClass) => {
      console.log(e.target.id)

      const alreadyPlayedWinnerId = localStorage.getItem("winnerId");
      const alreadyPlayedWinnerrunningsrc = localStorage.getItem("winnerrunningsrc");

      if (alreadyPlayedWinnerId) {
         const alreadyWon = eval("(set" + alreadyPlayedWinnerId + "Class)");
         alreadyWon("running-animal-fastest h-full object-contain relative z-40")
         setIntroPassed(true);
         setWinnerName(alreadyPlayedWinnerrunningsrc)

      } else {
         setWinnerClass("running-animal-fastest h-full object-contain relative z-40");
         setIntroPassed(true);
         localStorage.setItem("winnerId", e.target.id)
         localStorage.setItem("winnerrunningsrc", e.target.getAttribute("runningsrc"))
         setWinnerName(e.target.getAttribute("runningsrc"))
      }
   }

useEffect(() => {
      const alreadyPlayedWinnerId = localStorage.getItem("winnerId");
      const alreadyPlayedWinnerrunningsrc = localStorage.getItem("winnerrunningsrc");

      if (alreadyPlayedWinnerId) {
         setWinnerName(alreadyPlayedWinnerrunningsrc);
         setIntroPassed(true);
         setWinner(true);
      }
   }, [])



   __________________-









const alreadyPlayedWinner = localStorage.getItem("winner");
      if (alreadyPlayedWinner) {

      } else {
         setWinnerClass("running-animal-fastest h-full object-contain relative z-40");
         setIntroPassed(true);
         localStorage.setItem("winner", e.target.getAttribute("runningsrc"))
         setWinnerName(e.target.getAttribute("runningsrc"))
      }







<img src={LIONFACE} runningsrc={LION} onClick={(e) => choosingWinner(e, setLionSpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" />
                  <img src={BUFFALOFACE} runningsrc={BUFFALO} onClick={(e) => choosingWinner(e, setBuffaloSpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer" />
                  <img src={SHEEPFACE} runningsrc={SHEEP} onClick={(e) => choosingWinner(e, setSheepSpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer" />
                  <img src={DONKEYFACE} runningsrc={DONKEY} onClick={(e) => choosingWinner(e, setDonkeySpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-500 hover:bg-gray-600 cursor-pointer" />
                  <img src={PIKACHUFACE} runningsrc={PIKACHU} onClick={(e) => choosingWinner(e, setPikachuSpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-yellow-200 hover:bg-yellow-300 cursor-pointer" />
                  <img src={TIGERFACE} runningsrc={TIGER} onClick={(e) => choosingWinner(e, setTigerSpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-800 hover:bg-black cursor-pointer" />
                  <img src={MONKEYFACE} runningsrc={MONKEY} onClick={(e) => choosingWinner(e, setMonkeySpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer" />
                  <img src={COWFACE} runningsrc={COW} onClick={(e) => choosingWinner(e, setCowSpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-purple-500 hover:bg-purple-600 cursor-pointer" />
                  <img src={LAMAFACE} runningsrc={LAMA} onClick={(e) => choosingWinner(e, setLamaSpeed)} className="w-32 mx-1.5 my-1.5 rounded-full bg-yellow-600 hover:bg-yellow-700 cursor-pointer" />

const runningAnimal = (step, margin, setMargin, imageRunning, imageStill) => {
      let i = 50;
      const interval = setInterval(() => {

         if (i < (window.screen.width - 130)) {
            setMargin(margin => margin + step)
            i = i + step;
         } else {
            setRunning(false);
            setWinner(true);
            clearInterval(interval);
         }
      }, 5);
   }


   useEffect(() => {
      if (running) {
         runningAnimal(buffaloSpeed, buffaloMargin, setBuffaloMargin, BUFFALO, BUFFALOSTILL);
         runningAnimal(cowSpeed, cowMargin, setCowMargin, COW, COWSTILL);
         runningAnimal(donkeySpeed, donkeyMargin, setDonkeyMargin, DONKEY, DONKEYSTILL);
         runningAnimal(lamaSpeed, lamaMargin, setLamaMargin, LAMA, LAMASTILL);
         runningAnimal(lionSpeed, lionMargin, setLionMargin, LION, LIONSTILL);
         runningAnimal(monkeySpeed, monkeyMargin, setMonkeyMargin, MONKEY, MONKEYSTILL);
         runningAnimal(pikachuSpeed, pikachuMargin, setPikachuMargin, PIKACHU, PIKACHUSTILL);
         runningAnimal(sheepSpeed, sheepMargin, setSheepMargin, SHEEP, SHEEPSTILL);
         runningAnimal(tigerSpeed, tigerMargin, setTigerMargin, TIGER, TIGERSTILL);
      }


      return () => {
      };
   }, [running]);
*/