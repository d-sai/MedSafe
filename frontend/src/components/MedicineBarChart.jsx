import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Chart.css";

const MedicineBarChart = ({ data }) => {
  const chartData = data.map((med) => ({
    name: med.name.length > 10 ? med.name.slice(0, 10) + "..." : med.name,
    quantity: med.quantity,
  }));

  return (
    <div className="chart-box">
      <h3>Stock Quantity by Medicine</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MedicineBarChart;
