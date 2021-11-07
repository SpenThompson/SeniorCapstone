import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Home, Members, Information, Services, Contact } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/members" exact component={() => <Members />} />
          <Route path="/information" exact component={() => <Information />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
