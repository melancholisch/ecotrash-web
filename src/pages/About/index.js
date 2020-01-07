import React from 'react';
// import Routes from '../../routes';

import Header from '../../components/Header/Header';
import {ContainerTexto} from './styles';
import Footer from '../../components/Footer/Footer';


export default function About() {
  return (
    <>
    <Header />
    <ContainerTexto>
    <h1>PROPÓSITO</h1>
    <p>
    Da era digital emerge uma nova lógica que rege a forma como nos comunicamos, aprendemos, interagimos e nos 
    potencializamos. Os jovens dessa era podem desafiar o sistema vigente e, conectados, programar novas soluções 
    para os problemas do mundo. Impulsionar esse movimento é o nosso propósito.Por meio do empoderamento digital, 
    queremos ampliar o horizonte de oportunidades para os jovens em situação de vulnerabilidade social. 
    Alguns indicadores reforçam a urgência de nossa atuação:</p>
    </ContainerTexto>
    <Footer />
    
    
    </>
  );
  }
