import { useEffect, useState } from "react";
import { apiClient } from "../../api";
import { Box, Container, Grid } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";

const ArticleList = (props) => {
  // [] extract into a custom hook
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get("/api/articles")
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (articles === null) {
    return <Loading />;
  }

  return (
    <Box>
      <Box width="100%" height="50px" bgcolor="#ddd" mb={2}>
        Search bar to be placed here
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={2} p={2}>
          {articles.map((article) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ArticleCard article={article} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ArticleList;
