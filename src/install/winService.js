/*const Service = require('node-windows').Service;
const SERVICE_CONFIG = require('../../config/service.config.json');

const svc = new Service({
  name: SERVICE_CONFIG.nombre,
  description: SERVICE_CONFIG.descripcion,
  script: 'D:\\user\\documents\\u\\test\\estomago\\app.js'
});

svc.on('install', function () {
  console.log('Installed');
  svc.start();
});

svc.on('uninstall', function () {
  console.log('Uninstalled service');
});

if(process.argv[2] === '--install'){
  svc.install();  
} else if(process.argv[2] === '--uninstall'){
  svc.uninstall();  
}
*/
