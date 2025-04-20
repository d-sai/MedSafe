// const express = require("express");
// const router = express.Router();
// const Medicine = require("../models/Medicine");

// GET all medicines
// router.get("/", async (req, res) => {
//   const meds = await Medicine.find();
//   res.json(meds);
// });

// POST new medicine
// router.post("/", async (req, res) => {
//   const newMed = new Medicine(req.body);
//   await newMed.save();
//   res.status(201).json(newMed);
// });

// PUT update medicine
// router.put("/:id", async (req, res) => {
//   const updated = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// DELETE medicine
// router.delete("/:id", async (req, res) => {
//   await Medicine.findByIdAndDelete(req.params.id);
//   res.json({ message: "Medicine deleted" });
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine,
} = require("../controllers/medicineController");
const protect = require("../middleware/authMiddleware");

// Public (or Protected, your choice)
router.get("/", protect, getAllMedicines);
router.get("/:id", protect, getMedicineById);

// Protected Routes
router.post("/", protect, createMedicine);
router.put("/:id", protect, updateMedicine);
router.delete("/:id", protect, deleteMedicine);

module.exports = router;
