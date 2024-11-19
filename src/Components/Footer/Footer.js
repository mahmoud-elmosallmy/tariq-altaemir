import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Footer() {
    
    return (
        <MainFooter>
            <div className="container">
                <div className="main_boxs">
                    <div className="boxs_footer">
                        <div className="box">
                            <h2>ما يميزنا عن غيرنا</h2>
                            <p>نحن في مؤسسة تجمع المعماريين الدولي نحمل قيمة الريادة والتميز في مجالات المقاولات، الديكور، وإدارة المشاريع. نفتخر بفريقنا المميز من المهندسين ذوي الخبرة الذين يضعون قلبهم ومهاراتهم في كل تفاصيل المشاريع التي نتولى عنايتها. نحن نسعى جاهدين لتحقيق تطلعاتكم وتحقيق أحلامكم المعمارية بدقة وأهتمام فائق، لأن رضاكم هو هدفنا الأسمى.</p>
                        </div>
                        <div className="box">
                            <h2>موقعنــــا</h2>
                            <p>الحدود الشمالية عرعر</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.8163478480583!2d41.016443275147!3d30.978960773691696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0d9dc6e3197f%3A0x44d6c6bcca5ea155!2z2YXYpNiz2LPYqSDYt9ix2YrZgiDYp9mE2KrYudmF2YrYsSDZhNmE2YXZgtin2YjZhNin2Kog2KfZhNmF2LnZhdin2LHZitipINin2YTYudin2YXYqQ!5e1!3m2!1sen!2ssa!4v1732024487667!5m2!1sen!2ssa" width={"100%"} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <div className="box">
                            <h2>منصاتنا</h2>
                            <p>تابعنا على منصاتنا</p>
                        </div>
                    </div>
                    <span className="">

                    &copy; 2024 جميع الحقوق محفوظة | تصميم و تنفيذ 
                    <Link className="link_copy" to="https://my-site-elmosallmy.netlify.app/">   Mahmoud El Mosallmy</Link>
                    </span>
                </div>
            </div>
        </MainFooter>
    )
}

const MainFooter = styled.div`
background-color: black;
color: white;
direction: rtl;
text-align: center;
padding: 30px 0 30px 0;


.boxs_footer {
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    text-align: right;

    .box {
        padding: 15px;

        h2 {
            margin-bottom: 18px;
        }
        p {
            color: #777;
            font-weight: bold;
        }
    }
}
span {
    font-size: large;
    font-weight: bold;

    .link_copy {
        color: white;
        margin-right: 13px;
        text-decoration: none;
    }
}
`;