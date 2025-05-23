import { useContext, useState } from "react";
import { UserContext } from "../Contexts/User"
import "../Styles.css";

const UserCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  const handleLogin = () => {
    setLoggedInUser(user);
  };

  return (
    <div className="User-Card">
      <img src={user.avatar_url}></img>
      <h3>{user.username}</h3>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default UserCard;
