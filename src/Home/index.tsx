import { Box, Button, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import "../App.css";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "110vh", sm: "93vh" },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -10,
          display: { xs: "none", sm: "grid" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "inherit/2",
            justifyContent: "end",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <div className="circle1 w-[50vh] h-[40vh] -mt-20 -mr-28"></div>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "inherit/2",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <div className="circle2 w-[50vh] h-[40vh] mt-[30vh] -ms-32"></div>
        </Box>
      </Box>
      <Grid container className="h-full">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "grid",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              height: "30rem",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              className="circle bg-indigo-600"
              sx={{
                width: { xs: "100%", sm: "90%" },
                height: { xs: "45vh", sm: "90%", objectFit: "cover" },
                marginLeft: { xs: "none", sm: "4rem" },
              }}
            >
              <img
                src="/20190407_130822-removebg-preview.png"
                alt="Not Found"
              />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "grid",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              sx={{ fontSize: 40, fontWeight: 600 }}
            >
              I am
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Web Designer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              sx={{ marginRight: { xs: "none", lg: 40 } }}
            >
              I am Shreyansh Awadhiya from Raipur Chhattisgarh. I wish to be a
              Full Stack Developer but currently working as a freelance past 6
              months .I hope to create best websites that no one can make and to
              be best at my field. I would like to increase my Knowlege while
              working with you. Hope you reach out to me soon
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              sx={{
                display: {
                  xs: "grid",
                  sm: "flex",
                },
              }}
            >
              <Button
                color="inherit"
                sx={{
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  border: "2px solid #4f46e5",
                  fontWeight: 550,
                  paddingX: 2,
                  ":hover": {
                    backgroundColor: "#fff",
                    color: "#4f46e5",
                    boxShadow:
                      "-16px 16px 19px #8370b6,16px -16px 19px #d5b6ff",
                  },
                }}
              >
                <NavLink to="/resume">Resume</NavLink>
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: {
                    xs: 0,
                    sm: 10,
                  },
                  gap: 2,
                }}
              >
                <a
                  href="https://github.com/develop-programs"
                  className="hover:text-indigo-500"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://instagram.com/the.gamer.rock?igshid=MzNlNGNkZWQ4Mg=="
                  className="hover:text-indigo-500"
                >
                  <InstagramIcon fontSize="large" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreyansh-awadhiya-7107a0240"
                  className="hover:text-indigo-500"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
