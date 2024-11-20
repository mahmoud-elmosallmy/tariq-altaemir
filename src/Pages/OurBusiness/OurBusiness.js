import styled from "styled-components";
import ConstructionWork from "../../Section/OurBusiness/ConstructionWork";

export default function OurBusiness() {
    return (
        <MainOurBusiness>
            <ConstructionWork />
        </MainOurBusiness>
    )
}

const MainOurBusiness = styled.div`

padding: 110px 0 50px 0;

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