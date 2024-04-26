import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../css/Search.css";
import MyNotes from "../components/DashBoardComponents/MyNotes";
import SearchResult from "../components/SearchResult";

const placeHolderData = [
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e2e" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36b" },
      username: "sujshr",
    },
    title: "Graph theory",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e2f" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36c" },
      username: "mathlover",
    },
    title: "Applications of Graph Theory in Computer Science",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
  {
    _id: { $oid: "662b3f0c57eee9423b8c6e30" },
    postedBy: {
      userId: { $oid: "66234f367a55aaf8a396a36d" },
      username: "graphguru",
    },
    title: "Introduction to Graph Algorithms",
    subject: "Discrete Mathematics",
    createdAt: "2024-04-26T05:43:40.405+00:00",
    updatedAt: "2024-04-26T05:43:40.405+00:00",
    document: {},
  },
];

function SearchNotes() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="searchNotesPage">
      <div className="searchNote">
        <div className="searchBarContainer">
          <input className="searchBar" type="search" name="" id="" />
          <div className="searchIconContainer">
            <SearchIcon
              className="searchIcon"
              fontSize="large"
              style={{
                color: "#0099ff",
              }}
            />
          </div>
        </div>

        <div className="searchNotesResultContainer">
          {placeHolderData &&
            placeHolderData.map((result) => {
              return <SearchResult result={result} />;
            })}
        </div>
      </div>

      <MyNotes />
    </div>
  );
}

export default SearchNotes;
