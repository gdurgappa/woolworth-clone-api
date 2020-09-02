const axios = require("axios");

module.exports = async function getDataFromWoolyApi(request, response) {
  const { url, body, method } = request.body;
  let res;
  if (method === "post") {
    res = await axios.post(url, body);
  } else {
    res = await axios.get(url);
  }
  response.send(res.data);
};
