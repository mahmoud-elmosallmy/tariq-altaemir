import styled from "styled-components";
import Img1 from "../../images/o1.jpg";
import Img2 from "../../images/o2.jpg";
import Img3 from "../../images/o3.jpg";
import Img4 from "../../images/o4.jpg";

export default function OurBusiness() {
    
    return (
        <OurBusinessMain className="ourbusiness">
            <div className="main_title">
                <h2>تصفح أعمالنا، وشاهد كيف ساعدنا عملاءنا على تحقيق أهدافهم.</h2>
                <p>نؤمن بأن الأفعال أقوى من الكلمات، لذا نُركز على تقديم خدمات مُتميزة تُحقق نتائج مُثبتة.</p>
            </div>
            <div className="box_image">
                <div className="imgs_one">
                    <img src={Img1} alt="img" className="g_one" />
                    <img src={Img2} alt="img" className="g_two" />
                </div>
                <div className="imgs_two">
                    <img src={Img3} alt="img" className="g_three" />
                    <img src={Img4} alt="img" className="g_four" />
                </div>
            </div>
        </OurBusinessMain>
    )
}

const OurBusinessMain = styled.div`
    .box_image {
        display: grid;
        gap: 60px;
        img {
            width:100%;
            filter: drop-shadow(2px 4px 6px black);
            border-radius: 56px;
        }
    }
    .imgs_one {
        display: grid;
        grid-template-columns: auto 25%;
        align-items: center;
        gap: 30px;
        align-items: end;
    }
    .imgs_two {
        display: grid;
        grid-template-columns: 25% auto;
        align-items: center;
        gap: 30px;
        align-items: start;
    }
}

@media (max-width: 992px) {
    .imgs_one , .imgs_two {
        display: flex !important;
        flex-direction: column !important;
    
        img {
            max-height: 225px;
            width:100%;
        }
    }
}
`