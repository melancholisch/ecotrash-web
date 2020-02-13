import React from 'react';
// import Routes from '../../routes';

import Header from '../../components/Header/Header';
import {ContainerTexto} from './styles';
//import Fundo from '../../assets/fundoquemsomos.png'
import Footer from '../../components/Footer/Footer';


export default function About() {
  return (
    <>
    <Header />
    <ContainerTexto>

    <div>
    <div className="textos" >
    <h4>O que fazemos?</h4>
    <p>
    Facilitamos o descarte ecologicamente correto do lixo eletrônico de pessoas e empresas e incentivamos a 
    transformação social por meio do engajamento socioambiental.</p>

    <h4>Por que descartar?</h4>
    <p>
    Você contribui diretamente para a o descarte correto de insumos químicos e reaproveitamento componentes, 
    ajudando a limpar o meio ambiente. Descartando conosco você consegue desconto com nosso parceiros e um certificado. </p>

    <h4>Por que a ecotrash?</h4>
    <p>
    Os componentes eletrônicos são selecionados e encaminhados para conserto e remanufatura com os alunos da FIRJAN, 
    auxiliando no aprendizado de jovens em vulnerabilidade social em tecnologia. </p>
    
    </div>
    </div>
    </ContainerTexto>
    
    <Footer />
    
    
    </>
  );
  }
