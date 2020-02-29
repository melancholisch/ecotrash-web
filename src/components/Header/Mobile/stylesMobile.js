import styled from 'styled-components';

export const MyMobileNavBar = styled.nav`

    display:none;
    width: 250px;
    height: 300px;
    z-index: 6;
    background-color: #fff;
    

@media (max-width:980px){

    align-self: flex-end;
    transition: transform 1s;
    transform: translateX( ${ props => props.displayMobileNavBar ? ("0%") : ("calc(100% + 15px)") } );
    display: flex;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    right: 0;
    top: 110px;
    box-shadow: 1px 1px 4px 1px #86b81b;
    }


    a {
    text-decoration: none;
    color: #000;
    padding: 15px 25px ;  
    font-weight: bold;
    font-size: 15px;
    transition: all 1s;    
  }

  a:hover{
    background-color: rgba(134,184, 27);
    color: #fff;
    border-radius: 15px;
  }

`
