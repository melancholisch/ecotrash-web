import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button``

class Geoloc extends Component {
    render (){
        return(
    
    <Button 
    className='myWonderfulButton'
    onClick={
        () => {
            navigator.geolocation.getCurrentPosition( location => {
            console.log(location);
        });
        }
    }>
        Show Location
</Button>
        )}
}
export default Geoloc;