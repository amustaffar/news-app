import { Box, Typography } from "@mui/material";

const AxiosError = (props) => {
  console.log(props.error);
  if (props.error.response.status === 404) {
    return (
      <Box p={3}>
        <Typography color="red" textAlign="center">
          Not Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography color="red" textAlign="center">
        Sorry, you're not a registered user!
      </Typography>
    </Box>
  );
};

export default AxiosError;
