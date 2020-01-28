import React from 'react';
import { MyMobileNavBar } from './stylesMobile';
import LinksHeader from '../LinksHeader';

// import { Container } from './styles';


const MobileNavBar = props => {
    return (
        
        <MyMobileNavBar displayMobileNavBar = { props.displayMobileNavBar} >
        <LinksHeader/> 
        </MyMobileNavBar>
        
    )

}
export default MobileNavBar;