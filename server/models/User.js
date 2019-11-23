// mongoose users model class
// MongoDB users collection
const { Schema, model } = require("mongoose");

// defining the property of each model instance
const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  credits: { type: Number, default: 1 }
});

// creating a model class
// 1st args: name of the model class
// 2nd args: the schema that defines the model class
model("users", userSchema);
// note: 2 arguments mean defining a new model class
// note: 1 argument means calling a specific model class
