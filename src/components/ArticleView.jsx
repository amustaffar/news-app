import Box from "@mui/material/Box";

const ArticleView = (props) => {
  return (
    <Box>
      <h1>{props.article.title}</h1>
      <h3>Author: {props.article.author}</h3>
      <h4>Date: {props.article.created_at.split("T")[0]}</h4>
      <img src={props.article.article_img_url} style={{ width: "100%" }} />
      <p>{props.article.body}</p>
    </Box>
  );
};

export default ArticleView;
