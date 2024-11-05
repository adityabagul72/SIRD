const mongoose = require('mongoose')

const MoUSchema = new mongoose.Schema({
  universityName: { type: String, required: true },
  country: { type: String, required: true },
  moUYear: { type: Number, required: true },
  validTillYear: { type: String, required: true } // Use this to accommodate till terminate...
});

module.exports = mongoose.model('MoU', MoUSchema);