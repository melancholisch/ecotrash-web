import React from 'react';
// import {Title} from './styles';
// import Routes from '../../routes';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';
import CarouselPage from './Slider/index';


export default function Home() {
  return (
    <>
    <Header />
    <CarouselPage />
    <Footer />
    </>
  );
}
