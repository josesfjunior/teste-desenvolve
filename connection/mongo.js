const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/desenvolvimento", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Db running");
  })
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;
module.exports = mongoose;
