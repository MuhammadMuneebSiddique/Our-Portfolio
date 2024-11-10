"use client"

import Image from "next/image"
import css from "./page.module.css"
import cssGradient from "./images/css grandient.PNG"
import todo from "./images/to-do-app.PNG"
import share from "./images/share.png"
import ecommerce from "./images/ecommerce ff.PNG"
import blogWebsite from "./images/blog website.PNG"
import clock from "./images/ggjgjg.PNG"
import resume from "./images/resume.PNG"
import { useEffect } from "react"

export default function Projects(){
    useEffect(()=>{

        let img1 = document.getElementById("img1")
        let btn1 = document.getElementById("btn1")        
        let img2 = document.getElementById("img2")
        let btn2 = document.getElementById("btn2")
        let img3 = document.getElementById("img3")
        let btn3 = document.getElementById("btn3")
        let img4 = document.getElementById("img4")
        let btn4 = document.getElementById("btn4")
        let img5 = document.getElementById("img5")
        let btn5 = document.getElementById("btn5")
        let img6 = document.getElementById("img6")
        let btn6 = document.getElementById("btn6")

        img1.addEventListener("mouseenter",()=>{
            img1.style.opacity=0.7
            btn1.style.opacity=1

            btn1.addEventListener("mouseenter",()=>{
                img1.style.opacity=0.7
                btn1.style.opacity=1
            })
            
            img1.addEventListener("mouseleave",()=>{
                img1.style.opacity=1
                btn1.style.opacity=0
            })
        })
        // projects 2
        img2.addEventListener("mouseenter",()=>{
            img2.style.opacity=0.7
            btn2.style.opacity=1

            btn2.addEventListener("mouseenter",()=>{
                img2.style.opacity=0.7
                btn2.style.opacity=1
            })
            
            img2.addEventListener("mouseleave",()=>{
                img2.style.opacity=1
                btn2.style.opacity=0
            })
        })
        // projects 3
        img3.addEventListener("mouseenter",()=>{
            img3.style.opacity=0.7
            btn3.style.opacity=1

            btn3.addEventListener("mouseenter",()=>{
                img3.style.opacity=0.7
                btn3.style.opacity=1
            })
            
            img3.addEventListener("mouseleave",()=>{
                img3.style.opacity=1
                btn3.style.opacity=0
            })
        })
        // projects 4
        img4.addEventListener("mouseenter",()=>{
            img4.style.opacity=0.7
            btn4.style.opacity=1

            btn4.addEventListener("mouseenter",()=>{
                img4.style.opacity=0.7
                btn4.style.opacity=1
            })
            
            img4.addEventListener("mouseleave",()=>{
                img4.style.opacity=1
                btn4.style.opacity=0
            })
        })
        // projects 4
        img4.addEventListener("mouseenter",()=>{
            img4.style.opacity=0.7
            btn4.style.opacity=1

            btn4.addEventListener("mouseenter",()=>{
                img4.style.opacity=0.7
                btn4.style.opacity=1
            })
            
            img4.addEventListener("mouseleave",()=>{
                img4.style.opacity=1
                btn4.style.opacity=0
            })
        })
        // projects 5
        img5.addEventListener("mouseenter",()=>{
            img5.style.opacity=0.7
            btn5.style.opacity=1

            btn5.addEventListener("mouseenter",()=>{
                img5.style.opacity=0.7
                btn5.style.opacity=1
            })
            
            img5.addEventListener("mouseleave",()=>{
                img5.style.opacity=1
                btn5.style.opacity=0
            })
        })
        // projects 6
        img6.addEventListener("mouseenter",()=>{
            img6.style.opacity=0.7
            btn6.style.opacity=1

            btn6.addEventListener("mouseenter",()=>{
                img6.style.opacity=0.7
                btn6.style.opacity=1
            })
            
            img6.addEventListener("mouseleave",()=>{
                img6.style.opacity=1
                btn6.style.opacity=0
            })
        })

    })
    return(
        <>
            <div className={css.project} id="project" >
                <h2>Projects</h2>
                <p>Some of the noteworthy projects I have built:</p>
                <div className={css.container}>
                    <div className={css.item}>
                        <Image src={cssGradient} id="img1" alt="image" />
                        <button id="btn1"><a href="https://css-linear-gradient-generator-muneeb.netlify.app/" target="_blank">view<Image src={share} alt="icon"/></a></button>
                    </div>
                    <div className={css.item}>
                        <Image src={blogWebsite} id="img2" alt="image" />
                        <button id="btn2"><a href="https://blog-website-tech-wire-1hwg.vercel.app//" target="_blank">view<Image src={share} alt="icon"/></a></button>
                    </div>
                    <div className={css.item}>
                        <Image src={todo} id="img3" alt="image" />
                        <button id="btn3"><a href="https://to-do-app-created-by-muneeb.netlify.app/" target="_blank">view<Image src={share} alt="icon"/></a></button>
                    </div>
                    <div className={css.item}>
                        <Image src={ecommerce} id="img4" alt="image" />
                        <button id="btn4"><a href="https://figma-design-e-commerce-website-gw6m.vercel.app/" target="_blank">view<Image src={share} alt="icon"/></a></button>
                    </div>
                    <div className={css.item}>
                        <Image src={clock} id="img5" alt="image" />
                        <button id="btn5"><a href="https://digital-clock-created-by-muneeb.netlify.app/" target="_blank">view<Image src={share} alt="icon"/></a></button>
                    </div>
                    <div className={css.item}>
                        <Image src={resume} id="img6" alt="image" />
                        <button id="btn6"><a href="https://css-linear-gradient-generator-muneeb.netlify.app/" target="_blank">view<Image src={share} alt="icon"/></a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
