import React from 'react';
// import {Title} from './styles';
// import Routes from '../../routes';

import Header from '../../components/Header/Header';
import {ContainerPassos} from './styles';
import Footer from '../../components/Footer/Footer';


export default function Steps() {
  return (
    <>
    <Header />
    <ContainerPassos>
      <div className="maiores">

        <div className="menores">
        <p>1º PASSO<br/><br/>
          SEPARAR SEU LIXO ELETRÔNICO DO LIXO DOMÉSTICO. CLIQUE AQUI E VEJA A LISTAGEM DE COMPONENTES QUE RECOLHEMOS.</p>
        </div>

        <div className="menores">
        <p>2º PASSO<br/><br/>
        ACESSAR A OPÇÃO DESCARTAR NA PÁGINA INICIAL DESSE APLICATIVO.</p>
        </div>

        <div className="menores">
        <p>3º PASSO<br/><br/>
        DIGITAR SUA LOCALIZAÇÃO E ESCOLHER O PONTO DE COLETA MAIS PRÓXIMO.</p>
        </div>

        <div className="menores">
        <p>4º PASSO<br/><br/>
        AO DESCARTAR, POSICIONAR A CÂMERA DO SEU CELULAR PARA O QR CODE DA CAIXA 
        E SEGUIR AS ORIENTAÇÕES DO<br/> LINK DE REDIRECIONAMENTO.</p>
        </div>

        <div className="menores">
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
