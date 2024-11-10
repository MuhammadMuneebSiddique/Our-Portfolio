import Image from "next/image"
import css from "./page.module.css"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import email from "./images/email.png"
import pic from "./images/gw8s+6XmmfXLFbmXzc1WQQXgCQCf+68efAPyjLELq+olIAAAAABJRU5ErkJggg__-removebg-preview.png"

export default function About (){
    return(
        <>
            <section className={css.about} id="about">
                <div className={css.left_side}>
                    <Image
                    src={pic}
                    alt="image"
                    className={css.img}
                    />                   
                </div>
                <div className={css.right_side}>
                    <p>MY BIOGRAPHY</p>
                    <h2>a lead <span>UI/UX designer</span> & <span>web developer</span> based in pakistan</h2>
                    <p>An enthusiastic, motivated developer with increasing knowledge in front-end technologies such as HTML, CSS, JavaScript, and React.js.</p>
                    <div className={css.details}>
                        <div>
                            <p><span>name: </span> Muhammad Muneeb</p>
                            <p><span>from: </span> Pakistan</p>
                        </div>
                        <div>
                            <p><span>email: </span> siddiquimuneeb@gamil.com</p>
                            <p><span>phone: </span> 03152040559</p>
                        </div>
                    </div>
                    <div className={css.social_accounts}>
                        <h4>Follow me on</h4>
                    <div className={css.contact_icon}>
                            <a href="https://github.com/MuhammadMuneebSiddique">
                                <Image
                                src={github}
                                alt="image"
                                className={css.img}
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-muneeb-6a5a86323?">
                                <Image
                                src={linkedin}
                                alt="image"
                                className={css.img}
                                />
                            </a>
                            <a href="mailto:siddiquimuneeb894@gmail.com">
                                <Image
                                src={email}
                                alt="image"
                                className={css.img}
                                />
                            </a>
                        </div>
                    </div>    
                    <div className={css.btn}>
                        <button className={css.btn1}>hire me</button>
                        <button className={css.btn2}>Dowload CV</button>
                    </div>
                </div>
                <div className={css.left_side_02}>
                    <Image
                    src={pic}
                    alt="image"
                    className={css.img}
                    />                   
                </div>
            </section>
        </>
    )
}