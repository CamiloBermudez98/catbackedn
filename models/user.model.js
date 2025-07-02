const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  telefono: String,
  correo: String,
  imagen:String
});

module.exports = mongoose.model('User', userSchema);