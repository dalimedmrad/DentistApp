console.clear();
const express = require("express");
const connectDB = require("./helpers/ConnectDB");
require("dotenv").config();

const cors = require("cors");
const app = express();

// Connect  DB
connectDB();

//middleware
app.use(cors());
app.use(express.json());

// Define Routs
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/appointment", require("./routes/AppointmentRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
