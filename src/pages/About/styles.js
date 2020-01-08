import styled from 'styled-components';
import fundo from '../../assets/fundo2.jpg';

export const ContainerTexto = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 40px;
    background:url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;
    text-align: center;
    
    .textos{
    width: 500px;
    position: relative;
    top: 45px;
    right: 30px;
    background-color: #fff;
    opacity: 0.7;
    font-weight: bold;
    padding: 20px;
    }

    h4{
        margin-bottom: 20px;
        font-weight: bold;
        
    }
    
`