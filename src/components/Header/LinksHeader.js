import React from 'react';
import { NavLink } from 'react-router-dom';

// import Sidedrawer from '../../components/MenuResponsivo/Sidedrawer';
//import Routes from '../../routes';

const contlinks = props =>{
    return (
            <>
            <NavLink to='/About' activeStyle={{color:'rgba(220,220,220)'}} >Quem somos</NavLink>
            <NavLink to='/Steps' activeStyle={{color:'rgba(220,220,220)'}}  >Passo a passo</NavLink>
            <NavLink to='/Points' activeStyle={{color:'rgba(220,220,220)'}}  >Pontos de coleta</NavLink>    
            <NavLink to='/Team' activeStyle={{color:'rgba(220,220,220)'}}  >Equipe</NavLink> 
            </>
    )    
};

export default contlinks;