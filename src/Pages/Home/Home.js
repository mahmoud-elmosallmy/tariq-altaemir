import styled from "styled-components";
import Carousels from "../../Components/Carousels/CarouselsSlide";
import AboutHome from "../../Section/Home/AboutHome";
import OurBusiness from "../../Section/Home/OurBusiness";

export default function Home() {
    return (
        <HomeBox>
            <Carousels />
            <div className="container">
                <div className="main_home">
                    <AboutHome />
                    <OurBusiness />
                </div>
            </div>
        </HomeBox>
    )
}

const HomeBox = styled.div`
direction: rtl;

.about_home , .ourbusiness {
    padding: 50px 0 50px 0;
}
.main_title {
    text-align: center;
    diretion: rtl;
    font-weight:bold;
    margin-bottom: 20px;
    
    h2 {
        font-size: 36px
    }
    p {
        color:#777;
    }
}

.discreption {
    display: grid;
    grid-template-columns: repeat(auto-fill , minmax(280px, 1fr));
    gap:30px;
    text-align: center;
    
    .box_dis {
        
        h3 {
            margin-bottom: 12px
        }
    }
}
`;