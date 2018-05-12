var stringCalculator = require("./kata.js");

fs = require('fs');
fs.readFile('testfile/sum_1_7476.txt', 'utf8', function (err,data) {
    if (err) {
       return console.log(err);
    };
    sum = stringCalculator.add(data);

    console.log('total: ' +sum);
});

