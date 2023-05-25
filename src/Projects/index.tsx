import { Box } from "@mui/material";
import "./project.css";

export default function Project() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "93vh",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -10,
          display: "grid",
          marginLeft: { xs: "none", md: 55 },
        }}
      >
        <div className="Circle-project bg-indigo-300 min-[320px]:w-full min-[320px]:h-full min-[1024px]:w-[50%]"></div>
      </Box>
      N/A
    </Box>
  );
}
