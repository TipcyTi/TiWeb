const fs = require("fs");
const files = fs.readdirSync("folder")
  .filter(f => f.endsWith(".html"))
  .sort();
fs.writeFileSync("pages.json", JSON.stringify(files));