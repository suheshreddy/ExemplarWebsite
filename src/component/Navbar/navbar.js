import React from 'react'
import logo_dark from '../../assets/images/logo-png.png';
import logo_light from '../../assets/images/logo-transparent-white.png';
import '../../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../../assets/css/tailwind.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import * as Icon from 'react-feather';

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    let [manu , setManu] = useState('');
    let location = useLocation();
    
    useEffect(()=>{
        let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])
    

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'bg-white dark:bg-slate-900' : ''}`}>
        <div className="container relative">
            {
                navClass === "nav-light" ?
                    <Link className="logo" to="/index">
                        <span className="inline-block dark:hidden">
                            <img src={logo_dark} className="l-dark w-48" height="24" alt="" />
                            <img src={logo_light} className="l-light w-48" height="24" alt="" />
                        </span>
                        <img src={logo_light} height="24" className="hidden dark:inline-block" alt="" />
                    </Link>
                    :
                    <Link className="logo" to="/index">
                        <img src={logo_dark} className="inline-block dark:hidden" alt="" />
                        <img src={logo_light} className="hidden dark:inline-block" alt="" />
                    </Link>
            }

            <div className="menu-extras">
                <div className="menu-item">
                    <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

            {
       
       
                    <ul className="buy-button list-none space-x-1 mb-0">
                         <li id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                    <li className={manu === "index" || "" ? "active" : ""}><Link to="/index" className="sub-menu-item">Home</Link></li>

                    <li className={manu === "contact-one" || "" ? "active" : ""}><Link to="/contact-one" className="sub-menu-item">Contact</Link></li>
                </ul>
            </li>
                    
     
                </ul>
            }
           
           
        </div >
    </nav >
    )
}
