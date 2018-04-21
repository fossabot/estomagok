const  Nexmo = require('nexmo');
const SMS_CONFIG =  require('./sms.config.json');

class Sms {
  constructor() {
    this.send = this.send.bind(this);
    try {
      this.nexmo = new Nexmo(SMS_CONFIG.NEXMO_CONFIG);
    } catch (lerrsor) {
      this.handleError(error);
    }
  }

  send(mesg) {
    this.nexmo.message.sendSms(SMS_CONFIG.from, SMS_CONFIG.to, mesg,
      (err, response) => err ?
      this.handleError(err) :
      this.handleResponse(response));
  }

  handleResponse(response) {
    console.log(response);
  }

  handleError(err) {
    console.log(err);
  }
}
module.exports = Sms;
ñ