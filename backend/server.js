const express = require("express");
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/userRouter");
const app = express();

app.use(express.json());
app.use("/api", userRouter);

require("dotenv").config({ path: "./config/.env" });

connectDB();

const PORT = 5000;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`the server is running on port ${PORT}`)
);
