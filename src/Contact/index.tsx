import { Box, Grid } from "@mui/material";
import ContactUs from "./Mail";
import Info from "./Info";
import "./Contact.css";

export default function Contact() {
  return (
    <Box
      sx={{
        position: "relative",
        flexGrow: 1,
        width: "100%",
        height: "95vh",
        display: { xs: "grid", sm: "flex" },
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingY: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -10,
          display: "grid",
          marginLeft: { xs: "none", md: 100 },
        }}
      >
        <div className="Circle-resume bg-indigo-400 min-[320px]:w-full min-[320px]:h-full min-[1024px]:w-[50%]"></div>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", lg: "55%" },
          height: { xs: "100%", sm: "50%", lg: "60vh" },
          background: "transparent",
          padding: { xs: "none", sm: 2, md: 8 },
          paddingX: { xs: "4px", sm: "none" },
          borderRadius: "5px",
          boxShadow: "-2px -4px 37px -2px rgba(0,0,0,0.75)",
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <ContactUs />
          </Grid>
          <Grid item xs={12} sm={6} padding={6}>
            <Info />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
