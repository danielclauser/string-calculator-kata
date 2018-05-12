var exports = module.exports = {};

//@params: 
// String: String with delimiters and numbers
//@retrun: 
//  Array: 2 elements, first with string of delimiters and second is a string of number without personal delimiter. 
//
//Delimiters is '\n' and ',' . 
function getDelimiters(strDelimiter){
    
    // special regExp characters
    var specialChar = ". \ + * ? [ ^ ] $ ( ) { } = ! < > | : -".split(' ');

    // delimiter prefixed.
    var costDelimiter = '\n|,';
    // delimiter passed in first line
    var newDelimiter = '';
    // string cleared up from delimiter in first line
    var strNumbers = strDelimiter;

    // check definition of delimiter in first line
    if (strDelimiter.indexOf('//') < 0) return [costDelimiter, strNumbers];

    // get new delimiter from string
    if (strDelimiter.substring(0,2) =='//'){

        // split new delimiter from sequence of numbers and delimiters
        newDelimiter = strDelimiter.substring(2, strDelimiter.indexOf('\n'));
        strNumbers = strNumbers.substring(strDelimiter.indexOf('\n'));

    };
    
    // delimiter validation
    var specialCharFound = specialChar.filter(function(item) {

        if (newDelimiter.includes(item)) return item;

    });

    // replace special char not valid for RegExp.
    if (specialCharFound.length > 0){
        strNumbers = strNumbers.replace(newDelimiter,"$");
        newDelimiter ="$";
    };

    // construct the final delimiters
    costDelimiter = newDelimiter + '|' + costDelimiter ;

    return [costDelimiter,strNumbers];

};

//@parms  :
// RegExp : valid Regular expression
// String : contain Numbers and delimiters 
//@return :
// Array  : return an int array based on RegExp. 
// element with value > 1000 is forced to 0.
// an empty string return 0 
function getNumbers(regExp,strDelNumber){

    return strDelNumber.split(regExp).map(function(item) {
        // check if is an empty element, happens when the string contain a delimiter in last position 
        if (item == '') return 0;
        // when element is > 1000, it is forced to 0.
        if (item >1000) return 0;

        return parseInt(item, 10);

    });
};

//@params: 
//  Array: Numeric array 
//@retrun: 
//  Array: Negative numeric array
// 
// Filter the array and return only negative numbers
function getNegativeNumbers(arrNumbers){
    var arrNegativeNumber = arrNumbers.filter(function(item) {
        if (item < 0) return item;
    });

    return arrNegativeNumber;
};


// @parms 
// String: list of number delimited with special character.
//         constant delimiter charcter "\n"  and ","
//         in first line could accept personal delimiter.  
// @return
// Int   : Summation of numbers 
exports.add = function(elementToSum){
    
    var sum = 0;
 
    // In case of empty string return 0
    if (elementToSum == ''){
        return 0;
    }
    
    // get two elements array. Position [0] delimiters and position [1] numbers
    var arrDelimNumbers = getDelimiters(elementToSum);
    // for generate the delimiters regular expression
    delimiters = arrDelimNumbers[0];

    // numbers to split based on delimiters. 
    elementToSum = arrDelimNumbers[1];

    // generate the regular expression
    var delimitersRegExp = new RegExp(delimiters);

    // transform input String to int Array with a valid regular expression
    var splitInp = getNumbers(delimitersRegExp,elementToSum);

    // get an array of negative numbers
    var negativeNumbers= getNegativeNumbers(splitInp);

    // exception in case of negative numbers
    try {

        if (negativeNumbers.length > 0 ) throw new SyntaxError("negatives not allowed: "+ negativeNumbers);
            
     
    }
    catch (e) {
        console.log(e);
    }

    // for each element apply a summation function.
    var sum = splitInp.reduce((a , b) => a + b , 0)    

    return sum;
}
var str = '//?\n1000?123,2\n';


output = exports.add(str);
//console.log(output);   

