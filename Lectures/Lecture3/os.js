const os = require("os");

console.log(os.cpus());
console.log(os.uptime / 3600,'hours');
console.log('Network Interfaces',os.networkInterfaces());