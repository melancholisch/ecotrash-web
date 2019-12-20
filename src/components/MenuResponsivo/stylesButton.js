import styled from 'styled-components';

export const ContainerButton = styled.button` 

  display: none;
  background: transparent;
  

  @media (max-width:980px){
    display: block;
    background-color: green;
    border: none;
    margin: 10px;
    position: absolute;
    right: 0;
    padding: 20px;
    top: 10px;

    img {
    width: 20px;
    height: auto;
    }

    button{
      background-color: transparent;
      border: none;
      
    }
    
  
}
    
  `