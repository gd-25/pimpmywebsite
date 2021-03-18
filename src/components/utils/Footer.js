import './../../styles/index.css';
import IG from './../../assets/logos/ig.png'
import LI from './../../assets/logos/li.png'
import MAIL from './../../assets/logos/mail.png'



export default function Footer() {

   const year = new Date().getFullYear();

   return (
      <div className="w-full flex-col-center">
         <div className="h-40" />
         <p>Developed by Grégoire Deshusses</p>
         <div className="h-2" />
         <div className="flex-center">
            <a href="https://linkedin.com/gregoiredeshusses" target="_blank">
               <button className="w-8 h-8 flex-center">
                  <img src={LI} className="h-6 object-contain"></img>
               </button>
            </a>
            <a href="https://instagram.com/pimpmywebsite" target="_blank">
               <button className="w-8 h-8 flex-center ml-2 mr-2.5">
                  <img src={IG} className="h-7 object-contain"></img>
               </button>
            </a>
            <a href="/contact">
               <button className="w-8 h-8 flex-center">
                  <img src={MAIL} className="h-8 object-contain"></img>
               </button>
            </a>
         </div>


         <div className="h-10" />
      </div>
   );
}
