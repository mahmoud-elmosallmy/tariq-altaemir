import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import OurBusiness from "./Pages/OurBusiness/OurBusiness";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Certificates from "./Pages/Certificates/Certificates";
import ScrollUp from "./Components/ScrollUp/ScrollUp";


export default function App() {



  return (
    <div className="app">
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourbusiness" element={<OurBusiness />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
        <ScrollUp />
        <Footer />
    </div>
  );
}
