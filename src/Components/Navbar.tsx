import React from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ boxShadow: "none" }} position="sticky" color="inherit">
          <Toolbar>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
            >
              <IconButton
                edge="start"
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "end",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Button
                color="inherit"
                sx={{
                  marginRight: 2,
                  ":hover": { backgroundColor: "#6366f1", color: "#fff" },
                }}
              >
                <NavLink
                  to="/resume"
                  className="decoration-none font-semibold text-center"
                >
                  <ArticleIcon /> Resume
                </NavLink>
              </Button>
              <Button
                color="inherit"
                sx={{
                  marginRight: 2,
                  ":hover": { backgroundColor: "#6366f1", color: "#fff" },
                }}
              >
                <NavLink
                  to="/project"
                  className="decoration-none font-semibold text-center"
                >
                  <AssignmentIcon /> Projects
                </NavLink>
              </Button>
              <Button
                color="inherit"
                sx={{
                  marginRight: 2,
                  ":hover": { backgroundColor: "#6366f1", color: "#fff" },
                }}
              >
                <NavLink
                  to="/contact"
                  className="decoration-none font-semibold text-center"
                >
                  <ContactPageIcon /> Contact
                </NavLink>
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="top"
        open={open}
        onClose={() => {
          setOpen((open) => !open);
        }}
      >
        <Box sx={{ flexGrow: 1, width: "100%", height: "15rem" }}>
          <List>
            <ListItem>
              <ListItemButton sx={{ textAlign: "center" }}>
                <NavLink
                  to="/resume"
                  className="text-md font-semibold w-full text-center"
                >
                  <ArticleIcon />
                  Resume
                </NavLink>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ textAlign: "center" }}>
                <NavLink
                  to="/project"
                  className="text-md font-semibold w-full text-center hover:text-indigo-400"
                >
                  <AssignmentIcon /> Projects
                </NavLink>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ textAlign: "center" }}>
                <NavLink
                  to="/contact"
                  className="text-md font-semibold w-full text-center hover:text-indigo-400"
                >
                  <ContactPageIcon />
                  Contact
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
