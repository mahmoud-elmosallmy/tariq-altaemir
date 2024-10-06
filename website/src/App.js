import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/Aboue/About";
import OurBusiness from "./Pages/Our_business/Our_business";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components";

export default function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#fff",
      // bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
      larg: "1400px",
    },
  };


  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Design className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourbusiness" element={<OurBusiness />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Design>
      </ThemeProvider>
  );
}


const Design = styled.main`

// @media (max-width: 1400px}) {
//     .container {
//       width: 1170px;
//   }
// }
// @media (max-width: 998px}) {

//   .container {
//     width: 970px;
//   }
// }

// @media (max-width: 768px}) {
//   width: 750px;
// }

`
