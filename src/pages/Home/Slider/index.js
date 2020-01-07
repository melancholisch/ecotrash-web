import React from 'react';
import Imagemteste from '../../../assets/Tema_Coleta2.png';
import Imagemteste2 from '../../../assets/Tema_Coleta.png';
import Imagemteste3 from '../../../assets/Tema_Coleta3.png';
//import {MDBView} from './styles';

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        width="100"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1"  >
            <MDBView>
              <img
                className="d-block w-100 "
                src={ Imagemteste2}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src= { Imagemteste }
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={Imagemteste3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;


