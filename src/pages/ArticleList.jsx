import { useEffect, useState } from "react";
import { apiClient } from "../../api";
import { Box, Grid } from "@mui/material";
import ArticleCard from "../components/ArticleCard";

const ArticleList = (props) => {
  // [] extract into a custom hook
  // [] errors are not handled well - yet
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiClient.get("/api/articles").then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  return (
    <Box>
      <Box width="100%" height="50px" bgcolor="#ddd" mb={2}>
        Search bar to be placed here
      </Box>

      <Grid container spacing={2} p={2}>
        {articles.map((article) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ArticleCard article={article} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ArticleList;
