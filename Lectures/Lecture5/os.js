const path = require('path');

const filePath = '\Desktop\BackEnd\pure_js_server_learning\commonjs.txt';

console.log('File Name:', path.basename(filePath));
console.log('Directory:', path.dirname(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Normalized Path:', path.normalize(filePath));
console.log('Parsed Path:', path.parse(filePath));