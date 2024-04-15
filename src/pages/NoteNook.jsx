import "../css/NoteNook.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import DashBoard from "./DashBoard";
import { Routes, Route } from "react-router-dom";
import Connections from "../components/Connections";
function NoteNook() {
  return (
    <div className="noteNookApp fixed top-0 left-0 w-screen h-screen overflow-y-scroll">
      <NavBar />
      <Header />
      <div className="noteNook">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
        <Connections />
      </div>
    </div>
  );
}

export default NoteNook;
