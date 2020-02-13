import styled from 'styled-components';

export const Container = styled.nav`
  position: relative;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  height: auto;

  a {
    text-decoration: none;
    color: #000;
    padding: 15px;
    font-weight: bold;
    font-size: 15px;
    
  }

  a:hover{
    color: rgba(220,220,220);
  }

.downloads img{
  width: 150px;
}

  img {
         
  }

  div{
    display:flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 980px){
    div{
      
    }
  }
`

export const Todos = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
`
