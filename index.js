const express = require("express");
const app = express();
var fs = require("fs");
var path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
const MongoStore = require('connect-mongo');
dotenv.config();
const passport = require("passport");
const MONGO_URI = process.env.MONGO_URI;
const Session_Secret = process.env.Session_Secret;
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/uploads', express.static('uploads', {
  setHeaders: (res, path, stat) => {
      res.setHeader('X-Content-Type-Options', 'nosniff'); // Stops IDM from sniffing file type
      res.setHeader('Content-Disposition', 'inline'); // Forces view mode
  }
}));


// Mongo DB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", function () {
  console.log("Connected to mongodb");
});

app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'yoursecret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));
  

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  return res.render('home', {error: ''});
});

//Routes
app.use("/", require("./routes/login"));
app.use("/", require("./routes/jobpost"));
app.use("/", require("./routes/jobfind"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));