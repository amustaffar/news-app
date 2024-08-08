import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia sx={{ height: 200 }} image={props.article.article_img_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/articles/${props.article.article_id}`}>
            {props.article.title}
          </Link>
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Author: {props.article.author}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Date created: {props.article.created_at.split("T")[0]}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Topic: {props.article.topic}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
