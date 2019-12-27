import styled from 'styled-components';

export const MyDesktopNavBar = styled.nav`

    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    padding: 25px;
    top: 25px;
    margin-right: 40px;
 


  a {
    text-decoration: none;
    color: #000;
    padding: 15px;
    font-weight:bold;
    font-size: 15px;
   
  }

  @media (max-width:980px){
    a {
    display:none;
    }
  }

  a:hover{
    color: rgba(220,220,220);
  }

`
export const MyMobileNavButton = styled.button`

  background-color: transparent;
  border: none;
  display: none;
  position: relative;
  

@media (max-width:980px){

  width: 10px;
  display: block;
  
}

`
