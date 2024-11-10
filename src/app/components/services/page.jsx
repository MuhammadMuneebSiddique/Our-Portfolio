"use client"

import Image from "next/image";
import webDevelopment from "./images/coding.png"
import responsive from "./images/responsive-page.png"
import trend from "./images/trend.png"
import videoEditor from "./images/video-editor.png"
import research from "./images/research.png"
import uxui from "./images/design.png"
import css from"./page.module.css"
import { useEffect } from "react";


export default function Services(){

    let servicesCard = [
        { image:webDevelopment , name:"web development" , description:"Creating dynamic and responsive websites that deliver seamless user experiences and bring ideas to life."},
        { image:responsive , name:"responsive design" , description:"Responsive design allows websites to adapt to any device or screen size for an optimal user experience."},
        { image:trend , name:"design trend" , description:"Design trends are the evolving styles and techniques in visual design that shape the look and feel of websites and applications"},
        { image: videoEditor , name:"video editor" , description:"I enjoy crafting videos that tell compelling stories, blending creativity with precise editing. Its all about bringing visuals to life!"},
        { image:research, name:"research & analysis" , description:"Research & Analysis in web development focuses on understanding user needs and trends to build effective, data-driven websites."},
        { image:uxui , name:"UI/UX designer" , description:"A UI/UX designer crafts a visually appealing, user-friendly portfolio that showcases work with seamless navigation and usability, ensuring a memorable experience."}
    ]

    useEffect(()=>{
        let card = document.getElementById("item")
        let para = document.getElementById("para")

        card.addEventListener("mouseenter",()=>{
            para.style.display="block"
            
            card.addEventListener("mouseleave",()=>{
                para.style.display="none"
            })

        })
    })

    return(
        <>
            <div className={css.services} id="services" >
                <h2>our services</h2>
                <div className={css.container}>
                    {servicesCard.map((elem,index)=>{
                        return(
                            <div className={css.item} key={index} id="item">
                                <Image src={elem.image} alt="icon"/>
                                <h3>{elem.name}</h3>
                                <p id="para">{elem.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}