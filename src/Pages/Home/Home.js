import styled from "styled-components";
import Carousels from "../../Components/Carousels/CarouselsSlide";
import AboutHome from "../../Section/Home/AboutHome";
import OurBusiness from "../../Section/Home/OurBusiness";
import OurStrength from "../../Section/Home/OurStrength";
import video from "../../images/video.mp4";
import { Link } from "react-router-dom";

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
                        <video autoPlay loop muted playsInline className="background_clip">
                            <div className="black"></div>
                                <source src={video} type="video/mp4" />
                        </video>
                        {/* <div className="black">
                            <video autoPlay loop muted playsInline className="background_clip">
                                <source src={video} type="video/mp4" />
                            </video>
                        </div> */}
                        <div className="content">
                            <h1>هل تود تجديد منزلك بلمسة فنية و بأقل تكلفة؟</h1>
                            <p>نُقدم لك حلولًا إبداعية لتصميم منزلك أو مكتبك بجودة عالية و بأسعار تناسب جميع الأذواق.</p>
                            <Link to="./contact">تواصل معنا</Link>  
                        </div>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/OSE5RnV2aGo?si=agKsGuZgz7kKmjUe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
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

.video {
    margin: 50px 0 50px 0;
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

.black {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) center;
    z-index:9999999999;
}
.video {
    width: 100%;
    // height: 56vh;
    display:flex;
    align-items center;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
    overflow: hidden;

    position: relative
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    align-items: center;
    text-align: center;
    padding: 20px;
}
.content a {
    background-color: #c6b069;
    line-height: 42px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 25px;
    border: none;
    color: #fff;
    display: inline-block;
    font-weight: 500;
    position: relative;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    position: relative;

    border-radius: 0px;
    border: 1px solid transparent;
}
.content a:hover {
background: transparent;
    border-color: #fff;
    color: #fff;
}
.background_clip {
    // position: absolute;
    right: -18px;
    bottom: -10px;
    z-index: -1;
    // width: 150%;
}


@media (max-width: 992px) {
    .box_strong , .discreption {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
}
`;