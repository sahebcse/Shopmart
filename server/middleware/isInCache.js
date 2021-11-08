const { client } = require("../utility/redisClient");
const isInCache = (req, res, next) => {
  console.log(req.params);
  console.log("Checking for products data in cache");
  console.log(req.body);
  client.get("home", (err, data) => {
    if (err) {
      console.log(err);
      console.log("Not found in cache");
      next();
    } else {
      console.log(data);
      if (!data) {
        console.log("Not found in cache");
        next();
      } else {
        console.log("Found data in cache");
        res.json(JSON.parse(data));
      }
    }
  });
};

module.exports = { isInCache };
