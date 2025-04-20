import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./Chart.css";

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const CategoryPieChart = ({ data }) => {
  const categoryCount = {};

  data.forEach((med) => {
    categoryCount[med.category] = (categoryCount[med.category] || 0) + 1;
  });

  const chartData = Object.entries(categoryCount).map(([name, value]) => ({ name, value }));

  return (
    <div className="chart-box">
      <h3>Medicine Categories</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={chartData} label>
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;
