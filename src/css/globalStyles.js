import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Bitter&family=Montserrat&display=swap');
        ${normalize}

        body { 
        font-family: 'Bitter', serif;
        font-family: 'Montserrat', sans-serif;
    }
`;
export default GlobalStyle;
