const fs = require("fs");
const delay = require("mocker-api/utils/delay");

let proxy = {};
const regExp = new RegExp(/\.js$/);
function walk(dir) {
  const subs = fs.readdirSync(dir, { withFileTypes: true });
  subs.forEach(dirent => {
    // 加载当前目录下的.js文件
    if (dirent.name !== "index.js" && regExp.test(dirent.name)) {
      let data = require(`${dir}/${dirent.name}`);
      proxy = {
        ...proxy,
        ...data
      };
    }
  });
}
walk(__dirname);

module.exports = delay(proxy, 1000);
