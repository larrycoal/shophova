import React,{useState} from 'react';
import {TimelineMax } from 'gsap'

import modelRight from "../../images/models/modelRight.png";
import modelLeft from "../../images/models/modelLeft.png";
import modelTwoRight from "../../images/models/modelTwoRight.png";
import modelTwoLeft from "../../images/models/modelTwoLeft.png";
import modelThreeRight from "../../images/models/modelThreeRight.png";
import modelThreeLeft from "../../images/models/modelThreeLeft.png";


const LandingPage = () => {
    let tl = new TimelineMax()


const[slide,setSlide]= useState({
    current:0,
    page:[".modelOne",".modelTwo",".modelThree"],
    models:[
        {
            modelLeft:".modelOneLeft",
            modelRight:".modelOneRight"
        },
        {
            modelLeft:".modelTwoLeft",
            modelRight:".modelTwoRight"
        }, 
        {
            modelLeft:".modelThreeLeft",
            modelRight:".modelThreeRight"
        }
    ]
})



const changeSlide = (pageNum)=>{
    let next = pageNum
    let currentLeft=slide.models[slide.current].modelLeft
    let currentRight =slide.models[slide.current].modelRight
    let nextLeft=slide.models[next].modelLeft
    let nextRight =slide.models[next].modelRight
    let page = slide.page[next]
    tl.fromTo(currentLeft,0.3,{y:"-0%"},{y:"-100%"})
    .fromTo(currentRight,0.3,{y:"-0%"},{y:"-100%"})
    .to(page,0.3,{opacity:1})
    .fromTo(nextLeft,0.3,{y:"-100%"},{y:"-10%"})
    .fromTo(nextRight,0.3,{y:"-100%"},{y:"10%"})
    .set(nextLeft,{clearProps:"all"})
    .set(nextRight,{clearProps:"all"})
    setSlide({
        ...slide,
        current:pageNum
    })
   
}

    return (
        <div className="landing_wrapper">
        <section>
          <h1>Home OF Trendy Outfit</h1>
          <p>lorem ipsum doloret orem ipsum doloret orem ipsum doloret</p>
        </section>
        <section className="image_wrapper">
          <section className="modelOne"  >
            <img  className="modelOneLeft"  src={modelLeft} alt="model" />
            <img  className="modelOneRight"src={modelRight} alt="model" />
          </section>
          <section className="modelTwo"  >
            <img className="modelTwoLeft"  src={modelTwoLeft} alt="model" />
          <img className="modelTwoRight"  src={modelTwoRight} alt="model" />
          </section>
          <section className="modelThree"  >
            <img className="modelThreeLeft"  src={modelThreeLeft} alt="model" />
          <img className="modelThreeRight"  src={modelThreeRight} alt="model" />
          </section>
        </section>
        <section className="pagination">
          <span onClick={()=>changeSlide(0)} className={slide.current === 0?"active":null}></span>
          <span onClick={()=>changeSlide(1)} className={slide.current === 1?"active":null}></span>
          <span onClick={()=>changeSlide(2)} className={slide.current === 2?"active":null}></span>
        </section>
      </div>
    );
};

export default LandingPage;