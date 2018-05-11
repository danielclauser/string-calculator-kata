// first line retrive

function getDelimiters(strDelimiter){
    
    // delimiter prefixed.
    var costDelimiter = '\n|,';
    // delimiter passed in first line
    var newDelimiter = '';
    // string cleared up from delimiter in first line
    var strNumbers = strDelimiter;

    // check definition of delimiter in first line
    if (strDelimiter.indexOf('//') < 0) return [costDelimiter, strNumbers];

    if (strDelimiter.substring(0,2) =='//'){
        newDelimiter = strDelimiter.substring(2, strDelimiter.indexOf('\n'));
        strNumbers = strNumbers.substring(strDelimiter.indexOf('\n'));

    };
    
   
    costDelimiter = costDelimiter + '|' +newDelimiter;

    return [costDelimiter,strNumbers];

};


// @parm 
// String: list of number delimited with special character.
//         costant delimiter charcter "\n"  and ","
//         in first line could accept personal delimiter.  
// @return
// Int    : Summation of numbers 
function add(elementToSum){
    
    var sum = 0;
 
    // In case of empty string return 0
    if (elementToSum == ''){
        return 0;
    }
    
    var arrDelimNumbers = getDelimiters(elementToSum);
    delimiters = arrDelimNumbers[0];
    elementToSum = arrDelimNumbers[1];

    var delimitersRegExp = new RegExp(delimiters);

    // transform input String to int Array
    var splitInp= elementToSum.split(delimitersRegExp).map(function(item) {
        // check if is an empty element, happens when the sting contain a delimiter in last position 
        if (item == '') return 0;
        return parseInt(item, 10);
    });

    // for each element apply a summation function.
    var sum = splitInp.reduce((a , b) => a + b , 0)    

    return sum;
}
var str = '//ciao\n123ciao123,2';


output = add(str);
console.log(output);   

