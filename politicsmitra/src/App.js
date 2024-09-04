import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Coponents/Homepage/Homepage";
import PadAdhikariPage from "./Coponents/PadhAdhikari/PadAdhikariPage";
import ListEvents from "./Coponents/Events/ListEvents";
import Header from "./Coponents/Header/Header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Homepage />} />
        <Route path="/padhadhikaripage" element={<PadAdhikariPage />} />
        <Route path="/events" element={<ListEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
