import React from "react";
import "./StatsCard.css";

const StatsCard = ({ label, value }) => {
  return (
    <div className="stats-card">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
};

export default StatsCard;
