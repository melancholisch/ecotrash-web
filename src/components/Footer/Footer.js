import React from 'react';

import { Container, Todos} from './styles';

//import Routes from '../../routes';

const footer = props =>(
    
        <Container>
            
            
            <div>
            <a href='https://www.facebook.com/EcoTrash-102756437926770/' >Facebook</a>
            <a href='https://instagram.com/ecotrashrio' >Instagram</a>
            <a href='https://'>ecotrashrio@gmail.com</a>
            <a href='https://'>+55 21 99936-6562 </a>    
            </div>
            
            <Todos>
                <p>© 2019 por ecotrash <br />
                Todos os direitos reservados</p>
            </Todos>  
                
        </Container>
);

export default footer;