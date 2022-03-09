// Required modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const uploadRoute = require("./routes/images");

// Create server of express
const app = express();

// Config
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect with db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", catRoute);
app.use("/api/upload", uploadRoute);

// Run server
app.listen(5000, () => {
  console.log("Backend is running");
});