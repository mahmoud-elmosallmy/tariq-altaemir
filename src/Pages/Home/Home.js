import styled from "styled-components";
import HeroSection from "../../Components/HeroSection/HeroSection";

export default function Home() {
    
    return (
        <Wrapper className="main_home">
            <div className="home">
                <HeroSection />
                <div>Hallllllllllllllllllllllo</div>
                <div className="main_title">
                    <h2>مؤسسة طريق التعمير للمقاولاتة
                        <br />
                        المعمارية العامة
                    </h2>
                    <p className="descrition">نبدع ، فنؤثر <span style={{color: "yellow"}}>فنحقق</span> نتائج </p>
                    
                </div>
            </div>
        </Wrapper>

    );
};

const Wrapper = styled.section`
    background-color: ${({theme}) => theme.colors.bg};
    height: 100vh;
    position: relative;

    .main_title {
        position: absolute;
        top: 28%;
        right: 34px;
        direction: rtl;

        h2 {
            font-weight: bold
        
            .descrition {
                font-size: 32px;
                color: currentColor;
                font-weight: bold;
            }
        }
    }
`;