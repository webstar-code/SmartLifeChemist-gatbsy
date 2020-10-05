import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body, html {
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}

`