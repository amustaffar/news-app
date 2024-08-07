import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const ArticleView = (props) => {
  return (
    <Box mb={2}>
      <h1>{props.article.title}</h1>
      <h3>Author: {props.article.author}</h3>
      <h4>Date: {props.article.created_at.split("T")[0]}</h4>
      <img src={props.article.article_img_url} style={{ width: "100%" }} />
      <p>{props.article.body}</p>
      <Button variant="contained" onClick={props.onVote}>
        Vote this article
      </Button>
      <h4>Vote count: {props.article.votes}</h4>
    </Box>
  );
};

export default ArticleView;
