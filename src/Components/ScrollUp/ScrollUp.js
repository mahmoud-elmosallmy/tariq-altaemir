import styled from "styled-components";
import ScrollToTop from "react-scroll-up";
import { AiOutlineUpCircle } from "react-icons/ai";


export default function ScrollUp() {
    return (
        <MainScrollUp>
            <ScrollToTop className="scroll" showUnder={160}>
                <span className="up"><AiOutlineUpCircle /></span>
                {/* <AiOutlineUpCircle /> */}
            </ScrollToTop>
        </MainScrollUp>
    )
}

const MainScrollUp = styled.div`
.scroll {
    position: 'fixed',
    bottom: 50,
    right: 30,
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
    background-color: #5171ff;
    padding: 20px;
    border-radius: 50%;
    color: white;
    font-size: 23px;
    font-weight: bold;


    }
    .up {
        background-color: #5171ff;
        padding: 20px;
        border-radius: 50%;
        color: white;
        font-size: 30px;
        font-weight: bold;
        z-index: 999;
}
`;