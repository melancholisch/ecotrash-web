import React from 'react';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import email from '../../assets/email.png';
import whatsapp from '../../assets/whatsapp.png';
import { Container, Todos} from './styles';

//import Routes from '../../routes';

const footer = props =>(
    
        <Container>
            <div>
            <a href='https://www.facebook.com/EcoTrash-102756437926770/' ><img src={facebook} alt='facebook' /></a>
            <a href='https://instagram.com/ecotrashrio' ><img src={instagram} alt='instagram' /></a>
            <a href='https://'><img src={email} alt='email' /></a>
            <a href='https://'><img src={whatsapp} alt='whatsapp' /></a>    
            </div>
            <Todos>
                <p>© 2019 por ecotrash <br />
                Todos os direitos reservados</p>
            </Todos>      
        </Container>
);

export default footer;