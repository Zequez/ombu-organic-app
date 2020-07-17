const fs = require("fs");
const YAML = require("yaml");

const readData = (f) => YAML.parse(fs.readFileSync(`./data/${f}.yml`, "utf8"));

const app = readData("app");

module.exports = {
  basedir: "src/components",
  locals: {
    app,
  },
};
