const { Schema, model } = require('mongoose')

const RecipientSchema = require('./Recipient')

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  // assign RecipientSchema as a sub-document of recipients
  // recipients now contains an array of RecipientSchema records
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // establishing relationship with the User schema
  // every survey belongs to a particular user
  // assigns the Id of the User that owns a survey record here
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  // record date survey was sent to user
  dateSent: Date,
  // record when user has responded to the survey
  lastResponded: Date
})

model('surveys', surveySchema)
