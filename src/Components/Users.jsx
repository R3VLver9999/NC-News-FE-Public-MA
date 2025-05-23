import { useState, useEffect } from "react";
import { getUsers } from "../api.js";
import UserCard from "./UserCard.jsx";
import "../Styles.css";

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    props.setLoading(true);
    getUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        props.setError(true);
      })
      .finally(() => {
        props.setLoading(false);
      });
  }, []);

  if (props.isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h3 className="Header-Text">Users</h3>
        <ul className="User-List">
          {users.map((user) => (
            <UserCard key={user.username} user={user} />
          ))}
        </ul>
      </div>
    );
  }
};

export default UserList;
