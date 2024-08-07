import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const CommentList = (props) => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Comments
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.comments.map((comment) => {
          return (
            <>
              <ListItem alignItems="flex-start">
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
            </>
          );
        })}
      </List>
    </Box>
  );
};

export default CommentList;
