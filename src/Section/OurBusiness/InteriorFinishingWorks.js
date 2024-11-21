import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Interior1 from "../../images/InteriorFinishingWorks/1.jpg"
import Interior2 from "../../images/InteriorFinishingWorks/2.jpg"
import Interior3 from "../../images/InteriorFinishingWorks/3.jpg"
import Interior4 from "../../images/InteriorFinishingWorks/4.jpg"
import Interior5 from "../../images/InteriorFinishingWorks/5.jpg"
import Interior6 from "../../images/InteriorFinishingWorks/6.jpg"
import Interior7 from "../../images/InteriorFinishingWorks/7.jpg"
import Interior8 from "../../images/InteriorFinishingWorks/8.jpg"
import Interior9 from "../../images/InteriorFinishingWorks/9.jpg"
import Interior10 from "../../images/InteriorFinishingWorks/10.jpg"
import Interior11 from "../../images/InteriorFinishingWorks/11.jpg"
import Interior12 from "../../images/InteriorFinishingWorks/12.jpg"

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
  {url: Interior1 },
  {url: Interior2 },
  {url: Interior3 },
  {url: Interior4 },
  {url:  Interior5},
  {url: Interior6 },
  {url: Interior7 },
  {url: Interior8 },
  {url: Interior9 },
  {url: Interior10 },
  {url: Interior11 },
  {url: Interior12 }
];
export default function InteriorFinishingWorks() {
  return (
    <div className="parent">
        <h2>أعمال التشطيب الداخلي</h2>
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
