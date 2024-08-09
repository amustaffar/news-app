import { useContext, useEffect, useState } from "react";
import { apiClient } from "../../api";
import { Box, Container, Grid } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { useUser } from "../contexts/User";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";

// GET /articles ({ })
// GET /topics/:id/articles ({ topic: 'id' })

const ArticleList = (props) => {
  // [] extract into a custom hook
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { loggedInUser } = useUser();
  const { topic } = useParams();

  useEffect(() => {
    let url = `/api/articles?page=${page}`;
    if (topic) {
      url = `${url}&topic=${topic}`;
    }

    apiClient
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page, topic]);

  if (response === null) {
    return <Loading />;
  }

  const totalPages = Math.ceil(response.total / 10);

  return (
    <Box>
      <Box width="100%" height="50px" bgcolor="#ddd" mb={2}>
        <p>Search Bar</p>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={2} p={2}>
          {response.articles.map((article) => {
            return (
              <Grid key={article.article_id} item xs={12} sm={6} md={4} lg={3}>
                <ArticleCard article={article} />
              </Grid>
            );
          })}
        </Grid>

        <Box display="flex" justifyContent="center" p={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, v) => setPage(v)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleList;
