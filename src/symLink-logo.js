// src/symlink-logo.js

const fs = require("fs");

const assetPath =
  "E:\\JavaScript\\React-Projects\\personal-portfolio\\src\\assets\\img\\logo.svg";
const symlinkPath = "./node_modules/logo.svg";

fs.symlinkSync(assetPath, symlinkPath);
