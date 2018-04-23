const CronJob = require('cron').CronJob;
const LOGGER = require('../core/log')
const JOBS_CONFIG = require('../../config/jobs.config.json');


class JSendSms {

  constructor(smsInstance) {
    this.JOB_CONFIG = JOBS_CONFIG[this.constructor.name];
    this.sms = smsInstance;
    this.start = this.start.bind(this);
    this.onTick = this.onTick.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  start() {
    try {
      LOGGER.INFO(`${this.constructor.name} init`);
      new CronJob(this.JOB_CONFIG.cron, this.onTick, this.onComplete).start();
    } catch (error) {
      LOGGER.ERROR(`Invalid cron ${error}`);
    }
  }

  //@overide implenets JOB
  onTick(job) {
    LOGGER.INFO(`${this.constructor.name} tick`);
  }
  onComplete(job) {
    LOGGER.INFO(`${this.constructor.name} completed`);
  }
}


module.exports = JSendSms;
/*
module.exports = {
  start: (smsInstance) => {
    logger.info('---------------------------------------------------JOB EXXECUTE');

    var j = schedule.scheduleJob(, function () {
      console.log('??')
      let horaActual = +(new Date().getHours());

      if (!(horaActual >= 21 && horaActual <= 23) || !(horaActual >= 0 && horaActual <= 8)) {
        //smsInstance.send('¡Es hora de comer, negra!');
        logger.info('Se ha enviado' + (new Date).toString());
      } else {
        logger.info('No se ha enviado ' + (new Date()).toString());
      }

    });
  }
}*/