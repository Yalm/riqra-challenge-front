import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        src: url('/fonts/OpenSans-Regular.ttf') format('truetype');
        font-weight: 400;
        font-display: swap;
    }

    body {
        background-color: ${({ theme }) => theme.colors.main};
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
    }
    button {
        border: 0;
        background-color: transparent;
        &:focus {
            outline: 0;
        }
    }
    
    .text-center {
       text-align: center; 
    }
    
    .m-0 {
        margin:0px;
    }

    .m-b-4 {
        margin-bottom: 10px;
    }

    .w-100 {
        width: 100%;
    }

    .text-danger {
        color: ${({ theme }) => theme.colors.danger};
    }
`;

export default GlobalStyle;
