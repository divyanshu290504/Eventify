require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
},() => console.log("Connected to MongoDB"));


app.use(cors());
app.use("/api/calendar", require("./Controllers/CalendarController"));
app.use("/event1", require("./Controllers/Event1Controller"));
app.use("/users",require("./Controllers/RegisterController"));
app.use("/users",require("./Controllers/LoginController"));

app.listen(5000,() => console.log("Server started"))