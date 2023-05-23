import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Project from "./Projects";
import Contact from "./Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ReactLoading from "react-loading";
import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

function Loader() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ReactLoading color={"#000"} height={"10%"} width={"8%"} />
      <Typography
        variant="body1"
        color="inherit"
        component="div"
        fontSize={20}
        fontWeight={550}
        marginTop={5}
      >
        <Typewriter
          options={{
            strings: ["Wait for a moment", "Let the Page Load"],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
    </Box>
  );
}
export default App;
