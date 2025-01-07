const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Afzaksdjkalja";

const app = express();
app.use(express.json());

const user = [];

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData?.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({ message: "You are not authorized to access this" });
  }
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  user.push({ username, password });
  res.json({ message: "User registered successfully" });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = user.find(
    (u) => u.username === username && u.password === password
  );
  if (!foundUser) {
    res.json({ message: "Invalid username or password" });
    return;
  } else {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ message: "Signin successfully", token });
  }
});

app.get("/me", auth, function (req, res) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData?.username) {
    const foundUser = user.find((u) => u.username === req?.username);
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
});
app.get("/todo", function (req, res) {});

app.listen(3000, function () {});
