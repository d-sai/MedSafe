import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import StatsCard from "../components/StatsCard";
import ExpiryAlert from "../components/ExpiryAlert";
import MedicineBarChart from "../components/MedicineBarChart";
import CategoryPieChart from "../components/CategoryPieChart";

const Dashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/medicines", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setMedicines(data);
      } catch (error) {
        console.error("Failed to fetch medicines:", error);
      }
    };

    fetchMedicines();
  }, [token]);

  const totalMedicines = medicines.length;
  const totalQuantity = medicines.reduce((sum, med) => sum + med.quantity, 0);

  const upcomingExpiry = medicines.filter((med) => {
    const today = new Date();
    const expiry = new Date(med.expiryDate);
    const timeDiff = (expiry - today) / (1000 * 3600 * 24);
    return timeDiff >= 0 && timeDiff <= 60;
  });

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Inventory Dashboard</h2>

      <div className="stats-grid">
        <Link to="/meds">
          <StatsCard label="Total Medicines" value={totalMedicines} />
        </Link>
        <StatsCard label="Total Stock Quantity" value={totalQuantity} />
        <StatsCard label="Upcoming Expiries (60 Days)" value={upcomingExpiry.length} />
      </div>

      <div className="charts-section">
        <MedicineBarChart data={medicines} />
        <CategoryPieChart data={medicines} />
      </div>

      <ExpiryAlert data={upcomingExpiry} />
    </div>
  );
};

export default Dashboard;
