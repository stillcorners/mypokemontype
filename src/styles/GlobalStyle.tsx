import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Helios from './Helios.woff';

export const GlobalStyle = createGlobalStyle`
${reset}

* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  font-size: 16px;
}

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  [hidden] {
  display: none;
}

  .shadow-bl {
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.30));
  }

  .shadow-gr {
    filter: drop-shadow(0px 4px 2px var(--lightGray));
  }


  :root {
    --white: #FFFFFF;
    --lightGray: #DDDBDB;
    --borderGray: #DFE0E1;
    --charcoal: #4F4D4D;
    --sealBrown: #171010;
    --black: #000000;  
    --notselectedforLight: #C6C6A7;

    --offenseRec: #E83737;
    --defenseRec: #6897A9;

    --normal: #C6C6A7;
    --fire: #F5AC78;
    --water: #9DB7F5;
    --electric: #FAE078;
    --grass: #A7DB8D;
    --ice: #BCE6E6;
    --fighting: #D67873;
    --poision: #C183C1;
    --ground: #EBD69D;
    --flying: #C6B7F5;
    --psychic: #FA92B2;
    --bug: #C6D16E;
    --rock: #D1C17D;
    --ghost: #A292BC;
    --dragon: #A27DFA;
    --dark: #A29288;
    --steel: #D1D1E0;
    --fairy: #F4BDC9;
  }

  body [data-theme='light'] {
    --color-background: var(--lightGray);
    --color-Title: var(--black);
    --color-card: var(--white);
    --color-text: var(--black);
    --color-border: var(--borderGray);
    --color-notSelected: var(--notselectedforLight);
    --color-toggle: var(--black);
    --color-toggleIcon: var(--lightGray);
  }

  body [data-theme='dark'] {
    --color-background: var(--charcoal);
    --color-Title: var(--lightGray);
    --color-card: var(--sealBrown);
    --color-text: var(--lightGray);
    --color-border: var(--borderGray);
    --color-notSelected: var(--charcoal);
    --color-toggle: var(--lightGray);
    --color-toggleIcon: var(--charcoal);
    
  }
  


  ::selection { background: var(--fighting) }

body {
  background-color: var(--color-background);
  background-color: var(--lightGray);

  .title {
    color: var(--color-Title);
  }

  .card {
    background-color: var(--color-card);
    color: var(--color-text);

    .option {
      color: var(--color-text);
    }

  }

  /* .toggle {
    background-color: var(--color-toggle);
    color: var(--color-toggleIcon);
  } */

  .more {
    background-color: var(--color-toggle);
  }

}


  @font-face {
    font-family: 'Helios';
        src: local('./Helios.woff'), local('Helios');
        font-style: normal;
        src: url(${Helios}) format('truetype');
  }
`;

export default GlobalStyle;
