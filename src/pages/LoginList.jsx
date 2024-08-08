import { Box, Grid, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { apiClient } from "../../api";
import LoginCard from "../components/LoginCard";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/User";

const LoginList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { setLoggedInUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/api/users")
      .then((res) => {
        setUsers([...res.data.users]);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const login = (user) => {
    setLoggedInUser(user);
    navigate("/");
  };

  if (users === null) {
    return <Loading />;
  }

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={2} p={2}>
          {users.map((user) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <LoginCard onClick={() => login(user)} user={user} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginList;
