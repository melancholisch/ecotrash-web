import styled from 'styled-components';

export const LogopraDiferenciar = styled.a`

   img {
      margin-left: 40px;
      position: absolute;
      top: 30px;
      width: 80px;
   }

@media (max-width: 980px){

  img {
    margin-left: 15px;
    width: 70px;
    position: absolute;
    top: 18px;
  }
}
`

export const Container = styled.nav`

    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    padding: 25px;
    top: 25px;
    margin-right: 40px;

@media (max-width:980px){
    flex-flow: column nowrap;
    position: absolute;
    right: 0;
    margin-right: 10px;
    top: 85px;
    width: 250px;
    background-color: gray;
  } 

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

`
