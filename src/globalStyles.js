import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Gelasio&display=swap');
${reset};
body {
  font-family: 'Gelasio', serif;
  background: #fcfcfc;
}
a {
  color: inherit;
}
main {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
`;