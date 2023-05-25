import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TableData from "./Details";
import Chart from "./Chart";
import { Box, Tooltip } from "@mui/material";
import Download from "./Download";
import Experience from "./Experience";
import "./resume.css";

// eslint-disable-next-line react-refresh/only-export-components
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

// eslint-disable-next-line react-refresh/only-export-components
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

// eslint-disable-next-line react-refresh/only-export-components
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function resume() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Download />
      <Box
        sx={{
          position: "relative",
          flexGrow: 1,
          width: "100%",
          height: "95vh",
          paddingX: { xs: 1, sm: 2, md: 10 },
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
            marginLeft: { xs: "none", md: 50 },
          }}
        >
          <div className="Circle-resume bg-indigo-300 min-[320px]:w-full min-[320px]:h-full min-[1024px]:w-[50%]"></div>
        </Box>
        <Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              background: "transparent",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Education</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableData />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              background: "transparent",
            }}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Experience />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              background: "transparent",
              fontWeight: 600,
            }}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  overflow: "hidden",
                  overflowX: "auto",
                  paddingY: 2,
                  gap: 2,
                }}
              >
                <Typography
                  variant="body1"
                  color="inherit"
                  component="div"
                  display="flex"
                  fontSize={25}
                >
                  Tech :{" "}
                </Typography>
                <Tooltip title="C Language">
                  <img src="/c.png" alt="Image not Availble" className="w-10" />
                </Tooltip>
                <Tooltip title="C++">
                  <img
                    src="/C++.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="Java">
                  <img
                    src="/java.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="Html">
                  <img
                    src="/html5.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="CSS">
                  <img
                    src="/css-3.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="JavaScript">
                  <img
                    src="/js.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="ReactJs">
                  <img
                    src="/react.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="NextJs">
                  <img
                    src="/nextjs.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="TypeScript">
                  <img
                    src="/ts.png"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
                <Tooltip title="Amazon Web service">
                  <img
                    src="/aws.jpeg"
                    alt="Image not Availble"
                    className="w-10"
                  />
                </Tooltip>
              </Box>
              <Box
                sx={{
                  height: "38vh",
                  display: "grid",
                  justifyContent: "center",
                }}
              >
                <Chart />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
}
