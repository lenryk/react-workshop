import React from "react";
import "./App.css";
import CommentSection from "./components/CommentSection/";
import comments  from "./comments.js";

function App() {
  return (
      <div className="container">
        <CommentSection comments={comments.comments} />
      </div>
  );
}

export default App;
