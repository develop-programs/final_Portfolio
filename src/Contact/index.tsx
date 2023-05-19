import { Box, Grid } from "@mui/material";
import ContactUs from "./Mail";

export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", height: "93vh" }}>
      <Grid container className="h-full">
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: 20,
              paddingX: { xs: "none", sm: 2, md: 15 },
            }}
          >
            <ContactUs />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
