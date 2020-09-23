let fs = require('fs');

fs.appendFile('../a.json', '', function (err){
    if (err) throw err;
    console.log("salvo!")
})

const a = '10'