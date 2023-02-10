const path = require('path');

module.exports = {
  entry: './pages/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};