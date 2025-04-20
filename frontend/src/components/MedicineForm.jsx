import React, { useState, useEffect } from "react";
import "./Modal.css"; // optional if you want to split modal-specific styles

const MedicineForm = ({ mode, medicine, closeModal, onSuccess }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    brand: "",
    composition: "",
    type: "",
    category: "",
    dosage: "",
    constraints: "",
    expiryDate: "",
    manufactureDate: "",
    price: "",
    quantity: "",
    storageConditions: "",
    prescriptionRequired: false,
    totalSold: 0,
    shelf: ""
  });

  useEffect(() => {
    if (mode === "edit" && medicine) {
      setFormData({ ...medicine });
    }
  }, [mode, medicine]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = mode === "edit"
      ? `http://localhost:3000/medicines/${medicine.id}`
      : `http://localhost:3000/medicines`;

    const method = mode === "edit" ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      onSuccess();      // Refresh data in parent
      closeModal();     // Close modal
    } catch (err) {
      console.error("Error saving medicine:", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>✖</button>
        <h3>{mode === "edit" ? "Edit Medicine" : "Add New Medicine"}</h3>

        <form onSubmit={handleSubmit} className="medicine-form">
          <div className="form-grid">
            <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} required={mode === "add"} disabled={mode === "edit"} />
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} />
            <input name="composition" placeholder="Composition" value={formData.composition} onChange={handleChange} />
            <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
            <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
            <input name="dosage" placeholder="Dosage" value={formData.dosage} onChange={handleChange} />
            <input name="constraints" placeholder="Constraints" value={formData.constraints} onChange={handleChange} />
            <input name="expiryDate" type="date" value={formData.expiryDate} onChange={handleChange} required />
            <input name="manufactureDate" type="date" value={formData.manufactureDate} onChange={handleChange} required />
            <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} />
            <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
            <input name="totalSold" type="number" placeholder="Total Sold" value={formData.totalSold} onChange={handleChange} />
            <input name="shelf" placeholder="Shelf" value={formData.shelf} onChange={handleChange} />
            <input name="storageConditions" placeholder="Storage Conditions" value={formData.storageConditions} onChange={handleChange} />
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="prescriptionRequired"
                checked={formData.prescriptionRequired}
                onChange={handleChange}
              />
              Prescription Required
            </label>
          </div>

          <button type="submit" className="submit-btn">
            {mode === "edit" ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MedicineForm;
