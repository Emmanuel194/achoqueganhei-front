import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UpdatePassword from "./pages/UpdatePassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:token" element={<UpdatePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
