import styled from "styled-components"
import tvideo from "../../images/tvideo.mp4";

export default function About() {
    return (
        <MainAbout>
            <div className="main_about">
                <div className="">
                    <video autoPlay loop muted playsInline className="background_clip">
                        <source src={tvideo} type="video/mp4" />
                    </video>
                </div>
                <div className="one_des">
                    <h2>تجمع المعماريين الدولي للمقاولات العامــة</h2>
                    <h3>نحن نصنع الحياة التي تليق بك</h3>
                    <p>تعرّف على شركتنا ذات الخبرة العريقة في مجال الهندسة المعمارية والإنشائية مع أكثر من 20 عاما من الخبرة في أعمال المقاولات و التصميم و التنفيذ و الترميم. نحن نضع بين يديك خلاصة تجاربنا و أعمالنا</p>
                </div>
            </div>
        </MainAbout>
    )
}

const MainAbout = styled.div`
direction: rtl;

.main_about {
    padding: 110px 0 50px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

video {
    width:100%

}
.one_des {
    margin-top: 24px;
}
@media (max-width: 992px) {
    .main_about {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
}
`;