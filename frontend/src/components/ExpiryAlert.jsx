import React from "react";
import "./ExpiryAlert.css";

const ExpiryAlert = ({ data }) => {
  return (
    <div className="expiry-alert">
      <h3>Upcoming Expiry Alerts</h3>
      {data.length === 0 ? (
        <p>No upcoming expiries in the next 60 days.</p>
      ) : (
        <ul>
          {data.map((med) => (
            <li key={med.id}>
              <strong>{med.name}</strong> (ID: {med.id}) - Expires on {med.expiryDate} - Shelf: {med.shelf}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpiryAlert;
