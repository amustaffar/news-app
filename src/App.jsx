import ButtonAppBar from "./components/ButtonAppBar";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleList from "./pages/ArticleList";
import { Routes, Route, Navigate } from "react-router-dom";

/*
[ ] export planning screenshot from miro to the repo
[ ] loading page - on /articles or /
[ ] loading page - "load more" style button - limit at endpoints to 10
[x] remove any console.logs
[ ] destructure { comments } from props 
*/

function App() {
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Navigate to="articles" />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;
