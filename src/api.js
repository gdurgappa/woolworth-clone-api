const express = require("express");
const serverless = require("serverless-http");
const getDataFromWoolyApi = require("./controller");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});
router.post("/getDataFromWoolyApi", getDataFromWoolyApi);
app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
