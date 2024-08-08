import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const INITIAL_STATE = { author: "", body: "" };

/*
TO DOs:
[ ] form validation
[ ] better error handling - user not submitting the same comment upon BE latency
[ ] react context - user - must be logged in 
*/

const CommentForm = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(state);
    // to reset form
    setState(INITIAL_STATE);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}
    >
      <Typography variant="h5" mb={2}>
        Leave your comment (only for registered users)
      </Typography>
      <TextField
        onChange={(e) => setState({ ...state, author: e.target.value })}
        value={state.author}
        label="Your username"
        fullWidth
        required
      />
      <TextField
        onChange={(e) => setState({ ...state, body: e.target.value })}
        value={state.body}
        label="Write your comment here"
        margin="normal"
        multiline
        fullWidth
        required
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default CommentForm;
