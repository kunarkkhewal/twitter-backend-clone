const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const dbSetup = require("./db/db-setup");

const PORT = process.env.PORT || 5000;
const app = express();
dbSetup();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
