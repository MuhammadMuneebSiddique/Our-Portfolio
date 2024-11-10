"use client"

import Link from "next/link";
import css from "./page.module.css";
import Image from "next/image";
import lightmode from "./images/sun.png"
import darkmode from "./images/moon.png"
import menu from "./images/menu.png"
import menuclose from "./images/close.png"
import { useEffect } from "react";
import { domainToUnicode } from "url";

export default function Header(){
    useEffect(()=>{
        let moblie_nav_bar = document.getElementById("mobile_nav_bar")
        let menu = document.getElementById("menu")
        let close = document.getElementById("close")
        let body = document.querySelector("body")

        menu.addEventListener("click",()=>{
            menu.style.display="none"
            close.style.display="block"
            moblie_nav_bar.style.display="block"

            close.addEventListener("click",()=>{
                menu.style.display="block"
                close.style.display="none"
                moblie_nav_bar.style.display="none"
            })
            
        })
    })
    return(
        <>
            <div className={css.header}>
                <h2>portfolio.</h2>
                <div className={css.nav_bar}>
                    <div className={css.item1}>
                        <Link href="/">home</Link>
                        <Link href="#about">about</Link>
                        <Link href="#project">projects</Link>
                        <Link href="#services">services</Link>
                    </div>
                    <div className={css.item2}>
                        <Image src={lightmode} className={css.img1} alt="icon"/>
                        <Image src={darkmode} className={css.img2} alt="icon"/>
                    </div>
                </div>
                <div className={css.moblie_nav_btn}>
                    <Image src={menu} className={css.img1} id="menu" alt="icon"/>
                    <Image src={menuclose} className={css.img2} id="close" alt="icon"/>
                    <div className={css.moblie_nav_bar} id="mobile_nav_bar">
                        <div className={css.item1}>
                        <Link href="/">home</Link>
                        <Link href="#about">about</Link>
                        <Link href="#project">projects</Link>
                        <Link href="#services">services</Link>
                        </div>
                        <div className={css.item2}>
                            <h3>switch theme</h3>
                            <Image src={lightmode} className={css.img1} alt="icon"/>
                            <Image src={darkmode} className={css.img2} alt="icon"/>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}