const express = require('express');
const mongoose = require("mongoose");


const app = express();
const PORT = 3030

const todoRoutes = require("./routes/todoRoutes");

const connectionOptions =
{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
};

app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://yochi22:Marcador22@cluster0.jzbl6wm.mongodb.net/videoclub")
  .then(() => console.log("conxion bien, que crack eres karen"))
  .catch((err) => console.error(err));



//Responseheaders CORS (Cross-Origin Resource Sharing)thisconfig allows resources to be requested from a different domain
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE") // Allow-Methods header to "GET, POST, PUT, DELETE"
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/movies", todoRoutes);

app.listen(PORT, () => {
  console.log("mi puerto funciona y es" + PORT)
});
