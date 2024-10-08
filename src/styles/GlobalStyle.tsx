import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { lightTheme, darkTheme } from './theme';

export const GlobalStyle = createGlobalStyle`
${reset}

:root {
  ${lightTheme}
  ${darkTheme}

  --white: #FFFFFF;
  --lightGray: #DDDBDB;
  --borderGray: #DFE0E1;
  --charcoal: #4F4D4D;
  --sealBrown: #171010;
  --black: #000000;  
  --shadow: #453333;

    --offenseRec: #e34e4e;  // 원래  #E83737; #db5757, 
    --defenseRec: #6897A9;

    --normal: #C6C6A7;
    --fire: #F5AC78;
    --water: #9DB7F5;
    --electric: #FAE078;
    --grass: #A7DB8D;
    --ice: #BCE6E6;
    --fighting: #D67873;
    --poison: #C183C1;
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
    //--stella: #44628D;
  }

  * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'NotoSans', 'sans-serif', 'Arial' ;
  font-size: 16px;
  background-color: var(--color-background);  
  box-sizing: border-box;
}

br {
  display: inline;
}

.toggle {
      fill: var(--color-toggle);

      .toggleIcon {
        fill: var(--color-toggleIcon);
      }
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
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.30));
  }

  .shadow-gr {
    filter: drop-shadow(0px 2px 2px var(--lightGray));
  }
  
  .shadow-btn {
    filter: drop-shadow(0px 2px 2px #93896b);
  }
`;

export default GlobalStyle;
