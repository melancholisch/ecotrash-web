import styled from 'styled-components';
//import fundo from '../../assets/fundo2.jpg';
import fundo from '../../assets/imagem-pessoas.jpg';


export const ContainerTexto = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    margin-bottom: 40px;
    background:url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    text-align: center;
    
    .textos{
    width: 500px;
    position: relative;
    top: 65px;
    left: 30px;
    font-weight: bold;
    padding: 20px;
    background-color: rgba(255,250,250, 80%);
 
    }

    h4{
        margin-bottom: 20px;
        font-weight: bold;
        color: #86b81b;        
    }
    @media (max-width: 980px){
        justify-content: center;
        max-width: 100vw;
        
        .textos{
            max-width: 80vw;
            left:0;
        }
    }   
`