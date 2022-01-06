import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //// VARIÁVEIS DE COR
    :root {
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E;
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
        
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Montserrat Alternates', sans-serif;
        text-decoration: none;
    }

    body {
        background-color: var(--neutral-light);
        color: white;
        font-size: 1.2rem;
        
    }

    a {
        color: inherit;
    }

    p {
        color: var(--lavender-secondary);
        line-height: 1.9rem;
    }

    //ESTILIZAÇÃO DE FONTES
    .secondary-heading {
        font-size: 3rem;
        max-width: 100%;  

        color: var(--purple-primary);
        @media screen and (max-width: 845px) {
      font-size: 2.5rem;
      }        
    }


    .small-heading{
        font-size: 2.5rem;
        color: var(--purple-primary);
        text-align: center;
    }

    span{
        color: var(--accent-pink);
        
    }

    p {
        font-family: "Montserrat", sans-serif;
    }


    //UTILS
    .c-para{
        text-align: center;
    }

  
`;

export default GlobalStyle;
