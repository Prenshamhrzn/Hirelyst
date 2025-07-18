const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  description: String,
  website: String,
  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
  }],
});

module.exports = mongoose.model("Employer", employerSchema);
