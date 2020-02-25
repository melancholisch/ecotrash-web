import styled from 'styled-components';

export const ContainerTeam = styled.div`
    
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;

    .perfis{
        display: flex;
        justify-content: space-around;
        margin-top: 30px;

        @media(max-width:980px){
            flex-direction: column;
            
        }    
    }

    .perfil{
        text-align: center;
        
        @media(max-width:980px){
            margin-top: 30px;
        }
    }

    @media(max-width:980px){
        .retang{
        display: none;
        }
    }
    h4{
        font-weight: bold;
    }
    
`