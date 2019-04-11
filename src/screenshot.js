const screenshot = require('screenshot-desktop');
const fs = require('fs');
const { generatePath } = require('./util');

const shootScreen = async () => {
  const shots = await screenshot.all();
  const filenames = shots.map((shot, index) => {
    const filename = generatePath(`shot${ index }.jpg`);
    fs.writeFileSync(filename, shot);
    return filename;
  });

  return filenames;
};

module.exports.shootScreen = shootScreen;
