import React, { useContext } from "react";
import logo from "../assets/logo.jpeg";
import pic from "../assets/pic.png";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Header() {
  return (
    <div className="absolute top-0 left-0 w-screen flex justify-between items-center py-4 pl-4 pr-8 h-20 md:h-28">
      <Link to="/">
        <img src={logo} alt="" className="logo h-16 md:h-20 " />
      </Link>
      <UserInfo />
    </div>
  );
}

function UserInfo() {
  const { user } = useContext(AuthContext);
  const style = {
    color: "#0099ff",
  };
  return (
    <div className="flex header gap-3 justify-between items-center">
      <Link to="/notenook/add">
        <AddCircleIcon className="headerIcon" style={style} fontSize="medium" />
      </Link>

      <EmojiEmotionsIcon
        className="headerIcon"
        style={style}
        fontSize="medium"
      />

      <Link
        to={"/notenook/profile"}
        className="flex gap-3 justify-between items-center"
      >
        <div className="w-0.5 h-5 bg-gray-400"></div>
        <img src={pic} alt="" className="h-8 md:h-10 w-auto" />
        <p className="text-sm md:text-base">{user.user.username}</p>
      </Link>
    </div>
  );
}

export default Header;
