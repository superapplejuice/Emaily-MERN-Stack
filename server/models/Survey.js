const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  // an array of strings
  recipients: [String],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

mongoose.model("surveys", surveySchema);
