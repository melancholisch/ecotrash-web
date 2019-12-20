import React from 'react';
import {ContainerButton} from './stylesButton';
import Botao from '../../assets/botao-verde.png';
// import { Container } from './styles';

const drawerToggleButton = props =>{
    return (
    <ContainerButton onClick = {props.toggleMobileButton} >
        
        <img src={Botao} alt="botao"/>    
         
    </ContainerButton>
    )

};

export default drawerToggleButton;