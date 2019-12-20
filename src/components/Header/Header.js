import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { LogopraDiferenciar } from './styles';
import LinksHeader from './LinksHeader';
import Logo from '../../assets/tentativa1.png';
import DrawerToggleButton from '../../components/MenuResponsivo/DrawerToggleButton';
// import Sidedrawer from '../../components/MenuResponsivo/Sidedrawer';
// import Routes from '../../routes';


class Header extends Component{

    state ={
        displayLinksHeader: true
    }

    toggleMobileButton = () => {
        this.setState( prevState => {
            return {displayLinksHeader: !prevState.displayLinksHeader}
        })
    }

    render(){
        return(
            <>
            <DrawerToggleButton toggleMobileButton = { this.toggleMobileButton } />
            <LogopraDiferenciar>
            <NavLink to='/' ><img src={Logo} alt="logo-site" /></NavLink> 
            </LogopraDiferenciar>
            <LinksHeader displayLinksHeader = { this.state.displayLinksHeader } />     
        </>
        )
    }
}

export default Header;