import ButtonAppBar from "./components/ButtonAppBar";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleList from "./pages/ArticleList";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginList from "./pages/LoginList";
import { useState } from "react";
import { UserProvider } from "./contexts/User";

/*
[x] export planning screenshots from miro to the repo
[ ] loading page - "load more" style button - limit at BE endpoints to 10
[x] remove any console.logs
[ ] destructure { comments } from props 
*/

function App() {
  return (
    <UserProvider>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Navigate to="articles" />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleDetail />} />
        <Route path="/topics/:topic/articles" element={<ArticleList />} />
        <Route path="/login" element={<LoginList />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
