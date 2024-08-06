import ButtonAppBar from "./components/ButtonAppBar";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleList from "./pages/ArticleList";
import { Routes, Route, Navigate } from "react-router-dom";

/*
steps:
[ ] Router needs setting up
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
