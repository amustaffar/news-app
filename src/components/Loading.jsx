import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      py={5}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
