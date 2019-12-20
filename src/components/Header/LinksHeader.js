import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';
// import Sidedrawer from '../../components/MenuResponsivo/Sidedrawer';
//import Routes from '../../routes';

const contlinks = props =>{
    return (
        <Container display = {props.displayLinksHeader} >
            <NavLink to='/About' activeStyle={{color:'rgba(220,220,220)'}} >Quem somos</NavLink>
            <NavLink to='/News' activeStyle={{color:'rgba(220,220,220)'}} >Notícias</NavLink>
            <NavLink to='/Steps' activeStyle={{color:'rgba(220,220,220)'}}  >Passo a passo</NavLink>
            <NavLink to='/Points' activeStyle={{color:'rgba(220,220,220)'}}  >Pontos de coleta</NavLink>    
        </Container>
    )    
};

export default contlinks;