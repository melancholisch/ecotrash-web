import styled from 'styled-components';


export const MyMobileNavBar = styled.nav`

    display:none;
    width: 250px;
    z-index: 6;
    background-color: #808080;

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
    padding: 25px;
    top: 120px;
    }


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




`
