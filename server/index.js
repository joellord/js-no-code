const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

app.post("/temp", (req, res) => {
  console.log(`Received ${req.body}`);
  console.log(`Temperature: ${req.body.temp} C, Humidity: ${req.body.humidity}%`)
  res.send("OK").status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});