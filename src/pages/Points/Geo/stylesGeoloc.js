import styled from "styled-components";

export const Container = styled.div`
    #map { 
    height: 480px; 
    width: 90%; 
    margin: 0 auto; 
    
    @media (max-width:980px){
    max-width: 90vw;
    z-index:0;
    }

  }
    button{
      display: flex;
      margin: 0 auto;
      padding: 20px;
      background-color: rgb(133, 184, 27);
      color: #fff;
      border-radius: 15px;
      font-weight: bold;
  }
    button:hover{
      color: rgb(220, 220, 220);
    }
`;
