import React from "react";
import blogData from "../data/blog";
import Header from "./src/components/Header";
import About from "./src/components/About";
import ArticleList from "./src/components/ArticleList";

console.log(blogData);

function App() {
  return (
  <div className="App">

    <Header title={blogData.name}/>
    <ArticleList articles={blogData.posts}/>
    <About about={blogData.about} image={blogData.image}/>

  </div>
  );
}

export default App;