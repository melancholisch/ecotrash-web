import styled from 'styled-components';

export const ContainerPassos = styled.div`

.maiores{
    display:flex;
    margin-top: 60px;
    margin-bottom: 50px;
}

@media (max-width: 980px){
    .maiores{
        display: block;
        
    }
    .menores{
        width: 400px;
    }
}

.menores{
    width: 250px;
    padding: 40px;
    text-align: center;
    margin: 0 auto;
    font-weight: bold;

    p{
        color: #000;
        margin-top: 20px;
    }
    .titulo-paragrafo{
        color: #86b81b;
    }
    
}

.ilustracoes{
    width: 200px;
    height: 150px;
    margin-bottom: 15px;

}
#ilustracao-especial3{
    width: 140px;
}

#ilustracao-especial5{
    width: 210px;
}

`