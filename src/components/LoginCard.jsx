import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const LoginCard = (props) => {
  return (
    <Card align="center">
      <CardMedia
        sx={{ height: 200, backgroundSize: "contain" }}
        image={props.user.avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Username: {props.user.username}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Name: {props.user.name}
        </Typography>
        <Button onClick={props.onClick} variant="contained">
          Login
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
