import { Box } from "@mui/material";
import ContactUs from "./Mail";
import Info from "./Info";

export default function Contact() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "95vh",
        display: { xs: "grid", sm: "flex" },
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        paddingY: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", lg: "35%" },
          height: "60vh",
          padding: { xs: "none", sm: 2, md: 8 },
          paddingX: { xs: "2px", sm: "none" },
          borderRadius: "5px",
          boxShadow: "-2px -4px 37px -2px rgba(0,0,0,0.75)",
        }}
      >
        <ContactUs />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "40%", lg: "23%" },
          height: "60vh",
          padding: { xs: "none", sm: 2, md: 8 },
          backgroundColor: "#4f46e5",
          borderRadius: "5px",
          paddingX: { xs: "2px", sm: "none" },
          marginLeft: { xs: "none", sm: "-10px", md: "-20px" },
          marginTop: { xs: "-40px", sm: "0px" },
          boxShadow: { xs: "none", sm: "-2px -4px 37px -4px rgba(0,0,0,0.75)" },
        }}
      >
        <Info />
      </Box>
    </Box>
  );
}
