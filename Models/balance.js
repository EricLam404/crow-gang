const { Schema, model } = require("mongoose");

const BalanceSchema = new Schema({
  GuildID: {
    type: String,
    unique: true,
    required: true,
  },
  MemberID: {
    type: String,
    unique: true,
    required: true,
  },
  Amount: {
    type: Number,
    default: 0
  },
  LastDaily: {
    type: Number,
    default: 0
  }
})

module.exports = model("Balance", BalanceSchema);
