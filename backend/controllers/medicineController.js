const Medicine = require("../models/Medicine");

// @desc    Get all medicines
// @route   GET /api/medicines
exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching medicines", error: error.message });
  }
};

// @desc    Get single medicine by ID
// @route   GET /api/medicines/:id
exports.getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findOne({ id: req.params.id });
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json(medicine);
  } catch (error) {
    res.status(500).json({ message: "Error fetching medicine", error: error.message });
  }
};

// @desc    Create a new medicine
// @route   POST /api/medicines
exports.createMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json({ message: "Medicine added successfully", medicine });
  } catch (error) {
    res.status(500).json({ message: "Error adding medicine", error: error.message });
  }
};

// @desc    Update a medicine
// @route   PUT /api/medicines/:id
exports.updateMedicine = async (req, res) => {
  try {
    const updated = await Medicine.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json({ message: "Medicine updated", updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating medicine", error: error.message });
  }
};

// @desc    Delete a medicine
// @route   DELETE /api/medicines/:id
exports.deleteMedicine = async (req, res) => {
  try {
    const deleted = await Medicine.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json({ message: "Medicine deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting medicine", error: error.message });
  }
};
