import styled from 'styled-components';
import fundo from '../../assets/imagem-pessoas2.jpg';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 60px;
    background:url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    text-align: center;

    @media (max-width:980px){
        height: auto;
        justify-content: center;
        
    }
    .container-texto{
        display: flex; 

        @media (max-width:980px){
            display: block;
            background-color: rgba(33,37,45, 60%);
        }
    }

    .container-texto img{
        position: relative;
        top: 180px;
        left: 300px;
        height: 500px;

        @media (max-width:980px){
            position: none;
            top: 0;
            left: 0;
            margin-bottom:50px;
        }
    }
    
    .texto{
        width: 45vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: bold;
        background-color: rgba(33,37,45, 60%);

        @media (max-width:980px){
            width: 100vw;
            height: 100vh;
            background-color: transparent;
        }
    }

    .texto h2{
        color: #86b81b;
        font-size: 70px;
    }

    .texto p{
        color: #fff;
        font-size: 35px;
    }
    .texto button{
        width:200px;
        height: 40px;
        background-color:#86b81b;
        color: #fff;
        font-weight:bold;
        border-radius: 15px;
    }
    .texto button:hover{
        color: rgb(220, 220, 220);
    }
    
`
