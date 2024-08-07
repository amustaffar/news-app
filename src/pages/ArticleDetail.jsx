import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { apiClient } from "../../api";
import { useParams } from "react-router-dom";
import ArticleView from "../components/ArticleView";
import { Container } from "@mui/material";
import Loading from "../components/Loading";
import AxiosError from "../components/AxiosError";
import CommentList from "../components/CommentList";
import { useArticle } from "../hooks/useArticle";
import CommentForm from "../components/CommentForm";

const ArticleDetail = () => {
  const { article_id } = useParams();
  const { article, error, vote, comment } = useArticle(article_id);

  if (error) {
    return <AxiosError error={error} />;
  }

  return (
    <Box py={3}>
      <Container maxWidth="md">
        {article ? (
          <ArticleView article={article} onVote={vote} />
        ) : (
          <Loading />
        )}
        {article && <CommentList comments={article.comments} />}
        {article && <CommentForm onSubmit={comment} />}
      </Container>
    </Box>
  );
};

export default ArticleDetail;
