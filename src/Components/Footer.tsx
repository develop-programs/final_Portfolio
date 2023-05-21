import { Box, Divider, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, top: "100%", bottom: 0, height: "5rem" }}>
      <Divider />
      <Grid container padding={2}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            color="inherit"
            component="div"
            sx={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: { xs: "center", sm: "none" },
              paddingY: { xs: "10px", sm: "none" },
            }}
          >
            I Will <br /> Appriciate If You Contact Me
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            paddingY: { xs: "10px", sm: "none" },
          }}
        >
          <NavLink to="/" className="font-bold hover:text-indigo-600">
            Home
          </NavLink>
          <NavLink to="/resume" className="font-bold hover:text-indigo-600">
            Resume
          </NavLink>
          <NavLink to="/project" className="font-bold hover:text-indigo-600">
            Projects
          </NavLink>
          <NavLink to="/contact" className="font-bold hover:text-indigo-600">
            Contact
          </NavLink>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            color="inherit"
            component="div"
            sx={{ fontSize: 25, fontWeight: "bold" }}
          >
            Follow Me On
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <div className="border-2 border-black rounded-2xl p-[2px] flex justify-center items-center hover:border-indigo-500 hover:text-indigo-500">
              <NavLink to="https://github.com/develop-programs">
                <GitHubIcon />
              </NavLink>
            </div>
            <div className="border-2 border-black rounded-2xl p-[2px] flex justify-center items-center hover:border-indigo-500 hover:text-indigo-500">
              <NavLink to="https://instagram.com/the.gamer.rock?igshid=MzNlNGNkZWQ4Mg==">
                <InstagramIcon />
              </NavLink>
            </div>
            <div className="border-2 border-black rounded-2xl p-[2px] flex justify-center items-center hover:border-indigo-500 hover:text-indigo-500">
              <NavLink to="https://www.linkedin.com/in/shreyansh-awadhiya-7107a0240">
                <LinkedInIcon />
              </NavLink>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
