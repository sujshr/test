import React from "react";
import { Link } from "react-router-dom";
function MyNote({ note }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="note">
      <Link to={`/${note._id}`}>
        <div className="noteInfo">
          <p className="subject">Subject: {note.subject}</p>
          <p className="title">Title: {note.title}</p>
        </div>
      </Link>
      <p className="postedBy">{note.user.username}</p>
      <p className="uploadDate">Updated At: {formatDate(note.updatedAt)}</p>
    </div>
  );
}

export default MyNote;
