const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: String,
  composition: String,
  type: String,
  category: String,
  dosage: String,
  constraints: String,
  expiryDate: {
    type: Date,
    required: true
  },
  manufactureDate: Date,
  price: Number,
  quantity: Number,
  storageConditions: String,
  prescriptionRequired: {
    type: Boolean,
    default: false
  },
  totalSold: {
    type: Number,
    default: 0
  },
  shelf: String
}, {
  timestamps: true
});

module.exports = mongoose.model("Medicine", medicineSchema);
