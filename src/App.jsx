import { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import ArticleList from "./Components/Articles";
import './Styles.css';

function App() {
  const [error, setError] = useState(false);
  if (error) return <p>Something went wrong...</p>;
  return (
    <div id="App">
      <h1 className="Header">Northcoders News</h1>
      <ArticleList error={error} setError={setError} />
    </div>
  );
}

export default App;
