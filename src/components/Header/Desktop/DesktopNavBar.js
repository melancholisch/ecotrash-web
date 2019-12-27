import React from 'react';
import { MyDesktopNavBar, MyMobileNavButton } from './stylesDesktop';
import  Botao  from '../../../assets/botao-verde.png';
import LinksHeader from '../LinksHeader';

// import { Container } from './styles';


const DesktopNavBar = props => {
    return (
        
        <MyDesktopNavBar>
        <LinksHeader/> 
        <MyMobileNavButton
            onClick = { props.toggleMobileNavBar }
        >
        <img src={Botao} alt='testebotao'/>
        </MyMobileNavButton>
        </MyDesktopNavBar>
        
    )

}
export default DesktopNavBar;