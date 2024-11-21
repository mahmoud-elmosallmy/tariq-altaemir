import styled from "styled-components";
import ConstructionWork from "../../Section/OurBusiness/ConstructionWork";
import InteriorFinishingWorks from "../../Section/OurBusiness/InteriorFinishingWorks";
import ExteriorFinishingWorks from "../../Section/OurBusiness/ExteriorFinishingWorks";
import LandscapingWorks from "../../Section/OurBusiness/LandscapingWorks";

export default function OurBusiness() {
    return (
        <MainOurBusiness>
            <ConstructionWork />
            <InteriorFinishingWorks />
            <ExteriorFinishingWorks />
            <LandscapingWorks />
        </MainOurBusiness>
    )
}

const MainOurBusiness = styled.div`

padding: 110px 0 50px 0;

.parent {
    margin-top: 30px;
}
h2 {
    text-align: center;
}
.slider {
  margin:0 20px;
  overflow:"hidden";
  padding:2rem 0;
}

.slider img {
  width: 100%;
  border-radius:10px;
}

.react-multi-carousel-list {
    padding: 0rem 0 2rem 0;
}

.custom-dot-list-style button{
    border: none;
    background: rgb(255, 68, 68);
}
.react-multi-carousel-dot.react-multi-carousel-dot--active button{
    background: rgb(255, 68, 68) !important;
}

`;