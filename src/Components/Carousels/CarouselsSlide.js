import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import styled from 'styled-components';

export default function CarouselsSlide() {
  return (
    <CarouselsSlideStyle>
      <MDBCarousel showIndicators showControls fade className='carousel_box'>
        <MDBCarouselItem itemId={1} className='carousel_box'>
          <img src='https://i.pinimg.com/736x/47/7a/9a/477a9a12e5e4cafc38719f5e7bf6be35.jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src='https://i.pinimg.com/736x/ed/78/d2/ed78d2c755fad72100208ed70433ba8a.jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src='https://i.pinimg.com/736x/af/18/cd/af18cd8b07971016c2622b0390886a33.jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img src='https://i.pinimg.com/736x/78/3b/2f/783b2fe5e7b2d97149b4685f29ebd425.jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img src='https://i.pinimg.com/736x/0e/f5/ef/0ef5ef013d7653a0a3a5d1bee6edf0a5.jpg' className='d-block w-100' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </CarouselsSlideStyle>
  );
}

const CarouselsSlideStyle = styled.div`


img {
  height: 560px;
}
@media (max-width: 767px) {
  .carousel_box .carousel-item img  {
      height: 320px;!important 
  }
}
`

