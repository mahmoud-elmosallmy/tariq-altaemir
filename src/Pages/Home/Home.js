import styled from "styled-components";
import Carousels from "../../Components/Carousels/CarouselsSlide";


export default function Home() {
    return (
        <HomeBox>
            <Carousels />
            <div className="container">
                <div className="">
                    <div className="main_title">
                        <h2>ماذا نقدم لعملائنا</h2>
                    </div>
                    <div className="discreption">
                        <div className="box_dis">
                            <h3>أعمال الانشاءات</h3>
                            <p>نُقدم خدمات إنشائية متكاملة لبناء المباني والمنشآت السكنية والتجارية والصناعية، من التخطيط والتصميم إلى التنفيذ والتشطيب. نلتزم بأعلى معايير الجودة والسلامة، ونضمن لك تسليم مشروعك في الوقت المحدد ووفقًا لأعلى المواصفات.</p>
                        </div>
                        <div className="box_dis">
                            <h3>التشطيب والترميم والديكور</h3>
                            <p>خبرتنا في التشطيب والترميم والديكور تجعل من مساحتك تحفة فنية، من خلال دهانات وأرضيات وجدران وأثاث ينسجم مع ذوقك. نُعيد الحياة للمباني التالفة ونصمم أماكن فريدة بتجهيزات مبتكرة واهتمام بأدق التفاصيل والجودة.</p>
                        </div>
                        <div className="box_dis">
                            <h3>تنسيق حدائق</h3>
                            <p></p>
                        </div>
                        <div className="box_dis">
                            <h3></h3>
                            <p></p>
                        </div>
                        <div className="box_dis">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeBox>
    )
}

const HomeBox = styled.div`

padding: 120px;

h2 {
    text-align: center;
}
`;