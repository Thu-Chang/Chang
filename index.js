const express = require("express");
const { conn, sql } = require("./connectDB.js");
const nguoiDungRoute = require("./routes/nguoiDungRoute.js");

const app = express();
app.use(express.json());

const PORT = 5000;

nguoiDungRoute(app);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express API
module.exports = app;
