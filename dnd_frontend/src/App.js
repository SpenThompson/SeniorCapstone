import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, Members, Information, Services, Contact } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/information" component={Information} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
