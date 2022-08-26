const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to Database!"))
    .catch( err => consoleog("conection error", err)) 