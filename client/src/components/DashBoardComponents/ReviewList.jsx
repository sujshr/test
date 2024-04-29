import React from "react";
import Note from "../Note";
function ReviewList() {
  const notes = [
    {
      noteId: "662b3f0c57eee9423b8c6e2e",
      title: "Graph theory",
      subject: "Discrete Mathematics",
      updatedOn: "2024-04-26T05:43:40.405Z",
      _id: "662b3f0c57eee9423b8c6e30",
    },
    {
      noteId: "662b3f2457eee9423b8c6e38",
      title: "Hack Assembler",
      subject: "BOCS",
      updatedOn: "2024-04-26T05:44:04.267Z",
      _id: "662b3f2457eee9423b8c6e3a",
    },
    {
      noteId: "662b3f4957eee9423b8c6e44",
      title: "Hack Compiler",
      subject: "BOCS",
      updatedOn: "2024-04-26T05:44:41.791Z",
      _id: "662b3f4a57eee9423b8c6e46",
    },
    {
      noteId: "662b3f5d57eee9423b8c6e52",
      title: "Jack Compiler",
      subject: "BOCS 2",
      updatedOn: "2024-04-26T05:45:01.589Z",
      _id: "662b3f5d57eee9423b8c6e54",
    },
    {
      noteId: "662b3f9557eee9423b8c6e77",
      title: "UseContext hook",
      subject: "FEWD - React",
      updatedOn: "2024-04-26T05:45:57.480Z",
      _id: "662b3f9557eee9423b8c6e79",
    },
    {
      noteId: "662b3fc257eee9423b8c6ea1",
      title: "useMemo Hook",
      subject: "FEWD - React",
      updatedOn: "2024-04-26T05:46:42.505Z",
      _id: "662b3fc257eee9423b8c6ea3",
    },
    {
      noteId: "662b3fe757eee9423b8c6eb5",
      title: "useContext hook",
      subject: "FEWD - React",
      updatedOn: "2024-04-26T05:47:19.334Z",
      _id: "662b3fe757eee9423b8c6eb7",
    },
    {
      noteId: "662f60f091d72dda1eb5fc87",
      title: "Time Module - python",
      subject: "PSUP",
      updatedOn: "2024-04-29T08:57:20.978Z",
      _id: "662f60f191d72dda1eb5fc89",
    },
  ];

  return (
    <div className="dashBoardComponent reviewList relative">
      <p className="placeHolder">Your Review List Appears here</p>
      <h1 className="heading">My review List</h1>
      <div className="notesDisplay">
        {notes.length !== 0 &&
          notes.map((note, i) => <Note note={note} key={i} />)}
      </div>
    </div>
  );
}

export default ReviewList;
