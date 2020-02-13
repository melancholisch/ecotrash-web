import React from 'react';

import Header from '../../components/Header/Header';
import {Container} from './styles';
import mockup from '../../assets/app-foto.png';
import Footer from '../../components/Footer/Footer';
//import CarouselPage from './Slider/index';



export default function Home() {
  return (
    <>
    <Header />
    <Container>
      <div>
        <div className="container-texto">
            <div className="texto">
            <h2>Nosso Aplicativo</h2>

            <p>Simples, moderno <br/>
            e com um sistema <br/>
            de pontos justos <br/>
            com recompensas <br/>
            que você vai amar</p>
            
            <a href="/"><button>Baixar App</button></a>
            </div>
            <img src={mockup} alt='mockup'/>
        </div>       
      </div>
    </Container>
    <Footer />
    </>
  );
}
