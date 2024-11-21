import styled from "styled-components";
import ImageCertificates from "../../Section/Certificates/ImageCertificates";


export default function Certificates() {
    return (
        <MainCertificates>
            <ImageCertificates />
        </MainCertificates>
    )
}

const MainCertificates = styled.div`

padding: 110px 0 50px 0;
text-align: center;

`