const express = require("express");
const router = express.Router();
const Employer = require("../models/employer");

// POST /api/employers — Register a new employer
router.post("/", async (req, res, next) => {
  try {
    const employer = new Employer(req.body);
    const saved = await employer.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// GET /api/employers — Get all employers
router.get("/", async (req, res, next) => {
  try {
    const employers = await Employer.find().populate("jobs");
    res.json(employers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
