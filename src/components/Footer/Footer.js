import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Todos} from './styles';

//import Routes from '../../routes';

const footer = props =>(
    
        <Container>
            
            <div>
            <NavLink to='/About' >Facebook</NavLink>
            <NavLink to='/News' >Instagram</NavLink>
            <NavLink to='/Passo' >Email</NavLink>
            <NavLink to='/Pontos' >Telefone</NavLink>    
            </div>
            
            <Todos>
                <p>© 2019 por e-coTrash <br />
                Todos os direitos reservados</p>
            </Todos>  
                
        </Container>
);

export default footer;