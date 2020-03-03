const mkdirp = require('mkdirp');

mkdirp('./uploads/tmp/test.html').then((err)=>{
    console.log(err);
})