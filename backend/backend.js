require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db.js");
const { dataModel } = require("./model/data_model");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.get("/api", (req, res) => {
  res.send("API is working");
});

const mockedCredentials = {
  username: "mocked_user",
  password: "mocked_password",
};

// Authenticate user and return a token
app.post("/authenticate", async (req, res) => {
  try {
    // Mock the authentication logic

    const { username, password } = req.body;
    if (
      username === mockedCredentials.username &&
      password === mockedCredentials.password
    ) {
      // Generate a mocked token
      const token = "mocked_token";
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Verify a token

app.post("/verify", async (req, res) => {
  try {
    // Mock the token verification logic
    const { token } = req.body;
    if (token === "mocked_token") {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});
// get method
app.get("/api/get", async (req, res) => {
  try {
    let data = await dataModel.find().maxTimeMS(20000);
    res.send({ data });
  } catch (err) {
    console.log(err);
    res.send({ msg: "something went wrong", err: err });
  }
});
// post method
app.post("/api/post", async (req, res) => {
  let data = await new dataModel(req.body);
  await data.save();
  try {
    res.send("Hurray...Posted SuccessFully!");
  } catch (err) {
    console.log(err);
    res.send({ msg: "something went wrong", err: err });
  }
});

app.listen(7000, async () => {
  try {
    await connection;
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
  console.log("Server started on port 7000");
});
