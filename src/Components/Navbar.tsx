import React from "react";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"

export default function Navbar() {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ boxShadow: "none" }} position="sticky" color="inherit">
                    <Toolbar>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: "none" } }}
                        >
                            <IconButton edge='start' onClick={() => { setOpen((open) => !open) }}>
                                <MenuIcon />
                            </IconButton>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: "end", display: { xs: 'none', sm: "block" } }}
                        >
                            <Button
                                color="inherit"
                                sx={{
                                    marginRight: 2,
                                    ":hover": { backgroundColor: "#4f46e5", color: "#fff" },
                                }}
                            >
                                <NavLink to="/resume" className="decoration-none font-semibold">
                                    Resume
                                </NavLink>
                            </Button>
                            <Button
                                color="inherit"
                                sx={{
                                    marginRight: 2,
                                    ":hover": { backgroundColor: "#4f46e5", color: "#fff" },
                                }}
                            >
                                <NavLink to="/project" className="decoration-none font-semibold">
                                    Projects
                                </NavLink>
                            </Button>
                            <Button
                                color="inherit"
                                sx={{
                                    marginRight: 2,
                                    ":hover": { backgroundColor: "#4f46e5", color: "#fff" },
                                }}
                            >
                                <NavLink to="/contact" className="decoration-none font-semibold">
                                    Contact
                                </NavLink>
                            </Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer anchor="top" open={open} onClose={() => { setOpen((open) => !open) }}>
                <Box sx={{ flexGrow: 1, width: '100%', height: '20rem' }}></Box>
            </Drawer>
        </>
    );
}
