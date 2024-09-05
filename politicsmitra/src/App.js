import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Coponents/Header/Header";
import ProtectedRoute from "./Coponents/ProtectedRoutes/ProtectedRoute";
import Homepage from "./Coponents/Homepage/Homepage";
import PadAdhikariPage from "./Coponents/PadhAdhikari/PadAdhikariPage";
import ListEvents from "./Coponents/Events/ListEvents";
import Login from "./Coponents/Login/Login";
import Register from "./Coponents/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Protected route for Homepage */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Homepage />} />
        <Route path="/padhadhikaripage" element={<PadAdhikariPage />} />
        <Route path="/events" element={<ListEvents />} />
        {/* You can optionally redirect to /login or login/signup page if needed */}
      </Routes>
    </Router>
  );
}

export default App;
