// server/routes/hardware.js
const express = require('express');
const router = express.Router();
const Hardware = require('../models/Hardware');

// Create new hardware
router.post('/add', async (req, res) => {
    const { assetId, type, location, purchaseDate, status, maintenanceSchedule } = req.body;

    try {
        const newHardware = new Hardware({
            assetId, type, location, purchaseDate, status, maintenanceSchedule
        });
        await newHardware.save();
        res.json(newHardware);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Fetch all hardware
router.get('/', async (req, res) => {
    try {
        const hardware = await Hardware.find();
        res.json(hardware);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
