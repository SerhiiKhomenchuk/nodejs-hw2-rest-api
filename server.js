/** @format */
require("dotenv").config();

const mongoose = require("mongoose");

const URI = process.env.DB_URI;

const app = require("./app");

async function run() {
  try {
    await mongoose.connect(URI);

    console.log("Database connection successfully!");
    app.listen(8080, () => {
      console.log("Server running. Use our API on port: 8080");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
run();
