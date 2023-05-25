import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Header = [
  {
    Name: "Degree Name",
    Type: "School / College / University",
    Date: "Passing Year",
    Institute: "Board / University",
    Per: "Percent",
  },
];
const BODY_Data = [
  {
    Name: "12",
    Type: "Bharat Mata Hr. Sec. School",
    Date: "2019",
    Institute: "Board",
    Per: "52%",
  },
  {
    Name: "B.C.A",
    Type: "Pragati College Chobey Colony",
    Date: "2022",
    Institute: "University",
    Per: "80%",
  },
];

export default function TableData() {
  return (
    <Paper sx={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          {Header.map((data: any, idk: any) => (
            <TableRow key={idk}>
              <TableCell
                sx={{
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 550,
                }}
              >
                {data.Name}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 550,
                }}
              >
                {data.Type}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 550,
                }}
              >
                {data.Date}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 550,
                }}
              >
                {data.Institute}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 550,
                }}
              >
                {data.Per}
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {BODY_Data.map((data: any, idk: any) => (
            <TableRow key={idk}>
              <TableCell>{data.Name}</TableCell>
              <TableCell>{data.Type}</TableCell>
              <TableCell>{data.Date}</TableCell>
              <TableCell>{data.Institute}</TableCell>
              <TableCell>{data.Per}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
