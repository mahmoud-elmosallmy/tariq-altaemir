import styled from "styled-components";
import Carousels from "../../Components/Carousels/CarouselsSlide";
import AboutHome from "../../Section/Home/AboutHome";
import OurBusiness from "../../Section/Home/OurBusiness";
import OurStrength from "../../Section/Home/OurStrength";
import video from "../../images/video.mp4";

export default function Home() {
    return (
        <HomeBox>
            <Carousels />
            <div className="container">
                <div className="main_home">
                    <AboutHome />
                    <OurBusiness />
                    <OurStrength />
                    <div className="video">
                        <video autoPlay loop muted playsInline className="">
                            <source src={video} type="video/mp4" />
                        </video>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/OSE5RnV2aGo?si=agKsGuZgz7kKmjUe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
            </div>
        </HomeBox>
    )
}

const HomeBox = styled.div`
direction: rtl;

.about_home , .ourbusiness ,.video{
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
    grid-template-columns: 1fr 1fr 1fr;
    gap:30px;
    text-align: center;
    
    .box_dis {
        
        h3 {
            margin-bottom: 12px
        }
    }
}

.video {
    ackground: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../img/giphy.gif) center;
    background-size: cover;
    border-radius: 10px;
    text-align: center;
    color: #fff;
}


@media (max-width: 992px) {
    .box_strong , .discreption {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
}
`;