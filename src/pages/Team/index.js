import React from 'react';

import Header from '../../components/Header/Header';
import lucas from '../../assets/lucas.png'
import retang from '../../assets/retangle.png'
import {ContainerTeam} from './styles';
import Footer from '../../components/Footer/Footer';


export default function Team() {
  return (
    <>
    <Header />
    <ContainerTeam>

      <h1>"PROFISSIONAIS JOVENS, QUALIFICADOS, DINÂMICOS E 
      <br/>APAIXONADOS PELO QUE FAZEM."</h1>

      <div className="perfis">
        <div className="perfil" > 
          <a href="https://linkedin.com/"> <img src={lucas} alt="foto-lucas"></img> </a>
          <h3>Lucas Silva</h3>
          <p>Desenvolvedor Front End</p>
        </div>

      <img src={retang} className="retang" alt="retangulo"/>
        
        <div className="perfil" > 
          <a href="https://linkedin.com/"> <img src={lucas} alt="foto-lucas"></img> </a>
          <h3>Mellyssa Monteiro</h3>
          <p>Desenvolvedora Front End</p>
        </div>

        <img src={retang} className="retang" alt="retangulo"/>

        <div className="perfil" > 
          <a href="https://linkedin.com/"> <img src={lucas} alt="foto-lucas"></img> </a>
          <h3>Ruan Pedro</h3>
          <p>Desenvolvedor Back End</p>
        </div>

        <img src={retang} className="retang" alt="retangulo"/>

        <div className="perfil" > 
          <a href="https://linkedin.com/"> <img src={lucas} alt="foto-lucas"></img> </a>
          <h3>Matheus Soares</h3>
          <p>Desenvolvedor Front End</p>
        </div>
      </div>
      <br/>
      <h4>CLIQUE NAS FOTOS E ACESSE OS PERFIS.</h4>


    </ContainerTeam>
    <Footer />
    </>
  );
}
