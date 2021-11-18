import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, Members, Information, Services, Contact, GameForm, GameList, PlayerForm, PlayerList, HomebrewForm, HomebrewList} from "./components/pages";

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
          <Route exact path="/members/looking-for-players" element={<GameForm />} />
          <Route exact path="/members/open-games" element={<GameList />} />
          <Route exact path="/members/looking-for-game" element={<PlayerForm />} />
          <Route exact path="/members/available-players" element={<PlayerList />} />
          <Route exact path="/members/submit-homebrew" element={<HomebrewForm />} />
          <Route exact path="/members/homebrew-archive" element={<HomebrewList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
