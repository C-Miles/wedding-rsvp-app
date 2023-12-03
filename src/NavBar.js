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

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
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
      <ListItem button onClick={() => navigate("/rsvp")}>
        <ListItemText primary="RSVP" />
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
      style={{ width: "100%", backgroundColor: "#565869" }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        {!isMobile && (
          <List component="nav" style={{ display: "flex" }}>
            <ListItem button onClick={() => navigate("/rsvp")}>
              <ListItemText primary="RSVP" />
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
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;