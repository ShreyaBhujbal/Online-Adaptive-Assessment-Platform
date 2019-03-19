var mongoose = require("mongoose"),
  database =
    "mongodb://shreyabhujbal:shreyabhujbal27@ds135844.mlab.com:35844/doctor"; //url here
mongoose.connect(database, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("connected");
});
require("./user");
