const mkdirp = require('mkdirp');
console.log('abc');
console.log('b');
mkdirp('./uploads/tmp/test.html').then((err)=>{
    console.log(err);
})