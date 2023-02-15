const express = require('express');
const mongoose = require("mongoose");

const app = express();
const PORT = 3030;

const todoRoutes = require("./routes/todoRoutes");

const connectionOptions =
{
  useUnifiedTopology: true,
  useNewUrlParser: true
};

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://yochi22:Marcador22@cluster0.jzbl6wm.mongodb.net/videoclub", connectionOptions)
  .then(() => console.log("conxion bien, que crack eres karen"))
  .catch((err) => console.error(err));

app.use("/movies", todoRoutes);

app.listen(PORT, () => {
  console.log("mi puerto funciona y es " + PORT);
});
