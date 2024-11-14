import styled from "styled-components";
import LOGO from "./../../images/logo.png"
import { Link } from "react-router-dom";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";

export default function Header() {
    
    const [menuIcon , setMenuIcon] = useState()

    // console.log(menuIcon);

    const menuScrollOpen = () => setMenuIcon(true)
    const menuScrollClose = () => setMenuIcon(false)

    return (
        <HeaderMain>
            <div className="header">
                <div className="container">
                    <div className="box_header">
                        <div className="logo">
                        <Link to={'./'}><img src={LOGO} alt="logo" /></Link>
                        </div>
                        <div className={menuIcon ? "nav_bar active" : "nav_bar"}>

                            <div className="links">
                                <div className="link"><Link to={'./'} onClick={() => setMenuIcon(false)} >Home</Link></div>
                                <div className="link"><Link to={'/about'} onClick={() => setMenuIcon(false)} >About</Link></div>
                                <div className="link"><Link to={'/ourbusiness'} onClick={() => setMenuIcon(false)} >Our business</Link></div>
                                <div className="link"><Link to={'/contact'} onClick={() => setMenuIcon(false)} >Contact</Link></div>
                            </div>

                            <div className='mobile-navbar-btn'>
                                <CgMenuRightAlt 
                                    name="menu-outline" 
                                    className="mobile-nav-icon"
                                    onClick={menuScrollOpen}
                                />
                                <CgClose 
                                    name="close-outline" 
                                    className="mobile-nav-icon close-outline"
                                    onClick={menuScrollClose}
                                />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderMain>
    )
}

const HeaderMain = styled.div`

    width: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 13px -3px;
    .box_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;

        .logo {
            img {
                width: 130px;
            }
        }
                
        .links {
            display: flex;
            gap: 50px;

            a {
                text-decoration: none;
                color: #000;
                transition: .3s;
                margin-left: 8px;
            }
            a:hover {
                color: #5171ff;
            }
        }

        .mobile-navbar-btn {
            display: none;
            background-color: transparent;
            cursor: pointer;
            border: none;
        }
        .mobile-nav-icon[name="close-outline"] {
            display: none;
            transition: all 8.4s;
        }
        .close-outline {
            display: none;
        }
    }















    @media screen and (max-width: 767px) {
    .links {
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(-100%);
        /* transform-origin: top; */
        transition: all .3s linear;
    }

    .active .links {
        width: 100%;
        gap: 45px;
        visibility: visible;
        opacity: 1;
        overflow: hidden;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all .3s linear;

        a {
            font-size: 40px;
            font-weight: bold;
            background-color: #ff5000;
            color: white;
            padding: 15px;
        }
        .navbar-link {
            font-size: 4.2rem;
        }
    }

    .nav_bar .mobile-navbar-btn {
        display: inline-block;  
        z-index: 9999;
        border: black;

        .mobile-nav-icon {
            font-size: 2.2rem;
            color: black
        };
    }
    .active .mobile-nav-icon {
        display: none;
        font-size: 3.2rem;
        position: fixed;
        top: 2%;
        right: 5%;
        color: black;
        z-index: 9999;
        
    }
    .active .close-outline {
        display: inline-block !important;
    }
}


`