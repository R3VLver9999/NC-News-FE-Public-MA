import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ArticleList from "./Components/Articles";
import ArticlePage from "./Components/ArticlePage";
import "./Styles.css";

function App() {
  const [error, setError] = useState(false);
  if (error) return <p>Something went wrong...</p>;
  return (
    <div id="App">
      <header>
        <h1 className="Header-Text">Northcoders News</h1>
        <nav id="Navbar">
          <Link to="/" className="Page-Link">
            Home
          </Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<ArticleList error={error} setError={setError} />}
        ></Route>
        <Route
          path="/articles/:article_id"
          element={<ArticlePage error={error} setError={setError} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
