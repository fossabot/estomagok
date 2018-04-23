const log = require('simple-node-logger');
const logger = log.createSimpleLogger('./logs/logger.log');
const SERVER_CONFIG = require('../../config/service.config.json');

logger.setLevel(SERVER_CONFIG.logLevel);

//@singleton
class LOGGER {
  static INFO(msg){
    return logger.info(msg)
  }

  static WARN(msg){
    return logger.warn(msg)
  }

  static ERROR(msg){
    return logger.error(msg)
  }
}

module.exports = LOGGER;