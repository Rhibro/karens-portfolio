import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Media from "./components/Media";
import News from "./components/News";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index";

function App() {
  return (
    <BrowserRouter>
      
      <div>
        <Header />
      </div>
      
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/resume" exact element={<Resume />} />
            <Route path="/media" exact element={<Media />} />
            <Route path="/news" exact element={<News />} />
            <Route path="/gallery" exact element={<Gallery />} />
            
          </Routes>
        </div>

      <div>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;


/*

<Route path="/header" exact element={<Header />} />

<Route path="/footer" exact element={<Footer />} />


*/