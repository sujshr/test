import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import EventNoteIcon from "@mui/icons-material/EventNote";

function Stats() {
  return (
    <div className="stats dashBoardComponent">
      <h1 className="heading">Stats</h1>
      <div className="flex gap-10">
        <div className="statDiv">
          <p>No. of Connections</p>

          <div>
            <div className="iconDiv connectionsStat">
              <PeopleIcon style={{ color: "white" }} fontSize="small"/>
            </div>

            <span className="statNumber">00</span>
          </div>
        </div>
        <div className="statDiv">
          <p>No. of Notes Posted</p>

          <div>
            <div className="iconDiv notesStat">
              <EventNoteIcon style={{ color: "white" }} fontSize="small" />
            </div>
            <span className="statNumber">00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
