import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Landscaping1 from "../../images/LandscapingWorks/1.jpg"
import Landscaping2 from "../../images/LandscapingWorks/2.jpg"
import Landscaping3 from "../../images/LandscapingWorks/3.jpg"
import Landscaping4 from "../../images/LandscapingWorks/4.jpg"
import Landscaping5 from "../../images/LandscapingWorks/5.jpg"
import Landscaping6 from "../../images/LandscapingWorks/6.jpg"
import Landscaping7 from "../../images/LandscapingWorks/7.jpg"
import Landscaping8 from "../../images/LandscapingWorks/8.jpg"
import Landscaping9 from "../../images/LandscapingWorks/9.jpg"
import Landscaping10 from "../../images/LandscapingWorks/10.jpg"
import Landscaping11 from "../../images/LandscapingWorks/11.jpg"
import Landscaping12 from "../../images/LandscapingWorks/12.jpg"
import Landscaping13 from "../../images/LandscapingWorks/13.jpg"

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
  {url: Landscaping1 },
  {url: Landscaping2 },
  {url: Landscaping3 },
  {url: Landscaping4 },
  {url:  Landscaping5},
  {url: Landscaping6 },
  {url: Landscaping7 },
  {url: Landscaping8 },
  {url: Landscaping9 },
  {url: Landscaping10 },
  {url: Landscaping11 },
  {url: Landscaping13 },
  {url: Landscaping12 }
];
export default function LandscapingWorks() {
  return (
    <div className="parent">
        <h2>أعمال تنسيق الحدائق</h2>
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
