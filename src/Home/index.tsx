import { Box, Button, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import "../App.css";

export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "93vh" }}>
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
            <div className="circle w-96 h-96 bg-indigo-400 border-2 border-black">
              <img
                src="public/20190407_130822-removebg-preview.png"
                alt="Image not Found"
                className="object-cover h-full w-full"
              />
            </div>
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
                  ":hover": { backgroundColor: "#fff", color: "#4f46e5" },
                }}
              >
                Resume
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
