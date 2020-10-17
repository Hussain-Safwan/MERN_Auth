const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Running at ${PORT}`));

// set up mongoose
require('./config/databaseSetup.js')()

// set up routes
app.use('/auth', require('./routes/auth'));