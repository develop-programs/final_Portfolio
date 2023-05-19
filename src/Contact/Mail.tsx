import { Box, TextareaAutosize, TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function ContactUs() {
  return (
    <form className="grid gap-3">
      <TextField label="From" name="From" variant="filled" />
      <TextareaAutosize
        name="message"
        minRows={8}
        className="border-2 border-gray-300 rounded-md px-1"
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          value="Send"
          sx={{
            backgroundColor: "#4f46e5",
            border: "2px solid #4f46e5",
            color: "#fff",
            paddingX: 2,
            ":hover": { backgroundColor: "#fff", color: "#4f46e5" },
          }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
