import React from 'react';
import FontAwesomeIcon from 'react-fontawesome'
import {faCompass,faPhone,faClock,faEnvelope} from '@fortawesome/fontawesome-free-solid'
const footer = () => {
    return (
        <footer className="bck_b_dark">
           <div className="container">
               <div className="logo">HOVA</div>
               <div className="wrapper">
                   <div className="left">
                       <h2> contact information</h2>
                       <div className="business_nfo">
                           <div className="contain">
                           <div className="tag">
                              tag
                           </div>
                           <div className="nfo">
                               <div>Address</div>
                               <div>Agbara Ogun State</div>
                           </div>
                           </div>
                           <div className="contain">
                           <div className="tag">
                              tag
                           </div>
                           <div className="nfo">
                               <div>phone</div>
                               <div>0388749323</div>
                           </div>
                           </div>
                       </div>
                   </div>
                   <div className="right"></div>
               </div>
           </div>
        </footer>
    );
};

export default footer;