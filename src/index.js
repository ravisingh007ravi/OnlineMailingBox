const express = require("express");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.set('strictQuery', true);

mongoose
  .connect(
    "mongodb+srv://ravisingh007ravi:RaviSingh786@cluster0.i0abxbi.mongodb.net/",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT || 4000, function () {
  console.log("listening at " + (process.env.PORT || 4000));
});
