const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  // assign RecipientSchema as a sub-document of recipients
  // recipients now contains an array of RecipientSchema records
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

mongoose.model("surveys", surveySchema);
