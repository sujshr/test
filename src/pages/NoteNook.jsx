import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "../css/NoteNook.css";
import DashBoard from "./DashBoard";
import { Routes, Route } from "react-router-dom";
import Connections from "../components/Connections";
function NoteNook() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/forms/login");
    }
  });

  return (
    <div>
      <Header />
      <NavBar />
      <div className="noteNook">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        <Connections />
      </div>
    </div>
  );
}

export default NoteNook;
