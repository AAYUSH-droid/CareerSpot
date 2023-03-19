require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("jobs api");
});

const port = process.env.PORT;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
