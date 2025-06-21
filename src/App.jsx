import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserContext } from "./Contexts/User";
import ArticleList from "./Components/Articles";
import ArticlePage from "./Components/ArticlePage";
import UserList from "./Components/Users";
import TopicsList from "./Components/Topics";
import TopicArticles from "./Components/TopicArticles";
import "./Styles.css";

function App() {
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = Object.keys(loggedInUser).length > 0;

  console.log("User Info", loggedInUser, isLoggedIn)

  if (error) return <p>Something went wrong...</p>;

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <div id="App">
        <header>
          <h1 className="Header-Text">Northcoders News</h1>
          <h3>Welcome {isLoggedIn ? loggedInUser.username : "guest user"}</h3>
          <nav id="Navbar">
            <Link to="/" className="Page-Link">
              Home
            </Link>
            <Link to="/users" className="Page-Link">
              Users
            </Link>
            <Link to="/topics" className="Page-Link">
              Topics
            </Link>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={<ArticleList error={error} setError={setError} isLoading={isLoading} setLoading={setLoading} />}
          ></Route>
          <Route
            path="/articles/:article_id"
            element={<ArticlePage error={error} setError={setError} isLoading={isLoading} setLoading={setLoading}/>}
          ></Route>
          <Route
            path="/users"
            element={<UserList error={error} setError={setError} isLoading={isLoading} setLoading={setLoading}/>}
          ></Route>
          <Route
            path="/topics"
            element={<TopicsList error={error} setError={setError} isLoading={isLoading} setLoading={setLoading}/>}
          ></Route>
          <Route
            path="/topics/:topic"
            element={<TopicArticles error={error} setError={setError} isLoading={isLoading} setLoading={setLoading}/>}
          ></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
