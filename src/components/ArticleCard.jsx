import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ArticleCard = (props) => {
  return (
    <Card>
      <CardMedia sx={{ height: 200 }} image={props.article.article_img_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.article.title}
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
