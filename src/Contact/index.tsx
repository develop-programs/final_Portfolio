import { Box } from "@mui/material";
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
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -10,
          display: "grid",
          marginLeft: { xs: "none", md: 30, lg: 50 },
        }}
      >
        <div className="Circle-resume bg-indigo-400 min-[320px]:w-full min-[320px]:h-full min-[1024px]:w-[50%]"></div>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 10,
          display: "flex",
          justifyContent: { xs: "none", sm: "center" },
          alignItems: { xs: "none", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80vw", md: "45vw", lg: "35vw" },
            height: { xs: "100%", sm: "60vh" },
            padding: { xs: 2, sm: 5 },
            borderRight: "none",
            boxShadow: " -17px -1px 19px 10px rgba(117,117,117,1)",
          }}
        >
          <ContactUs />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "80vw", md: "35vw", lg: "25vw" },
            height: { xs: "100%", sm: "60vh" },
            padding: { xs: 2, sm: 5 },
            borderLeft: "none",
            boxShadow: "17px -1px 19px 10px rgba(117,117,117,1)",
          }}
        >
          <Info />
        </Box>
      </Box>
    </Box>
  );
}
