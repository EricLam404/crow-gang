const mongoose = require("mongoose");
const mongoEconomy = require("discord-mongo-economy");

require("dotenv").config();

module.exports = async () => {
  try {
    let connect = process.env.dbToken;
    await mongoose.connect(connect);
    console.log('Database Connected Successfully');
  } catch (error) {
    console.log('Database Failed to Connect: ', error);
  }
}
