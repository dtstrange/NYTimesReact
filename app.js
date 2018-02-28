const express = require("express");
const bodyParser = require("body-parser");
const models = require("./app_api/models");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./app_api/routes/index.routes");
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nytreact'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app_client/build'));
app.use("/api", apiRoutes)

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    
});


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});