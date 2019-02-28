const sayHello = require('./src/assets/js/app');

sayHello("Welcome message");

const p = document.createElement('p');
const pText = document.createTextNode('My first webpack');
p.appendChild(pText);
document.body.appendChild(p);