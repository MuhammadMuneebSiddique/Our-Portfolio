import Image from "next/image"
import css from "./page.module.css"
import javascript from "./images/download-removebg-preview.png"
import html from "./images/download-removebg-preview (1).png"
import cssImage from "./images/download-removebg-preview (2).png"
import react from "./images/images-removebg-preview.png"
import next from "./images/nextjs.512x512 (1).png"
import typescript from "./images/download-removebg-preview (3).png"
let data = [
    { name:"html" , image: html},
    { name:"css" , image: cssImage},
    { name:"javascript" , image: javascript},
    { name:"typescript" , image: typescript},
    { name:"react js" , image: react},
    { name:"next js" , image: next},
]

export default function Skill(){
    return(
        <div className={css.skill}>
            <h2>Skills</h2>
            <p>The skills, tools and technologies I am really good at:</p>
            <div className={css.container}>
                {data.map((elem,index)=>{
                    return(
                        <div className={css.item} key={index}> 
                            <Image src={elem.image} alt="icon"/>
                            <h3>{elem.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}