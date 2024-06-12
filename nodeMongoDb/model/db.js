const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/StudentDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection succeeded!");
    // Assuming this requires your student model
   
  })
  .catch((err) => {
    console.error("Error in connection:", err);
  });
  require("./student.model");