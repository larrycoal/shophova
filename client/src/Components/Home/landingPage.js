import React,{useState} from 'react';
import {TweenMax,TimelineMax as TL} from 'gsap'

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


const[slide,setSlide]= useState({
    current:0,
    img:[".modelOne",".modelTwo"]
})



const changeSlide = (pageNum)=>{
    setSlide({
        ...slide,
        current:pageNum
    })
    TweenMax.fromTo(".modelLeft",1,{translateY:0},{translateY:-600})
    TweenMax.fromTo(".modelRight",1,{translateY:0},{translateY:-600})
    TweenMax.fromTo(slide.img[slide.current],1,{opacity:1,},{opacity:0})
    TweenMax.fromTo(slide.img[pageNum],2,{opacity:0},{opacity:1})
    TweenMax.fromTo(".modelLeft",2.2,{translateY:700},{translateY:0})
    TweenMax.fromTo(".modelRight",2.5,{translateY:700},{translateY:0})
   
}

    return (
        <div className="landing_wrapper">
        <section>
          <h2>Home OF Trendy Outfit</h2>
          <p>lorem ipsum doloret</p>
        </section>
        <section className="image_wrapper">
          <section className="modelOne"  >
            <img className="modelLeft"  src={models[0].modelLeft} alt="model" />
            <img  className="modelRight"src={models[0].modelRight} alt="model" />
          </section>
          <section className="modelTwo"  >
            <img className="modelLeft"  src={models[1].modelLeft} alt="model" />
          <img className="modelRight"  src={models[1].modelRight} alt="model" />
          </section>
        </section>
        <section className="pagination">
          <span onClick={()=>changeSlide(0)} className={slide.current === 0?"active":null}></span>
          <span onClick={()=>changeSlide(1)} className={slide === 1?"active":null}></span>
          <span onClick={()=>changeSlide(2)} className={slide === 2?"active":null}></span>
        </section>
      </div>
    );
};

export default LandingPage;