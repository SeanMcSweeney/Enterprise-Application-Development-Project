const bcrypt = require('bcrypt');

let pwd = bcrypt.hashSync('12345', 9);
console.log(pwd)