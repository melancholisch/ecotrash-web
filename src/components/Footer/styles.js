import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
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
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: bold;
`
