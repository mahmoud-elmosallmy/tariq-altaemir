import styled from "styled-components";
import Logo from "./../../images/logo.png";
import './../style.css'
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function Header() {
    
    return (
        <MainHeader>
            <div className="container header">
                <NavLink to='/'>
                    <img src={Logo} className="logo" alt="my logo img" />
                </NavLink>
                <Nav />
            </div>
        </MainHeader>
    );
}

const MainHeader = styled.header`
position: sticky;
top: 0px;
z-index: 7;
box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
border-bottom: 1px solid #d2d2d2;

.header {
    padding: 0 0.8rem;
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.logo {
height: 5rem;
}

@media (max-width: ${({theme}) => theme.media.mobile})
`;