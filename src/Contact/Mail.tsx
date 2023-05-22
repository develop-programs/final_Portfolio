import { useForm } from "@formspree/react";
import { Box, TextareaAutosize, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xgebbwbr");
  if (state.succeeded) {
    return (
      <div className="text-2xl">
        <p className="font-semibold">Mail Sent</p>
        <p>Reload Page to sent next mail </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <Typography
        variant="body1"
        color="inherit"
        component="div"
        sx={{ fontSize: 30, fontWeight: "bold" }}
      >
        Mail Me
      </Typography>
      <TextField
        label="From"
        name="From"
        variant="filled"
        className="bg-white rounded-sm"
      />
      <TextField
        label="Number"
        name="Number"
        variant="filled"
        className="bg-white rounded-sm"
      />
      <TextareaAutosize
        name="message"
        minRows={8}
        className="border-2 border-gray-300 rounded-sm p-1"
        placeholder="Message"
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
          disabled={state.submitting}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
