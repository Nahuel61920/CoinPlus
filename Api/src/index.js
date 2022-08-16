var mongoose = require("mongoose");
var options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect('mongodb://localhost:27017/pfcoinplus', options, function (error) {
    error ? console.log("**Connection Error**") : console.log("**Connected**");
});
module.exports = { mongooseUser: mongoose };
