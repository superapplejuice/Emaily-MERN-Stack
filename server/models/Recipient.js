const { Schema } = require("mongoose");

const recipientSchema = new Schema({
  // remove all whitespaces and make all to lowercase
  // clean up data before it enters the database
  email: { type: String, lowercase: true, trim: true },
  responded: { type: Boolean, default: false }
});

// export the schema in order to make it a sub-document
module.exports = recipientSchema;
