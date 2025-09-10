const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "..", "index.html"), "utf8");
const dom = new JSDOM(html);

global.window = dom.window;
global.document = dom.window.document;
