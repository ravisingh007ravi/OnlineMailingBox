const express = require("express");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);

mongoose
  .connect(
    "mongodb+srv://ravisingh007ravi:RaviSingh786@cluster0.i0abxbi.mongodb.net/",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongoose is Connected😊😊"))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT || 4000, function () {
  console.log("Server is Running Succesfully💕 " + (process.env.PORT || 4000));
});
