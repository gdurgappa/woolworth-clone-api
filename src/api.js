const express = require("express");
const serverless = require("serverless-http");
const getDataFromWoolyApi = require("./controller");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});
router.post("/getDataFromWoolyApi", getDataFromWoolyApi);
app.use(`/.netlify/functions/api`, router);

app.listen(4000, () => {
  console.log(`App listening on the port 4000`);
});

module.exports = app;
module.exports.handler = serverless(app);
