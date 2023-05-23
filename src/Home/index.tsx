import { Box, Button, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import "../App.css";
import { NavLink } from "react-router-dom";

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
          <div className="circle1 w-[50vh] h-[40vh] -mt-20 -mr-28 bg-blue-500"></div>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "inherit/2",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <div className="circle2 w-[50vh] h-[40vh] mt-[30vh] -ms-32 bg-blue-500"></div>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus dolorum illum nesciunt iste, vero perspiciatis?
              Asperiores facilis ratione nam dolor, hic doloremque. Repellat
              quod sit, vel pariatur recusandae labore fugit ea officiis dolorum
              nisi. Corporis aliquid fugiat aperiam soluta praesentium?
            </Typography>
            <Typography variant="body1" color="inherit" component="div">
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
                      "-28px 28px 19px #8370b6,28px -28px 19px #d5b6ff",
                  },
                }}
              >
                <NavLink to="/resume">Resume</NavLink>
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
