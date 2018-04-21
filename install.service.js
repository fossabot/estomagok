var Service = require('node-windows').Service;
 
// Create a new service object 
var svc = new Service({
  name:'AEstom',
  description: 'The nodejs.org example web server.',
  script: 'D:\\user\\documents\\u\\test\\estomago\\app.js'
});
 
// Listen for the "install" event, which indicates the 
// process is available as a service. 
svc.on('install',function(){
  svc.start();
  console.log('installed')
});
 
svc.install();