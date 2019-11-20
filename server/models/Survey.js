const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  // an array of strings
  recipients: [String]
});

mongoose.model("surveys", surveySchema);
