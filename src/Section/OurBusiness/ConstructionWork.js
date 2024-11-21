import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Construction1 from "../../images/ConstructionWork/1.jpeg"
import Construction2 from "../../images/ConstructionWork/2.jpeg"
import Construction3 from "../../images/ConstructionWork/3.jpeg"
import Construction4 from "../../images/ConstructionWork/4.jpeg"
import Construction5 from "../../images/ConstructionWork/5.jpeg"
import Construction6 from "../../images/ConstructionWork/6.jpeg"
import Construction7 from "../../images/ConstructionWork/7.jpeg"
import Construction8 from "../../images/ConstructionWork/8.jpeg"
import Construction9 from "../../images/ConstructionWork/9.jpeg"
import Construction10 from "../../images/ConstructionWork/10.jpeg"
import Construction11 from "../../images/ConstructionWork/11.jpeg"
import Construction12 from "../../images/ConstructionWork/12.jpeg"
import Construction13 from "../../images/ConstructionWork/13.jpeg"
import Construction14 from "../../images/ConstructionWork/14.jpeg"
import Construction15 from "../../images/ConstructionWork/15.jpeg"
import Construction16 from "../../images/ConstructionWork/16.jpeg"
import Construction17 from "../../images/ConstructionWork/17.jpeg"
import Construction18 from "../../images/ConstructionWork/18.jpeg"
import Construction19 from "../../images/ConstructionWork/19.jpeg"
import Construction20 from "../../images/ConstructionWork/20.jpeg"

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
  {url: Construction1 },
  {url: Construction2 },
  {url: Construction3 },
  {url: Construction4 },
  {url:  Construction5},
  {url: Construction6 },
  {url: Construction7 },
  {url: Construction8 },
  {url: Construction9 },
  {url: Construction10 },
  {url: Construction11 },
  {url: Construction12 },
  {url: Construction13 },
  {url: Construction14 },
  {url: Construction15 },
  {url: Construction16 },
  {url: Construction17 },
  {url: Construction18 },
  {url: Construction19 },
  {url: Construction20 }
];
export default function ConstructionWork() {
  return (
    <div className="parent">
        <h2>أعمال البناء و التشييد</h2>
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
