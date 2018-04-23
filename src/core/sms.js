const Nexmo = require('nexmo');
const SMS_CONFIG = require('../../config/sms.config.json');

class Sms {
  constructor() {
    this.send = this.send.bind(this);
    try {
      this.nexmo = new Nexmo(SMS_CONFIG.NEXMO_CONFIG);
    } catch (error) {
      this.handleError(error);
    }
  }

  send(mesg, from = SMS_CONFIG.from, to = SMS_CONFIG.to) {
    this.nexmo.message.sendSms(from, to, mesg,
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