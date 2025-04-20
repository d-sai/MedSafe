import React from "react";
import "./Modal.css";

const MedicineDetails = ({ medicine, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>✖</button>
        <h3>Medicine Details</h3>

        <div className="details-grid">
          {Object.entries(medicine).map(([key, value]) => (
            <div key={key} className="detail-row">
              <strong>{formatLabel(key)}:</strong>
              <span>{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Optional: prettify field names
const formatLabel = (label) => {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default MedicineDetails;
