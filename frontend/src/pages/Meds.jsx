import React, { useEffect, useState } from "react";
import "./Meds.css";
import { FaSearch, FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import MedicineForm from "../components/MedicineForm";
import MedicineDetails from "../components/MedicineDetails";

const Meds = () => {
  const [medicines, setMedicines] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalType, setModalType] = useState(""); // 'add' | 'edit' | 'details'
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 5;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:5000/api/medicines", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Failed to fetch medicines", err));
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setCurrentPage(1);
    setFiltered(
      medicines.filter(
        (med) =>
          med.name.toLowerCase().includes(term) ||
          med.id.toLowerCase().includes(term)
      )
    );
  };

  const handleSort = () => {
    const sorted = [...filtered].sort(
      (a, b) => new Date(a.expiryDate) - new Date(b.expiryDate)
    );
    setFiltered(sorted);
  };

  const openModal = (type, medicine = null) => {
    setModalType(type);
    setSelectedMedicine(medicine);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setSelectedMedicine(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this medicine?"
    );
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:5000/api/medicines/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        fetchData();
      } catch (err) {
        console.error("Failed to delete medicine", err);
      }
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div className="medicine-list-container">
      <h2>Medicine Inventory</h2>

      <div className="top-controls">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search by ID or name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <button className="sort-btn" onClick={handleSort}>
          Sort by Expiry
        </button>
        <button className="add-btn" onClick={() => openModal("add")}>
          <FaPlus /> Add Medicine
        </button>
      </div>

      <div className="medicine-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Expiry</th>
              <th>Shelf</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((med) => (
              <tr key={med._id || med.id}>
                <td>{med.id}</td>
                <td>{med.name}</td>
                <td>{med.expiryDate}</td>
                <td>{med.shelf}</td>
                <td className="actions">
                  <button
                    onClick={() => openModal("details", med)}
                    title="View"
                  >
                    <FaEye />
                  </button>
                  <button onClick={() => openModal("edit", med)} title="Edit">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(med._id || med.id)} title="Delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filtered.length / itemsPerPage) }).map(
          (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>

      {/* Modals */}
      {showModal && modalType === "add" && (
        <MedicineForm
          closeModal={closeModal}
          onSuccess={fetchData}
          mode="add"
        />
      )}

      {showModal && modalType === "edit" && selectedMedicine && (
        <MedicineForm
          closeModal={closeModal}
          onSuccess={fetchData}
          mode="edit"
          medicine={selectedMedicine}
        />
      )}

      {showModal && modalType === "details" && selectedMedicine && (
        <MedicineDetails
          medicine={selectedMedicine}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Meds;