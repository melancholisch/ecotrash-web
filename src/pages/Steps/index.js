import React from 'react';
// import {Title} from './styles';
// import Routes from '../../routes';

import Header from '../../components/Header/Header';
import {ContainerPassos} from './styles';
import  ilu1 from '../../assets/lista.png';
import ilu2 from '../../assets/desktop-celular.png';
import ilu3 from '../../assets/location.png';
import ilu4 from '../../assets/qrcode.png';
import ilu5 from '../../assets/personalinfo.png';
import Footer from '../../components/Footer/Footer';


export default function Steps() {
  return (
    <>
    <Header />
    <ContainerPassos>
      <div className="maiores">

        <div className="menores">
        <img src={ilu1} alt="separar lixo" className="ilustracoes" />
        <p>1º PASSO<br/><br/>
          SEPARAR SEU LIXO ELETRÔNICO DO LIXO DOMÉSTICO. CLIQUE AQUI E VEJA A LISTAGEM DE COMPONENTES QUE RECOLHEMOS.</p>
        </div>

        <div className="menores">
        <img src={ilu2} alt="descarte" className="ilustracoes" />
        <p>2º PASSO<br/><br/>
        ACESSAR A OPÇÃO DESCARTAR NA PÁGINA INICIAL DO APLICATIVO DISPONÍVEL PARA DOWNLOAD OU NA ABA PONTOS DE COLETA .</p>
        </div>

        <div className="menores">
        <img src={ilu3} alt="localizacao" className="ilustracoes" />
        <p>3º PASSO<br/><br/>
        ESCOLHER O PONTO DE COLETA MAIS PRÓXIMO DE ACORDO COM SUA LOCALIZAÇÃO.</p>
        </div>

        <div className="menores">
        <img src={ilu4} alt="qr code" className="ilustracoes" />
        <p>4º PASSO<br/><br/>
        AO DESCARTAR, POSICIONAR A CÂMERA DO SEU CELULAR PARA O QR CODE DA CAIXA 
        E SEGUIR AS ORIENTAÇÕES DO<br/> LINK DE REDIRECIONAMENTO.</p>
        </div>

        <div className="menores">
        <img src={ilu5} alt="informacoes" className="ilustracoes" />
        <p>5º PASSO<br/><br/>
        DIGITE SEUS DADOS PESSOAIS E RETIRE SEU CERTIFICADO DE DESCARTE, ACUMULE 
        PONTOS E TROQUE POR DESCONTOS COM NOSSOS PARCEIROS!</p>
        </div>

      </div>
    </ContainerPassos>

    <Footer />
    </>
  );
}
