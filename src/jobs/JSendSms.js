const CronJob = require('cron').CronJob;
const LOGGER = require('../core/log')
const JOBS_CONFIG = require('../../config/jobs.config.json');
const Sms = require('../core/sms')

class JSendSms {

  constructor(smsInstance) {
    this.JOB_CONFIG = JOBS_CONFIG[this.constructor.name];
    this.sms = smsInstance;
    this.start = this.start.bind(this);
    this.onTick = this.onTick.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.job = new CronJob(this.JOB_CONFIG.cron, this.onTick, this.onComplete);
  }

  start() {
    try {
      this.job.start();
      LOGGER.INFO(`${this.constructor.name} job has init successfully 👏👏👏👏👏`);
    } catch (error) {
      LOGGER.ERROR(`Invalid cron => ${error}`);
    }
  }

  chooseMessage() {
    let index = Math.floor(Math.random() * this.JOB_CONFIG.messages.length);
    return this.JOB_CONFIG.messages[index];
  }

  isBlackHour(date = new Date()) {
    return this.JOB_CONFIG.blackHours
      .some(blackHour => {
        let gH = date.getHours();
        return blackHour === gH;
      });
  }

  getNextDateTick() {
    let nextDates = this.job.nextDates(2); //array
    let isBH = this.isBlackHour(nextDates[0]._d);
    console.log(nextDates[0]._d,nextDates[1]._d)
    return isBH ? nextDates[1]._d : nextDates[0]._d;
  }

  //@overide implenets JOB
  onTick(job) {
    /*if (this.isBlackHour()) return;
    let message = this.chooseMessage();
    new Sms().send(message);
    LOGGER.INFO(`${this.constructor.name} => 🥕 tick => ${message} => Next tick at ${this.getNextDateTick()} `);
    console.dir(this.job.nextDates());*/
    this.getNextDateTick();
  }

  onComplete(job) {
    LOGGER.INFO(`${this.constructor.name} completed`);
  }
}


module.exports = JSendSms;