const mongoose = require("mongoose");

function connectToDatabase() {
  
  mongoose
    .connect("mongodb+srv://meha:meha@cluster0.zm7lfvv.mongodb.net/Menu")
    .then((response) => console.log("Database connection successful,Menu"))
    .catch((e) => console.log(e));
}

module.exports = {
  connectToDatabase,
};


