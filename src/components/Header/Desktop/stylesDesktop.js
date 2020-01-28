import styled from 'styled-components';

export const MyDesktopNavBar = styled.nav`

    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    margin-right: 40px;

    a {
    text-decoration: none;
    color: #000;
    margin-right: 45px;
    font-weight:bold;
    font-size: 15px;
    padding: 15px 25px ;   
    transition: all 1s;
  }

  @media (max-width:980px){
    a {
    display:none;
    }
  }

  a:hover{
    background-color: rgba(134,184, 27);
    color: #fff;
    border-radius: 15px;
  }

`
export const MyMobileNavButton = styled.button`

  background-color: transparent;
  border: none;
  display: none;
  position: relative;
  

@media (max-width:980px){
  width: 5px;
  margin-right:20px;
  display: block;  
}

`
