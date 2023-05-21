import { Box } from "@mui/material";
import ContactUs from "./Mail";
import Info from "./Info";

export default function Contact() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "93vh",
        display: { xs: "grid", sm: "flex" },
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", lg: "35%" },
          height: "60vh",
          padding: { xs: "none", sm: 2, md: 8 },
          borderRadius: "5px",
          boxShadow: "-2px -4px 37px -2px rgba(0,0,0,0.75)",
        }}
      >
        <ContactUs />
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", sm: "50%", md: "40%", lg: "23%" },
          height: "60vh",
          padding: { xs: "none", sm: 2, md: 8 },
          backgroundColor: "#4f46e5",
          borderRadius: "5px",
          marginLeft: { xs: "none", sm: "-10px", md: "-20px" },
          boxShadow: { xs: "none", sm: "-2px -4px 37px -4px rgba(0,0,0,0.75)" },
        }}
      >
        <Info />
      </Box>
    </Box>
  );
}
