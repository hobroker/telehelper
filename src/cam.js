const NodeWebcam = require('node-webcam');
const { generatePath } = require('./util');

const shot = async () => {
  const opts = {
    width: 1280,
    height: 720,
    quality: 100,
    verbose: true,
    callbackReturn: 'location'
  };

  const Webcam = NodeWebcam.create(opts);
  const filename = generatePath('selfie');

  return new Promise((resolve, reject) => Webcam.capture(filename, (err, data) => {
    if (err) return reject(err);
    resolve(data);
  }));
};

module.exports.shot = shot;
