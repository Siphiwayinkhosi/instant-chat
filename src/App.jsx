import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
