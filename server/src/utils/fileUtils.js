const fs = require('fs');
const readline = require('readline');
const path = require('path');

const readFileByLine = (name, callback) => {
  const lineReader = readline.createInterface({
    input: fs.createReadStream(path.resolve(__dirname, name))
  });

  lineReader.on('line', line => {
    callback && callback(line);
  });
};

const readFile = (name) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, name), 'utf8', (err, data) => {
      if (err) resolve('');
      else resolve(data);
    });
  });
};

const importEnvVariables = () => {
  return readFile('../../.env.test')
    .then(file => {
      file.split('\n')
        .forEach(line => {
          const values = line.split('=');
          process.env[values[0]] = values[1];
        });
      return true;
    })
}

module.exports = {
  readFileByLine,
  readFile,
  importEnvVariables
};
