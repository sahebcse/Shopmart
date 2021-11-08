const redis = require("redis");
const client = redis.createClient({
  host: "redis-19739.c264.ap-south-1-1.ec2.cloud.redislabs.com",
  port: "19739",
  password: "v34tH1FsXSp1QfPMaLEI1UdlwsrVCsnS",
});

module.exports = { client };
