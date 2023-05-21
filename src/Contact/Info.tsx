import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Info() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="body1"
        color="inherit"
        component="div"
        textAlign="center"
        fontSize={30}
        fontWeight={600}
      >
        Contact Me
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          paddingY: 8,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="body1"
          color="inherit"
          component="div"
          fontSize={20}
        >
          <LocationOnIcon fontSize="medium" />
          Address: <br /> Shanti Vihar Colony Daganiya Raipur (C.G.)
        </Typography>
        <Typography
          variant="body1"
          color="inherit"
          component="div"
          fontSize={20}
        >
          <PhoneIcon fontSize="medium" /> Phone: 9294512259
        </Typography>
        <Typography
          variant="body1"
          color="inherit"
          component="div"
          fontSize={20}
        >
          <AlternateEmailIcon fontSize="medium" /> Email:
          shreyanshawadhiya@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
