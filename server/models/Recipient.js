const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// export the schema in order to make it a sub-document
module.exports = recipientSchema;
