import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import DesktopNavBar from './Desktop/DesktopNavBar';
import MobileNavBar from './Mobile/MobileNavBar';
import styled from 'styled-components';
import Logo from '../../assets/logoreformada.png';


const MyNavBar = styled.div`

    display:flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    overflow: hidden !important;
    max-width: 100%;
    margin-bottom:40px;
    z-index: 5;

    .logo{
        width:100px;
        position: absolute;
        left: 40px;
        top: 25px;  

    }
    @media (max-width:980px){
        .logo{
            width: 80px;
            left: 20px;
            top:25px;
        }
    }
`


class Header extends Component {

    state = {
        displayMobileNavBar: true
    }

    toggleMobileNavBar = () => {
        this.setState ( prevState => {
            return { displayMobileNavBar: !prevState.displayMobileNavBar}
        })
    }

    render (){
        return(
            <MyNavBar>
                <NavLink to='/' ><img src={Logo} alt='testelogo' className="logo" /></NavLink>
                <DesktopNavBar toggleMobileNavBar = {this.toggleMobileNavBar} />
                <MobileNavBar displayMobileNavBar = {this.state.displayMobileNavBar} />
            </MyNavBar>
        )

    }
}
export default Header;




















//import { NavLink } from 'react-router-dom';
// import { LogopraDiferenciar } from './styles';
// import LinksHeader from './LinksHeader';
// import Logo from '../../assets/tentativa1.png';

/*const header = props =>(
        
            <>
            <LogopraDiferenciar>
            <NavLink to='/' ><img src={Logo} alt="logo-site" /></NavLink> 
            </LogopraDiferenciar>
            <LinksHeader />     
        </>
);

export default header;

*/

