import * as React from "react";
import { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/User";
import { apiClient } from "../../api";
import { MenuItem } from "@mui/material";

export default function ButtonAppBar() {
  const { loggedInUser, setLoggedInUser } = useUser();
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get("/api/topics")
      .then((res) => {
        setTopics(res.data.topics);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const ref = useRef();

  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (e) => {
  //   setAnchorElNav(e.currentTarget);
  // };
  // const handleOpenUserMenu = (e) => {
  //   setAnchorElUser(e.currentTarget);
  // };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setOpen(true)}
            sx={{ mr: 2 }}
            ref={ref}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={ref.current}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <Typography textAlign="center" m={1}>
              TOPICS
            </Typography>
            <Divider />
            {topics.map((topic) => {
              return (
                <MenuItem
                  component={Link}
                  to={`/topics/${topic.slug}/articles`}
                  onClick={() => setOpen(false)}
                  key={topic.slug}
                >
                  <Typography textAlign="center">
                    {topic.description}
                  </Typography>
                </MenuItem>
              );
            })}
          </Menu>
          <Typography
            color="inherit"
            variant="h6"
            sx={{ flexGrow: 1 }}
            component={Link}
            to="/"
          >
            News
          </Typography>
          {loggedInUser ? (
            <>
              <Typography variant="caption">
                Welcome {loggedInUser.name}
              </Typography>
              <Button color="inherit" onClick={() => setLoggedInUser(null)}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
