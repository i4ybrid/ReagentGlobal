const winston = require('winston');
const { format } = winston;
const { combine, label, json } = format;

const container = new winston.Container();

container.add('category1', {
  format: combine(
    label({ label: 'category one' }),
    json()
  ),
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'log.log' })
  ]
});

const category1 = container.get('category1');
category1.info('logging to file and console transports');