import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
    html, border-style, #root{
        min-height: 100%;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Didact Gothic', sans-serif;
    }
    button {
        cursor: pointer;
    }
`;