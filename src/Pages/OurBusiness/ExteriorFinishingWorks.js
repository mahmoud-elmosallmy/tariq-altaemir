import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Exterior1 from "../../images/ExteriorFinishingWorks/1.jpg"
import Exterior2 from "../../images/ExteriorFinishingWorks/2.jpg"
import Exterior3 from "../../images/ExteriorFinishingWorks/3.jpg"
import Exterior4 from "../../images/ExteriorFinishingWorks/4.jpg"
import Exterior5 from "../../images/ExteriorFinishingWorks/5.jpg"
import Exterior6 from "../../images/ExteriorFinishingWorks/6.jpg"
import Exterior7 from "../../images/ExteriorFinishingWorks/7.jpg"
import Exterior8 from "../../images/ExteriorFinishingWorks/8.jpg"
import Exterior9 from "../../images/ExteriorFinishingWorks/9.jpg"
import Exterior10 from "../../images/ExteriorFinishingWorks/10.jpg"
import Exterior11 from "../../images/ExteriorFinishingWorks/11.jpg"
import Exterior12 from "../../images/ExteriorFinishingWorks/12.jpg"
import Exterior13 from "../../images/ExteriorFinishingWorks/13.jpg"
import Exterior14 from "../../images/ExteriorFinishingWorks/14.jpg"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  minmobile: {
    breakpoint: { max: 464, min: 200 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  {url: Exterior1 },
  {url: Exterior2 },
  {url: Exterior3 },
  {url: Exterior4 },
  {url:  Exterior5},
  {url: Exterior6 },
  {url: Exterior7 },
  {url: Exterior8 },
  {url: Exterior9 },
  {url: Exterior10 },
  {url: Exterior11 },
  {url: Exterior12 },
  {url: Exterior13 },
  {url: Exterior14 }
];
export default function ExteriorFinishingWorks() {
  return (
    <div className="parent">
        <h2>أعمال التشطيب الخارجي</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
