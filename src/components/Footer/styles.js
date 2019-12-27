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

  img {
         
  }

  div{
    display:flex;
    align-items: center;
    justify-content: center;
  }
`

export const Todos = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
`