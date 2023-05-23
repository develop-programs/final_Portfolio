import { Box, Typography, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function Download() {
  const FileDownload = () => {
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <Box sx={{ flexGrow: 1, height: "3rem", textAlign: "end", marginRight: 5 }}>
      <Typography variant="body1" color="inherit">
        <Button
          color="inherit"
          onClick={FileDownload}
          sx={{
            ":hover": {
              fontWeight: 600
            },
          }}
        >
          <FileDownloadIcon /> Download
        </Button>
      </Typography>
    </Box>
  );
}
