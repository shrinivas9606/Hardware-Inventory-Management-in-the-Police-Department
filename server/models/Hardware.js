// server/models/Hardware.js
const mongoose = require('mongoose');

const hardwareSchema = new mongoose.Schema({
    assetId: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    purchaseDate: { type: Date, required: true },
    status: { type: String, default: 'active' },
    maintenanceSchedule: { type: Date }
});

const Hardware = mongoose.model('Hardware', hardwareSchema);

module.exports = Hardware;
