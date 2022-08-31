const mongoose = require("mongoose");

const URL =
  "mongodb+srv://viki-javaj2ee:mymongodb@cluster0.kkpvwcu.mongodb.net/viki-resumebuilder";

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB connection Successful !!!");
});

connection.on("error", (err) => {
  console.error("Mongo DB connection Error --> ", err);
});
