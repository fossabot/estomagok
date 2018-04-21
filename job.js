const schedule = require('node-schedule');
//0 0 7/3 ? * * *
const log = require('simple-node-logger');

const logger = log.createSimpleLogger('logger.log');


logger.setLevel('all');



module.exports = {
  start: (smsInstance) => {
    logger.info('---------------------------------------------------JOB EXXECUTE');

    var j = schedule.scheduleJob('* */3 * * *', function () {
      console.log('??')
      let horaActual = +(new Date().getHours());

      if (!(horaActual >= 21 && horaActual <= 23) || !(horaActual >= 0 && horaActual <= 8)) {
        smsInstance.send('¡Es hora de comer negra!');
        logger.info('Se ha enviado' + (new Date).toString());
      } else {
        logger.info('No se ha enviado ' + (new Date()).toString());
      }

    });
    
  }
}