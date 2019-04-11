const path = require('path');

const tmpPath = path.resolve(__dirname, '../tmp');

const generatePath = key => path.resolve(tmpPath, key);

module.exports.generatePath = generatePath;
