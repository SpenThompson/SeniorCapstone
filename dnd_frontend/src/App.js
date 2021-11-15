import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, Members, Information, Services, Contact} from "./components/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/information"element={<Information />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
