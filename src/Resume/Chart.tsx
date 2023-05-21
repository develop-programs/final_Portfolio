import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "C",
    "C++",
    "Java",
    "Html",
    "Css",
    "Js",
    "React",
    "Next Js",
    "TypeScript",
    "aws",
  ],
  datasets: [
    {
      label: "Knowledge in range of 50",
      data: [25, 30, 45, 40, 32, 28, 30, 36, 29, 15],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return <PolarArea data={data} />;
}
