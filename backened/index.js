const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
//routes
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = 8000;

//connections
mongoose
  .connect("mongodb://127.0.0.1:27017/GymDashboard")
  .then(() => console.log("MongoDB connected!"))
  .catch((e) => console.log("Error: ", e));

app.use("/", authRoutes);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
