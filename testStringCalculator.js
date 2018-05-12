var stringCalculator = require("./stringCalculator.js");

//@parms : 
// String: Name file
// Int   : value of summation
//@return: Boolean if match expectation value and summation
function validateTest(filename, value){
    var valExpected = filename.split('.')[0].split('_');
    return valExpected[valExpected.length -1] == value;
};

// apply add method to all files in folder.
var folder = 'testfile';
fs = require('fs');
fs.readdir(folder, (err, files) => {
    files.forEach(file => {
        fs.readFile( folder + '/' + file, 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            };
            sum = stringCalculator.add(data);
            console.log('TEST CASE: ' + file )
            console.log('         - Summation  : ' + sum)
            if(validateTest(file, sum)){
                console.log('         - Validation : PASS') ;
            } else{
                console.log('         - Validation : FAIL') ;
            };
            console.log('--------------------------');

        });
    });
});
