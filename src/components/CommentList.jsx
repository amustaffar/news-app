import { Fragment } from "react";
import {
  IconButton,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../contexts/User";
import { apiClient } from "../../api";

const CommentList = (props) => {
  const { loggedInUser, setLoggedInUser } = useUser();

  function handleClick(id) {
    apiClient.delete(`/api/comments/${id}`).then(() => {
      // refresh the window upon deletion
      window.location.reload();
    });
  }

  return (
    <Box>
      <Typography variant="h4" mb={2}></Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.comments.map((comment) => {
          return (
            <Fragment key={comment.comment_id}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  loggedInUser?.username === comment.author && (
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={() => handleClick(comment.comment_id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <ListItemText
                  primary={
                    <Typography fontWeight="bold" mb={1}>
                      {comment.author}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                        display="block"
                        mb={1}
                      >
                        {comment.body}
                      </Typography>
                      <Typography
                        component="span"
                        variant="caption"
                        color="text.primary"
                        display="block"
                      >
                        Date: {comment.created_at.split("T")[0]}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default CommentList;
