const mongoose = require("../connection/mongo");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  data_nascimento:{
    type: String,
    required: true,
  },
  phone_number:{
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("Users", UsersSchema);
