import React from 'react';
// import {Title} from './styles';
// import Routes from '../../routes';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Geoloc from './Geo/Geoloc';


export default function Points() {
  return (
    <>
    <Header />
    <Geoloc/>
    <Footer />
    </>
  );
}
