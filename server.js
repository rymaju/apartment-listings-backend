express = require("express");
cors = require("cors");
mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParse: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("database connection successful!");
});

const apartmentsRouter = require("./routes/apartments");

app.use("/apartments", apartmentsRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
