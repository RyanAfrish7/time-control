var os = require('os');
var impl = null;

switch(os.type()) {
  
  case 'Linux':
    impl = require('./impl/linux.js');
    break;

  default:
    throw new Error('Unsupported platform');

  case 'Darwin':
    impl = require('./impl/darwin.js');
    break;
    
}

module.exports = {
  setTime: impl.setTime
}