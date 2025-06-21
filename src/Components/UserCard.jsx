import { useContext, useState } from "react";
import { UserContext } from "../Contexts/User"
import "../Styles.css";

const UserCard = ({ user }) => {
  const { setLoggedInUser, loggedInUser, isLoggedIn } = useContext(UserContext);

  const handleLogin = () => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser({});
  };

  if (loggedInUser.username !== user.username && isLoggedIn === true) {
    return (
    <div className="User-Card">
      <img src={user.avatar_url}></img>
      <h3>{user.username}</h3>
    </div>
  );
  }

  return (
    <div className="User-Card">
      <img src={user.avatar_url}></img>
      <h3>{user.username}</h3>
      {loggedInUser.username === user.username ? <button onClick={handleLogout}>Log Out</button> : <button onClick={handleLogin}>Log In</button>}
    </div>
  );
};

export default UserCard;
