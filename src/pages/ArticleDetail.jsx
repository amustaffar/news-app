import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { apiClient } from "../../api";
import { useParams } from "react-router-dom";
import ArticleView from "../components/ArticleView";
import { Container } from "@mui/material";
import Loading from "../components/Loading";
import AxiosError from "../components/AxiosError";
import CommentList from "../components/CommentList";

const ArticleDetail = () => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    loadArticle(article_id)
      .then((res) => {
        setArticle(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  console.log(article);

  if (error) {
    return <AxiosError error={error} />;
  }

  return (
    <Box py={3}>
      <Container maxWidth="md">
        {article ? <ArticleView article={article} /> : <Loading />}
        {article && <CommentList comments={article.comments} />}
      </Container>
    </Box>
  );
};

const loadArticle = async (id) => {
  const { article } = await apiClient
    .get(`/api/articles/${id}`)
    .then((res) => res.data);

  const { comments } = await apiClient
    .get(`/api/articles/${id}/comments`)
    .then((res) => res.data);

  return {
    ...article,
    comments,
  };
};

export default ArticleDetail;
