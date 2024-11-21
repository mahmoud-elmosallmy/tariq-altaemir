import styled from "styled-components";
import CommercialLicense from "../../images/Certificates/Commercial License.jpg";
import ContractorMembershipCertificate from "../../images/Certificates/Contractor Membership Certificate.jpg";
import ChamberOfCommerce from "../../images/Certificates/chamber of commerce.jpg";
import Classification1 from "../../images/Certificates/Classification/1.jpg";
import Classification2 from "../../images/Certificates/Classification/2.jpg";
import CommercialRegister1 from "../../images/Certificates/CommercialRegister/1.jpg";
import CommercialRegister2 from "../../images/Certificates/CommercialRegister/2.jpg";
import CommercialRegister3 from "../../images/Certificates/CommercialRegister/3.jpg";
import Tax1 from "../../images/Certificates/Tax/1.jpg";
import Tax2 from "../../images/Certificates/Tax/2.jpg";

export default function ImageCertificates() {
    return (
        <MainImageCertificates>
            <h2>شهادات مؤسسة طريق التعمير للمقاولات المعمارية العامة</h2>
            <div className="main_boxs">
                <div className="box">
                    <h3>الرخصة التجارية</h3>
                    <img src={CommercialLicense} alt="img" />
                </div>
                <div className="box">
                    <h3>شهادة عضوية المقاول</h3>
                    <img src={ContractorMembershipCertificate} alt="img" />
                </div>
                <div className="box">
                    <h3>شهادة الغرفة التجارية</h3>
                    <img src={ChamberOfCommerce} alt="img" />
                </div>
                <div className="box">
                    <h3>شهادة التصنيف </h3>
                    <img src={Classification1} alt="img" />
                    <img src={Classification2} alt="img" />
                </div>
                <div className="box">
                    <h3>السجل التجاري</h3>
                    <img src={CommercialRegister1} alt="img" />
                    <img src={CommercialRegister2} alt="img" />
                    <img src={CommercialRegister3} alt="img" />
                </div>
                <div className="box">
                    <h3>شهادة ضريبة القيمة المضافة</h3>
                    <img src={Tax1} alt="img" />
                    <img src={Tax2} alt="img" />
                </div>
            </div>
        </MainImageCertificates>
    )
}

const MainImageCertificates = styled.div`

.main_boxs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .box {
        padding: 18px;    

        img {
            width:100%;
        }
    }
}

@media (max-width: 992px) {
    .main_boxs {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
}
`;