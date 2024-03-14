const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/api/jokes", (req, res) => {
  res.send([
    {
      id: 1,
      title: "First joke",
      joke: "This is 1 joke",
    },
    {
      id: 2,
      title: "Second joke",
      joke: "This is 2nd joke",
    },
    {
      id: 3,
      title: "Third joke",
      joke: "This is 3rd joke",
    },
    {
      id: 4,
      title: "Fourth joke",
      joke: "This is 4rd joke",
    },
    {
      id: 5,
      title: "Fivth joke",
      joke: "This is 5th joke",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Your app is running at http://localhost:${PORT}`);
});
