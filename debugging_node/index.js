const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/companies", (req, res) => {
  res.json([
    {
      name: "Apple",
      nasdaq: "AAPL",
    },
    {
      name: "AMD",
      nasdaq: "AMD",
    },
    {
      name: "Intel",
      nasdaq: "INTC",
    },
    {
      name: "Nvidia",
      nasdaq: "NVDA",
    },
    {
      name: "Qualcomm",
      nasdaq: "QCOM",
    },
  ]);
});

app.get("/artists", (req, res) => {
  const artists = [
    { name: "Led Zeppelin", genre: "rock" },
    { name: "Rush", genre: "rock" },
    { name: "Boston", genre: "rock" },
    { name: "Mozart", genre: "classical" },
    { name: "Bach", genre: "classical" },
    { name: "Beethoven", genre: "classical" },
    { name: "Cardi B", genre: "trash" },
    { name: "Bill's Eyelash", genre: "trash" },
    { name: "Garbage", genre: "trash" },
  ];
  if (req.query.genre) {
    res.json(artists.filter(artist => artist.genre === req.query.genre));
  } else {
    res.json(artists);
  }
});

app.listen(3001, () => {
  console.log("Express listening on port 3001");
});
