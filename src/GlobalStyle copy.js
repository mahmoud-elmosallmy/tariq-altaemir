import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap');
}


html {
  font-size: 62.5%;
  overflow-x: hidden;
}


.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}


// Large devices (desktops, 992px and up)
@media screen and (min-width: 992px) { 
    .container {
        
    }
}

// X-Large devices (large desktops, 1200px and up)
@media screen and (min-width: 1200px) { 
    .container {
        
    }
}
`;