"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavigationPanel = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="primary" className="mb-8">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FlexiGym
          </Typography>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!isMobile && (
            <div sx={{ display: { xs: "none", sm: "flex" } }}>
              <Link href="/" passHref>
                <Button color="inherit">Home</Button>
              </Link>
              <Link href="/faq" passHref>
                <Button color="inherit">FAQ</Button>
              </Link>
              <Link href="/contact" passHref>
                <Button color="inherit">Contact us</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link href="/" passHref>
                <Button color="inherit">Home</Button>
              </Link>
            </ListItem>
            <Divider />
            <ListItem button onClick={toggleDrawer(false)}>
              <Link href="/faq" passHref>
                <Button color="inherit">FAQ</Button>
              </Link>
            </ListItem>
            <Divider />
            <ListItem button onClick={toggleDrawer(false)}>
              <Link href="/contact" passHref>
                <Button color="inherit">Contact us</Button>
              </Link>
            </ListItem>
          </List>
        </Drawer>
      )}
    </React.Fragment>
  );
};

export default NavigationPanel;
