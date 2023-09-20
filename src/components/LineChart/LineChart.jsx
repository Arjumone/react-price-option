import { Tooltip } from "bootstrap";
import { Bar, BarChart, CartesianGrid, LineChart as LChart, Legend, Line, Pie, PieChart, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const mathMarks = [
    { id: 1, name: "Student 1", math_mark: 85 },
    { id: 2, name: "Student 2", math_mark: 78 },
    { id: 3, name: "Student 3", math_mark: 92 },
    { id: 4, name: "Student 4", math_mark: 88 },
    { id: 5, name: "Student 5", math_mark: 76 },
    { id: 6, name: "Student 6", math_mark: 95 },
    { id: 7, name: "Student 7", math_mark: 89 },
  ];

  return (
    <div>
      <LChart width={900} height={500} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey=""></YAxis>
        <Line dataKey="math_mark" type="monotone" stroke="#8884d8"></Line>
      </LChart>
      <PieChart width={730} height={250}>
  <Pie dataKey="math-mark" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie dataKey="math-mark" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
<BarChart width={730} height={250} data={mathMarks}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="math-mark" fill="#8884d8" />
  <Bar dataKey="math-mark" fill="#82ca9d" />
</BarChart>
    </div>
  );
};

export default LineChart;
