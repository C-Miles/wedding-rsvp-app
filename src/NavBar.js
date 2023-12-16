import React, { useContext, useState } from "react";
import NavigationContext from "./NavigationContext";

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const { navigate } = useContext(NavigationContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      <ListItem button onClick={() => navigate("/")}>
        <ListItemText primary="HOME" />
      </ListItem>
      <ListItem button onClick={() => navigate("/rsvp")}>
        <ListItemText primary="RSVP" />
      </ListItem>
      <ListItem button onClick={() => navigate("/faq")}>
        <ListItemText primary="FAQ" />
      </ListItem>
      <ListItem button onClick={() => navigate("/location")}>
        <ListItemText primary="LOCATION" />
      </ListItem>
      <ListItem button onClick={() => navigate("/travel")}>
        <ListItemText primary="TRAVEL" />
      </ListItem>
      <ListItem button onClick={() => navigate("/parking")}>
        <ListItemText primary="PARKING" />
      </ListItem>
    </List>
  );

  return (
    <AppBar
      position="sticky"
      style={{ width: "100%", backgroundColor: "#2d2d2d" }}
    >
      <Toolbar>
        {isMobile && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              style={{ marginLeft: "15px" }}
            >
              MENU
            </Typography>
          </>
        )}
        {!isMobile && (
          <List component="nav" style={{ display: "flex" }}>
            <ListItem button onClick={() => navigate("/")}>
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button onClick={() => navigate("/rsvp")}>
              <ListItemText primary="RSVP" />
            </ListItem>
            <ListItem button onClick={() => navigate("/faq")}>
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button onClick={() => navigate("/location")}>
              <ListItemText primary="LOCATION" />
            </ListItem>
            <ListItem button onClick={() => navigate("/travel")}>
              <ListItemText primary="TRAVEL" />
            </ListItem>
            <ListItem button onClick={() => navigate("/parking")}>
              <ListItemText primary="PARKING" />
            </ListItem>
          </List>
        )}
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#f5f0e5" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
