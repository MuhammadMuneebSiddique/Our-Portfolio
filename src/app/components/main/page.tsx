import Image from "next/image"
import css from "./page.module.css"
import picture from "../main/images/gw8s+6XmmfXLFbmXzc1WQQXgCQCf+68efAPyjLELq+olIAAAAABJRU5ErkJggg__-removebg-preview.png"
import arrow from "../main/images/next.png"
import shape1 from "../main/images/Ellipse 12.png"
import shape2 from "../main/images/Ellipse 15.png"
import shape3 from "../main/images/Ellipse 16.png"
import shape4 from "../main/images/Polygon 1.png"
import shape5 from "../main/images/Rectangle 51.png"
import shape6 from "../main/images/Rectangle 52.png"
import Services from "../services/page"
import About from "../about/page"
import Projects from "../projects/page" 
import Skills from "../skills/page" 

export default function Main(){
    return(
        <>
            <div className={css.main}>
                <div className={css.hero_section}>
                    <div className={css.item1}>
                        <h2>I&apos;m Muhammad Muneeb <br /> <span>Front-end</span> Developer</h2>
                        <p>An enthusiastic, motivated developer with increasing knowledge in front-end technologies such as HTML, CSS, JavaScript, and React.js.</p>
                        <button>hire me <Image src={arrow} alt="icon"/></button>
                    </div>
                    <div className={css.item2}>
                        <Image src={picture} alt="icon"/>
                    </div>
                    <Image src={shape1} className={css.img1} alt="design"/>
                    <Image src={shape2} className={css.img2} alt="design"/>
                    <Image src={shape3} className={css.img3} alt="design"/>
                    <Image src={shape4} className={css.img4} alt="design"/>                    
                    <Image src={shape5} className={css.img5} alt="design"/>
                    <Image src={shape6} className={css.img6} alt="design"/>
                </div>
            </div>
            <About/>
            <Services/>
            <Skills/>
            <Projects/>
        </>
    )
}