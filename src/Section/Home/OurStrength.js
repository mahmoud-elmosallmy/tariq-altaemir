import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { TbLicense } from "react-icons/tb";
import { FaCertificate } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";


export default function OurStrength() {
    
    return (
        <OurStrengthMain className="ourstrength">
            <div className="main_title">
                <h2>نقاط قوتنا التي تجعلنا رائدين</h2>
                <p>مزيج فريد من الخبرة الطويلة التي تمتد لأكثر من 5 عامًا، والالتزام بجودة عالمية المستوى، والتصميمات المبتكرة التي تلبي احتياجاتك</p>
            </div>
            <div className="box_strong"> 
                <div className="box">
                    <div className="icon_title">
                        <FaRegUser className="icon"/>
                        <h3>طاقم تقني خبير</h3>
                    </div>
                    <p>نعتمد على طاقم تقني خبير لضمان أفضل خدمة لعملائنا</p>
                </div>
                <div className="box">
                    <div className="icon_title">
                        <TbLicense className="icon"/>
                        <h3>خدمات متكاملة</h3>
                    </div>
                    <p>لدينا فريق من الخبراء المُتخصصين في مختلف المجالات، ونُقدم لك جميع الخدمات التي تحتاجها تحت سقف واحد. </p>
                </div>
                <div className="box">
                    <div className="icon_title">
                        <FaCertificate className="icon"/>
                        <h3>ضمان لمدة 10 سنوات</h3>
                    </div>
                    <p>نوفر ضمان 20 عاما للعظم و 10 سنوات للتشطيب و العوازل و التسريبات</p>
                </div>
                <div className="box">
                    <div className="icon_title">
                        <IoRocketOutline className="icon"/>
                        <h3>المهارات الفنية</h3>
                    </div>
                    <p>مجموعة من القدرات و المعارف التي تُمكن من إنجاز مشاريع البناء و التشييد و التصميم الداخلي بكفاءة و فعالية.</p>
                </div>
                <div className="box">
                    <div className="icon_title">
                        <IoDiamondOutline className="icon"/>
                        <h3>خدمات موثوق بها</h3>
                    </div>
                    <p>نستخدم أفضل المواد و الأدوات و التقنيات، و إنجاز المشاريع في الوقت المحدد و ضمن الميزانية المخصصة.</p>
                </div>
                <div className="box">
                    <div className="icon_title">
                        <IoChatbubbleOutline className="icon"/>
                        <h3>مراجعات إيجابية</h3>
                    </div>
                    <p>رضاكم هو سر سعادتنا و دافعنا لتقديم أفضل ما لدينا.</p>
                </div>
            </div>
        </OurStrengthMain>
    );
}

const OurStrengthMain = styled.div`

.box_strong {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 37px;
}
.box {
    padding: 20px;
    border-radius: 35px;
    transition: all 0.5s ease 0s;
}
.icon_title {
    display: flex;
    align-items: center;

    .icon {
        font-weight:bold;
        font-size: 25px;
    }

    h3 {
        margin-right: 20px;
    }
}

p {
    color:#777;
    font-weight:bold;
    text-align: center;
}

.box:hover {
    background-color: #04091e;
    cursor: pointer;
    
    .icon_title {
        color: #c6b069;
    } 
}




`;