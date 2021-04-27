import React,{useEffect,useState,useRef} from 'react';
import {TweenMax,Power3} from 'gsap'

import modelRight from "../../images/models/modelRight.png";
import modelLeft from "../../images/models/modelLeft.png";
import modelTwoRight from "../../images/models/modelTwoRight.png";
import modelTwoLeft from "../../images/models/modelTwoLeft.png";



const LandingPage = () => {
    const models = [
        {
            modelLeft : modelLeft,
            modelRight : modelRight,
        },
        {
            modelLeft : modelTwoLeft,
            modelRight : modelTwoRight,
        }
    ]


const[slide,setSlide]= useState(0)

let imgLeft = useRef(null)
let imgRight = useRef(null)

useEffect(()=>{

},[slide])

const changeSlide = (pageNum)=>{
    if(pageNum !== slide){
        TweenMax.fromTo(imgLeft,.5, {opacity:1},{translateY:-550,easeOut:Power3})
        TweenMax.fromTo(imgRight,1, {opacity:1},{translateY:-550,easeOut:Power3})
    }
   
   
}

    return (
        <div className="landing_wrapper">
        <section>
          <h2>Home OF Trendy Outfit</h2>
          <p>lorem ipsum doloret</p>
        </section>
        <section className="image_wrapper">
          <img ref = {el=>{imgLeft=el}} src={models[slide].modelLeft} alt="model" />
          <img ref = {el=>{imgRight=el}} src={models[slide].modelRight} alt="model" />
        </section>
        <section className="pagination">
          <span onClick={()=>changeSlide(0)} className={slide === 0?"active":null}></span>
          <span onClick={()=>changeSlide(1)} className={slide === 1?"active":null}></span>
          <span onClick={()=>changeSlide(2)} className={slide === 2?"active":null}></span>
        </section>
      </div>
    );
};

export default LandingPage;

