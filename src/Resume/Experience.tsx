import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ flexGrow: 1, fontSize: 20 }}
        >
          Intern
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ flexGrow: 1, textAlign: "end", fontSize: 14 }}
        >
          (2 month) From jan2023 - mar2023
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography
          variant="body1"
          color="inherit"
          component="div"
          fontSize={20}
          fontWeight={600}
        >
          LoanStory .pvt .Ltd
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Front End Developer" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Graphic Designer" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
