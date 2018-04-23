var JSendSms = require('./src/jobs/JSendSms');
var Sms = require('./src/core/sms');

new JSendSms().start(new Sms());
//new Sms().send('Prueba')