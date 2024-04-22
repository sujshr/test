import React, { useContext, useState } from "react";
import "../css/AddNotes.css";
import { Routes, Route, Link } from "react-router-dom";
import MyNoteList from "../components/MyNoteList";
import NewNoteForm from "../components/NewNoteForm";
import WriteNote from "../components/WriteNote";
import { DeviceWidthContext } from "../context/deviceWidthContext";
function AddNotes() {
  return (
    <div className="addNotesPage relative">
      <div className="addNotes">
        <Routes>
          <Route path="/" element={<MyNotes />}></Route>
          <Route path="/writeNote/:id" element={<WriteNote />}></Route>
        </Routes>
      </div>
    </div>
  );
}

function MyNotes() {
  const [postNewNote, setPostNewNote] = useState(false);
  const width = useContext(DeviceWidthContext);
  const handleClick = () => {
    setPostNewNote(!postNewNote);
  };
  return (
    <>
      {postNewNote && <NewNoteForm handleClick={handleClick} />}
      <MyNoteList handleClick={handleClick} />

      {width < 1024 && (
        <div className="w-full flex justify-between items-center flex-col">
          <p className="mb-4">Wanna add a note?</p>
          <Link to={"newNote"}>
            <button className="button">Upload a new note</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default AddNotes;
