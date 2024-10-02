import styled from "styled-components";
import Logo from "./../../images/logo.png";
import './../style.css'
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function header() {
    
    return (
        <MainHeader>
         <NavLink to='/'>
            <img src={Logo} className="logo" alt="my logo img" />
         </NavLink>
         <Nav />
        </MainHeader>
    );
}

const MainHeader = styled.header`
padding: 0 0.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
height: 5rem;
}

@media (max-width: ${({theme}) => theme.media.mobile})
`;