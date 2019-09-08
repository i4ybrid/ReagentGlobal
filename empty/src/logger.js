const winston = require('winston');
const level = 'debug';
const logger = winston.createLogger({
  level: level,
  prettyPrint: true,
  handleExceptions: true,
  json: false,
  colorize: true,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.File({
      filename: 'log.log',
      level: level,
      format: winston.format.simple()
    })
  ],
  exitOnError: false
});

module.exports.logger = logger;